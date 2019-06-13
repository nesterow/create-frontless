const shell = require('./_shell')
const ora = require('ora')
const chalk = require('chalk')
const fs = require('fs')

const REPO = 'git@github.com:nesterow/frontless.git'

const REMOVE = [
  '.git',
  '.github',
  '.gitattributes',
  '.travis.yml',
  'package-lock.json',
  'LICENSE',
  'readme.md'
]

const CLEAN = [
  'components/examples',
  'components/gist.riot',
  'services/playground',
  'pages/playground',
]

const services = `
module.exports = function (app, mongo) {
  require('./users')(app, mongo)
}
`

module.exports = async function (args) {
console.log(chalk.red(`
███████╗██████╗  ██████╗ ███╗   ██╗████████╗██╗     ███████╗███████╗███████╗
██╔════╝██╔══██╗██╔═══██╗████╗  ██║╚══██╔══╝██║     ██╔════╝██╔════╝██╔════╝
█████╗  ██████╔╝██║   ██║██╔██╗ ██║   ██║   ██║     █████╗  ███████╗███████╗
██╔══╝  ██╔══██╗██║   ██║██║╚██╗██║   ██║   ██║     ██╔══╝  ╚════██║╚════██║
██║     ██║  ██║╚██████╔╝██║ ╚████║   ██║   ███████╗███████╗███████║███████║
╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚══════╝╚══════╝╚══════╝╚══════╝
<<<<<<<<<<<<   FeathersJS - RiotJS - Turbolinks - Express    >>>>>>>>>>>>>>> 
----------------------------------------------------------------------------
`))

  const download = ora('Downloading...').start()
  await shell('git', [ 'clone', '-b', 'master', '--single-branch', '--depth', '1', REPO, args.name])
  await Promise.all(REMOVE.map((file) => shell('rm', ['-rf', `${args.name}/${file}`])))
  if (args.clean) {
    await Promise.all(CLEAN.map((file) => shell('rm', ['-rf', `${args.name}/${file}`])))
    fs.writeFileSync(`${args.name}/services/index.js`,services,{encoding:'utf8',flag:'w'})
  }
  download.stop()

  const install = ora('Installing dependencies...').start()
  await shell('npm', ['install'], {  cwd: process.cwd() + '/' + args.name })
  install.stop()

  console.log(chalk.green('🏁🏁🏁  Done! 🏁🏁🏁 \n\n'));
  console.log(chalk.blue('Next steps:\n'))
  console.log(chalk.blue(`   ~$ cd ${args.name}`))
  console.log(chalk.blue(`   ~$ yarn start\n\n`))
}