const exec = require('await-exec')


async function deploy(){

console.log('Depolying: ', `deploy-${Date.now()}`);

await exec('git checkout deploy');
console.log(`Git: `, `checked out to deploy branch`);

await exec(`git pull`)
console.log(`Git: `, `pulling changes`)

console.log(`Angular: `, `starting building docs`);
await exec(`npm run deploy-build`)
console.log(`Angular: `, `finished building docs`);

await exec('git add .');
exec(`git commit -m "chore: deploy-${Date.now()}"`);
exec('git push');
console.log('Git: ', 'pushing build');

setTimeout(()=> {
  exec('git checkout main');
  console.log('Git: ', 'checked out to main branch');
}, 1000)

}

deploy()
