const fs= require('fs');
const path = require('path');

fs.writeFile(path.join(__dirname,'posts','blogPost.txt'),'Halo',(err) => {
    if (err){
        throw err;
    }
    console.log ('Data written to file');
})