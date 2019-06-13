#! /usr/bin/env node
global.banner = `
███████╗██████╗  ██████╗ ███╗   ██╗████████╗██╗     ███████╗███████╗███████╗
██╔════╝██╔══██╗██╔═══██╗████╗  ██║╚══██╔══╝██║     ██╔════╝██╔════╝██╔════╝
█████╗  ██████╔╝██║   ██║██╔██╗ ██║   ██║   ██║     █████╗  ███████╗███████╗
██╔══╝  ██╔══██╗██║   ██║██║╚██╗██║   ██║   ██║     ██╔══╝  ╚════██║╚════██║
██║     ██║  ██║╚██████╔╝██║ ╚████║   ██║   ███████╗███████╗███████║███████║
╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚══════╝╚══════╝╚══════╝╚══════╝
<<<<<<<<<<<<   FeathersJS - RiotJS - Turbolinks - Express    >>>>>>>>>>>>>>> 
----------------------------------------------------------------------------
`
const args = require('args-parser')(process.argv)
const create = require('./commands/create');

const [a,b, name] = process.argv;
if (!name || name.match(/[<>:"\/\\|?*\x00-\x1F]/) || name === 'name') {
console.log(
`
Invalid directory name or command.

USAGE:
  npx frontless <project-name>                   create new project (with playground)
  npx frontless <project-name> --clean           create new project (without playground)
`)
process.exit(0)
}

const arguments = {name, ...args};

if (arguments.name && name !== 'help') {
  create(arguments)
}

if (arguments.help) {
console.log(`
${global.banner}
@GitHub: https://github.com/nesterow/frontless
@License: MIT
@Author: Anton Nesterov <arch.nesterov@gmail.com>

USAGE:
  npx frontless <project-name>                   create new project (with playground)
  npx frontless <project-name> --clean           create new project (without playground)

UNAVAILABLE:
  npx frontless deploy <nowjs|heroku|docker>     deploy project
`)
}