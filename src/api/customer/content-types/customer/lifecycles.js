

module.exports = {
    
  async afterCreate(event) {
      const { result, params } = event;

      
      const { exec } = require('child_process');
      // Count how many folders are in instances directory
      exec('ls -l instances | wc -l', (err, stdout, stderr) => {
        if (err) {
          console.error(err)
          return;
        }

        console.log(typeof stdout)
        

        const port = 8123+parseInt(stdout);
        exec(`./scripts/script.sh ${params.data.url} ${port}`, (err, stdout, stderr) => {
          if (err) {
            console.error(err)
            return;
          }
          // the *entire* stdout and stderr (buffered)
          console.log(`stdout: ${stdout}`);
          console.log(`stderr: ${stderr}`);
        })
        
      })



      // Run the sh script in /scripts/ with the url as an argument
      
     


      
      

 
  }
      
  };