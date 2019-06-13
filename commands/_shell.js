const { spawn } = require('child_process');


// const repoURL = 'https://github.com/nesterow/frontless';

// runCommand('git', ['clone', repoURL, name])
//   .then(() => {
//     return runCommand('rm', ['-rf', `${name}/.git`]);
//   }).then(() => {
//     console.log('Installing dependencies...');
//     return runCommand('npm', ['install'], {
//       cwd: process.cwd() + '/' + name
//     });
//   }).then(() => {
//     console.log('Done! 🏁');
//     console.log('');
//     console.log('To get started:');
//     console.log('cd', name);
//     console.log('yarn start');
//     console.log('- or -');
//     console.log('npm start');
//   });

module.exports = function runCommand(command, args, options = undefined) {
  const spawned = spawn(command, args, options);

  return new Promise((resolve) => {
    spawned.stdout.on('data', (data) => {
      // console.log(data.toString());
    });
    
    spawned.stderr.on('data', (data) => {
      // console.error(data.toString());
    });
    
    spawned.on('close', () => {
      resolve();
    });
  });
}