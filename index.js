/* const axios= require('axios');
const cheerio = require('cheerio');*/
const inquirer= require('inquirer'); 
const youtubedl= require('youtube-dl');
const fs = require('fs');



(async()=>{



    
    
    const url = inquirer.prompt([
        {type:'input', name:'urlSeleccionada', message:'Agrega la url del video de youtube'}
    ]).then(answers =>{
        //console.log(answers['urlSeleccionada']);
       
        descargarVideo(answers['urlSeleccionada']);
    });


})();





   function descargarVideo(url){
    
    const video = youtubedl(url,
    // Optional arguments passed to youtube-dl.
    ['--format=18'],
    // Additional options can be given for calling `child_process.execFile()`.
    { cwd: __dirname })
   
  // Will be called when the download starts.
  video.on('info', function(info) {
    console.log('Download started')
    console.log('filename: ' + info._filename)
    console.log('size: ' + info.size)
 
  })
  video.pipe(fs.createWriteStream(`${url['title']}.mp4`))
} 
 
