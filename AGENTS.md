# Repository instructions

## Antes de empezar cualquier tarea

1. **Analiza la tarea en profundidad.** Antes de escribir o modificar código, explora el
   repositorio, entiende el contexto, revisa las convenciones existentes y localiza los
   ficheros implicados.
2. **Haz una breve entrevista.** Si queda algún requisito **funcional** o **no funcional**
   sin definir (alcance, criterios de aceptación, formato de salida, estrategia de ramas y
   commits, rendimiento, accesibilidad, SEO, compatibilidad, seguridad, datos de prueba…),
   pregunta antes de ejecutar. Es preferible una entrevista corta y concreta a asumir
   cosas por defecto.
3. **Define el plan y confírmalo.** Presenta un plan breve con los pasos, los ficheros que
   se van a tocar y el resultado esperado. No empieces la ejecución hasta que el plan esté
   claro y aceptado.
4. **Ejecuta el plan.** Solo entonces se implementa, y cualquier desviación relevante
   respecto al plan se comunica.

## Cómo se escribe

Todo el texto que redactes debe leerse como escrito por una persona. Aplica a las
entradas del blog, a los mensajes de commit, a las descripciones de pull request y a
los comentarios del código.

**Excepción:** el texto que ya ha escrito Maria, por ejemplo el cuerpo de una issue, se
reproduce tal cual. Estas normas son para lo que escribes tú, no para corregirle el
estilo a ella.

### Puntuación

- Nada de guion largo (—) ni guion medio (–) como inciso o pausa dramática. En su lugar
  usa coma, paréntesis, dos puntos o punto y aparte.
- Nada de punto y coma en prosa. Casi siempre esconde dos frases. Sepáralas con un punto.
- Nada de emoji en titulares ni de flechas decorativas dentro del texto.

### Muletillas que delatan

- "No se trata de X, sino de Y" y demás contrastes en cadena.
- Enumeraciones de tres elementos por sistema, todas del mismo largo y con el mismo ritmo.
- Aperturas de relleno: "Es importante destacar que", "Cabe señalar", "En un mundo donde",
  "Ya sea que".
- Cierres de resumen ("En conclusión", "En resumen") cuando el texto ya ha dicho lo que
  tenía que decir.
- Negrita repartida por todo el párrafo para dar énfasis. Resérvala para lo que de verdad
  quieres que el lector se lleve.
- Preguntas retóricas encadenadas, cada una seguida de su propia respuesta.

### La prueba

Léelo en voz alta. Si suena a folleto corporativo o a informe, reescríbelo. Cuando
escribe una persona las frases tienen longitudes desiguales, alguna empieza por una
conjunción y no todos los párrafos rematan con una conclusión.

## Al terminar una tarea

- **Nunca cierres la issue de GitHub** ni la marques como completada, aunque el trabajo
  esté terminado y verificado por tu parte. El cierre lo decide siempre una persona.
- En su lugar, **añade a la issue la etiqueta `verificar`**, que es la señal de que el
  trabajo está listo para revisión.
- Por el mismo motivo, **no uses palabras clave de cierre automático** en los mensajes de
  commit ni en las descripciones de los pull requests: nada de `Closes #N`, `Fixes #N`,
  `Resolves #N` ni sus variantes, porque GitHub cierra la issue al mergear. Referencia la
  issue con `Refs #N`.

## Git commits

- Use Conventional Commits for every commit unless the user explicitly requests another format.
- Format commit subjects as `type(optional-scope): concise description`.
- Choose the most specific standard type, such as `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `build`, `ci`, or `chore`.
- **Nunca** menciones asistentes de IA ni sus proveedores (Claude, Anthropic, OpenAI, ChatGPT,
  GPT, Copilot, Gemini, Cursor, etc.) en el mensaje de commit: ni en el asunto, ni en el
  cuerpo, ni en trailers del tipo `Co-Authored-By` o `Generated with`. Los commits se
  redactan como si los hubiera escrito una persona del equipo.
- El mensaje describe **qué** cambia y **por qué**, no la herramienta con la que se hizo.
