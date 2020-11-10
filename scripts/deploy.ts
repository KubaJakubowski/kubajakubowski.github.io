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

  setTimeout(()=> {
    console.log(`Git: `, `git add`);
    exec('git add .');

    setTimeout(()=>{
      console.log(`Git: `, `git commit`);
      exec(`git commit -m "chore: deploy"`);

      setTimeout(()=> {
        console.log('Git: ', 'pushing build');
        exec('git push');

        setTimeout(()=> {
          console.log('Git: ', 'pushing build');
          exec('git push');

          setTimeout(()=> {
            console.log('Git: ', 'checked out to main branch');
            exec('git checkout main');
          }, 5000)
        }, 1000)
      }, 1000)
    }, 1000)
  }, 1000)

}
deploy()
