  

module.exports = {
  name: 'generate',
  alias: ['g'],
  run: async toolbox => {
    const {
      parameters,
      template: { generate },
      print: { info },
    } = toolbox

    const name = parameters.first

    await generate({
      template: 'component.js.ejs',
      target: `components/${name}.js`,
      props: { name },
    })

    info(`Generated file at components/${name}.js`)
  },
}
