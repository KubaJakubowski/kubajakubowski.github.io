const { exec } = require('child_process');

export{}

console.log('Depolying: ', `deploy-${Date.now()}`);

exec('git checkout deploy');
console.log(`Git: `, `checked out to deploy branch`);

exec(`git pull`)
console.log(`Git: `, `pulling changes`)

console.log(`Angular: `, `starting building docs`);
await exec(`npm run deploy-build`)
console.log(`Angular: `, `finished building docs`);

exec('git add .');
exec(`git commit -m "chore: deploy-${Date.now()}"`);
exec('git push');
console.log('Git: ', 'pushing build');

exec('git checkout main');
console.log('Git: ', 'checked out to main branch');


