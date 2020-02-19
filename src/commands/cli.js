

const command = {
  name: 'cli',
  run: async toolbox => {
    const { print } = toolbox

    print.info('Welcome to your Thresh CLI')
  },
}

module.exports = command
