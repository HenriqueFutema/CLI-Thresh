  

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
      target: `src/${name}.js`,
      props: { name },
    })

    info(`Generated file at src/${name}.js`)
  },
}
