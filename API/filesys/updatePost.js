const fs= require('fs');
const path =require('path');

fs.appendFile(
    path.join(__dirname,'posts','blogPost.txt'),
    '\n More Data',
    (err)=>{
    {
        console.log('Error in data addition');
        return;
    
    }
    console.log('File contents updated')
}
);