# Repository instructions

## Before starting any task

1. **Analyse the task in depth.** Before writing or changing code, explore the repository,
   understand the context, review the existing conventions and locate the files involved.
2. **Run a short interview.** If any **functional** or **non-functional** requirement is
   still undefined (scope, acceptance criteria, output format, branch and commit strategy,
   performance, accessibility, SEO, compatibility, security, test data…), ask before you
   act. A short, concrete interview is better than silent defaults.
3. **Define the plan and get it confirmed.** Present a brief plan with the steps, the files
   to be touched and the expected result. Do not start until the plan is clear and accepted.
4. **Execute the plan.** Only then implement, and report any relevant deviation from the
   plan.

## Language policy

Developers work in English. The website speaks to its visitors in Spanish and Catalan.

| What | Language |
|---|---|
| Code: identifiers, comments, file names, components, collections, data attributes | English |
| Git branches and commit messages | English |
| Analytics event names | English |
| README, technical documentation and this file | English |
| Website content: page copy, blog posts, legal pages, `alt` text, metadata | Spanish and Catalan |
| Public URLs and slugs (they are content and SEO), including the files under `src/pages/` that define them | Spanish, and Catalan under `/ca/` |
| Business documents in `docs/` (analyses, guides for Maria) | Spanish, with English file names |

The writing rules below apply to everything a person will read: the human tone applies in
both languages, and the punctuation and filler rules apply to Spanish and Catalan content.

## What a visitor is looking for

Less is more. People do not come to read. They come to check in a few seconds that they
will find what they need here, and to book. Every extra paragraph delays that moment, and
text that nobody reads is useless however well written it is.

- Before adding new text, check whether it is already said somewhere else on the site.
  It almost always is, and then the job is to sharpen what exists, not to add more.
- If a long text deserves to exist, its place is the blog, not a page on the way to
  booking.
- On the home page and the service pages, what helps people decide comes first:
  headlines that are understood at a glance, short lists and a clear path to the booking
  button.
- When choosing between explaining better and explaining less, explain less and link to
  the detail.

## How to write

Everything you write must read as if a person wrote it. This applies to blog posts,
commit messages, pull request descriptions and code comments.

**About Maria's text.** When a post comes from the body of an issue, her words and her
argument are not touched. Her sentences are not rewritten, her ideas are not reordered
and her voice is not "improved". Punctuation is normalised according to these rules,
because swapping a semicolon for a full stop does not change a single word of what she
says.

When turning her text into Markdown, keep the way she breaks her sentences. Joining two
of her sentences with a colon, or turning them into a "no se trata de X, sino de Y",
introduces exactly the tic these rules try to avoid, and puts it in someone else's mouth.

### Punctuation (Spanish and Catalan content)

- No em dash (—) or en dash (–) as an aside or dramatic pause. Use a comma, brackets, a
  colon or a new sentence instead.
- No semicolons in prose. They almost always hide two sentences. Split them with a full
  stop.
- No emoji in headlines and no decorative arrows inside the text.

### Giveaway fillers

- "No se trata de X, sino de Y" and other chained contrasts.
- Lists of three items by default, all of the same length and rhythm.
- Filler openings: "Es importante destacar que", "Cabe señalar", "En un mundo donde",
  "Ya sea que".
- Summary endings ("En conclusión", "En resumen") when the text has already said what it
  had to say.
- Bold scattered across the paragraph for emphasis. Keep it for what you really want the
  reader to take away.
- Chained rhetorical questions, each followed by its own answer.

### The test

Read it out loud. If it sounds like a corporate brochure or a report, rewrite it. When a
person writes, sentences have uneven lengths, some start with a conjunction and not every
paragraph ends with a conclusion.

## When a task is finished

- **Never close the GitHub issue** or mark it as done, even if the work is finished and
  verified on your side. A person always decides when to close it.
- Instead, **add the `verificar` label to the issue**, which signals that the work is
  ready for review.
- For the same reason, **do not use auto-closing keywords** in commit messages or pull
  request descriptions: no `Closes #N`, `Fixes #N`, `Resolves #N` or their variants,
  because GitHub closes the issue on merge. Reference the issue with `Refs #N`.

## Working branches

- By default, work directly on `main`. Do not create a new branch for a task unless the
  person explicitly asks for one. When they do, all the commits for that task go on that
  single branch.

## Git commits

- Use Conventional Commits for every commit unless the user explicitly requests another
  format.
- Format commit subjects as `type(optional-scope): concise description`, in English.
- Choose the most specific standard type, such as `feat`, `fix`, `docs`, `style`,
  `refactor`, `test`, `build`, `ci`, or `chore`.
- **Never** mention AI assistants or their providers (Claude, Anthropic, OpenAI, ChatGPT,
  GPT, Copilot, Gemini, Cursor, etc.) in the commit message: not in the subject, the body
  or trailers such as `Co-Authored-By` or `Generated with`. Commits are written as if a
  person on the team wrote them.
- The message describes **what** changes and **why**, not the tool used to make it.
