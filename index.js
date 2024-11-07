
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';
inquirer
  .prompt([
    {
        message:'Typr your URL here, ',
        name:'URL'

  }])
  .then((answers) => {
    const URL = answers.URL;

    var qr_png = qr.image(URL, { type: 'png'});
    qr_png.pipe(fs.createWriteStream('web_qr.png'));

})
  
