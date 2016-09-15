export default function bindComponentHandlers(component, context) {
  const { prototype } = component;

  Object.getOwnPropertyNames(prototype).forEach(method => {
    if (method.startsWith('handle')) {
      context[method] = context[method].bind(context);
    }
  });
}
