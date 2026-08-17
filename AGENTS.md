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

## Git commits

- Use Conventional Commits for every commit unless the user explicitly requests another format.
- Format commit subjects as `type(optional-scope): concise description`.
- Choose the most specific standard type, such as `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `build`, `ci`, or `chore`.
- **Nunca** menciones asistentes de IA ni sus proveedores (Claude, Anthropic, OpenAI, ChatGPT,
  GPT, Copilot, Gemini, Cursor, etc.) en el mensaje de commit: ni en el asunto, ni en el
  cuerpo, ni en trailers del tipo `Co-Authored-By` o `Generated with`. Los commits se
  redactan como si los hubiera escrito una persona del equipo.
- El mensaje describe **qué** cambia y **por qué**, no la herramienta con la que se hizo.
