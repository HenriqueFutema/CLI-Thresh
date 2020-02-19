  

module.exports = {
  name: 'create-thresh-app',
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
      target: `./src/app.js`,
      props: { name },
    })

    await generate({
      template: 'index.js.ejs',
      target: `./public/index.html`,
      props: { name },
    })

    info(`Generated Thresh app`)
    info(`Edit file src/app.js`)
  },
}
