#! /usr/bin/env node
const args = require('args-parser')(process.argv)
const create = require('./commands/create');

const [a,b, name] = process.argv;
if (!name || name.match(/[<>:"\/\\|?*\x00-\x1F]/) || name === 'name' || name === 'deploy') {
console.log(
`
Invalid directory name or command.

USAGE:
  npx frontless <project-name>                   create new project (with playground)
  npx frontless <project-name>                   create new project (clean)
`)
process.exit(0)
}

const arguments = {name, ...args};

if (arguments.name) {
  create(arguments)
}

if (arguments.help) {
console.log(`
███████╗██████╗  ██████╗ ███╗   ██╗████████╗██╗     ███████╗███████╗███████╗
██╔════╝██╔══██╗██╔═══██╗████╗  ██║╚══██╔══╝██║     ██╔════╝██╔════╝██╔════╝
█████╗  ██████╔╝██║   ██║██╔██╗ ██║   ██║   ██║     █████╗  ███████╗███████╗
██╔══╝  ██╔══██╗██║   ██║██║╚██╗██║   ██║   ██║     ██╔══╝  ╚════██║╚════██║
██║     ██║  ██║╚██████╔╝██║ ╚████║   ██║   ███████╗███████╗███████║███████║
╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚══════╝╚══════╝╚══════╝╚══════╝
<<<<<<<<<<<<   FeathersJS - RiotJS - Turbolinks - Express    >>>>>>>>>>>>>>> 
----------------------------------------------------------------------------
@GitHub: https://github.com/nesterow/frontless
@License: MIT
@Author: Anton Nesterov <arch.nesterov@gmail.com>

USAGE:
  npx frontless <project-name>                   create new project (with playground)
  npx frontless <project-name>                   create new project (clean)

UNAVAILABLE:
  [npx frontless deploy <nowjs|heroku|docker>     deploy project]
`)
}