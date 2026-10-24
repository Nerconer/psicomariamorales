// Renders the 1200x630 share images: satori lays the card out as SVG and
// sharp turns it into a JPEG. Colours come from the design tokens in
// global.css and the photo is the hero portrait, so a change to either
// reaches the images on the next build.
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import satori from 'satori';
import sharp from 'sharp';
import { SITE } from '../consts';
import type { OgText } from '../data/og';
import type { Locale } from '../i18n/config';

const WIDTH = 1200;
const HEIGHT = 630;
const PHOTO = { width: 400, height: 490 };

// Paths are taken from the project root: the build runs there, and this
// module is bundled elsewhere, so import.meta.url would not point to src/.
const fromRoot = (...parts: string[]) => join(process.cwd(), ...parts);

async function loadAssets() {
  const css = await readFile(fromRoot('src/styles/global.css'), 'utf8');
  const token = (name: string) => {
    const value = css.match(new RegExp(`--color-${name}:\\s*(#[0-9a-fA-F]{3,8})`))?.[1];
    if (!value) throw new Error(`Design token --color-${name} not found in global.css`);
    return value;
  };
  const colors = Object.fromEntries(['bg', 'surface', 'primary', 'line', 'sun', 'ink', 'muted'].map((n) => [n, token(n)]));

  const font = (weight: number) =>
    readFile(fromRoot(`node_modules/@fontsource/plus-jakarta-sans/files/plus-jakarta-sans-latin-${weight}-normal.woff`));
  const fonts = await Promise.all(
    ([400, 500, 600, 700] as const).map(async (weight) => ({ name: 'Plus Jakarta Sans', data: await font(weight), weight, style: 'normal' as const }))
  );

  const photo = await sharp(fromRoot('src/assets/img/maria-hero.jpg'))
    .resize(PHOTO.width * 2, PHOTO.height * 2, { fit: 'cover', position: 'top' })
    .jpeg({ quality: 88 })
    .toBuffer();
  const logo = await sharp(fromRoot('src/assets/brand/logo-mark.svg'), { density: 300 }).resize(112, 112).png().toBuffer();

  return {
    colors,
    fonts,
    photo: `data:image/jpeg;base64,${photo.toString('base64')}`,
    logo: `data:image/png;base64,${logo.toString('base64')}`,
  };
}

let assets: ReturnType<typeof loadAssets> | undefined;

type Style = Record<string, string | number>;
interface Node {
  type: string;
  props: { style?: Style; children?: Node | string | Array<Node | string>; [key: string]: unknown };
}
const el = (type: string, style: Style, children?: Node['props']['children'], props: Record<string, unknown> = {}): Node => ({
  type,
  props: { style, children, ...props },
});

/** Long headlines get a smaller size so they still fit in three lines. */
const titleSize = (title: string) => (title.length <= 26 ? 72 : title.length <= 40 ? 62 : 54);

export async function renderOgImage(locale: Locale, text: OgText): Promise<Buffer> {
  const { colors: c, fonts, photo, logo } = await (assets ??= loadAssets());
  const role = locale === 'ca' ? SITE.roleCa : SITE.role;

  const card = el('div', { width: WIDTH, height: HEIGHT, display: 'flex', position: 'relative', backgroundColor: c.bg, fontFamily: 'Plus Jakarta Sans', color: c.ink }, [
    // Decorative circles behind the photo, as on the site.
    el('div', { position: 'absolute', top: 22, right: 22, width: 180, height: 180, borderRadius: 9999, backgroundColor: c.sun }),
    el('div', { position: 'absolute', top: 480, left: 686, width: 124, height: 124, borderRadius: 9999, backgroundColor: c.line }),
    el('img', { position: 'absolute', top: 70, right: 64, borderRadius: 36 }, undefined, {
      src: photo,
      width: PHOTO.width,
      height: PHOTO.height,
    }),
    el('div', { position: 'absolute', top: 64, left: 72, width: 650, height: 502, display: 'flex', flexDirection: 'column' }, [
      el('div', { display: 'flex', alignItems: 'center' }, [
        el('img', {}, undefined, { src: logo, width: 56, height: 56 }),
        el('div', { display: 'flex', flexDirection: 'column', marginLeft: 18 }, [
          el('div', { fontSize: 26, fontWeight: 700 }, SITE.person),
          el('div', { fontSize: 21, fontWeight: 500, color: c.muted, marginTop: 2 }, `${role} · Col. ${SITE.licenseNumber}`),
        ]),
      ]),
      el('div', { marginTop: 40, maxWidth: 600, fontSize: titleSize(text.title), fontWeight: 700, lineHeight: 1.12, color: c.primary }, text.title),
      el('div', { marginTop: 22, maxWidth: 600, fontSize: 28, lineHeight: 1.4 }, text.subtitle),
      el(
        'div',
        { display: 'flex', marginTop: 'auto' },
        text.chips.map((chip, i) =>
          el(
            'div',
            { flexShrink: 0, whiteSpace: 'nowrap', marginRight: 10, padding: '10px 20px', borderRadius: 9999, fontSize: 20, fontWeight: 600, backgroundColor: i === 0 ? c.sun : c.surface },
            chip
          )
        )
      ),
    ]),
  ]);

  // satori's types expect React elements; the plain object tree is what it reads.
  const svg = await satori(card as unknown as Parameters<typeof satori>[0], { width: WIDTH, height: HEIGHT, fonts });
  return sharp(Buffer.from(svg)).jpeg({ quality: 86, mozjpeg: true }).toBuffer();
}
