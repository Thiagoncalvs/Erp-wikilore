const serverhttp = require('http')
const filefs = require('fs')
const thepath = require('path')


serverhttp.createServer((req, res) =>{
    
   const thefile = req.url === '/' ? 'index.html' : req.url
   const twofile = req.url === '/home' ? 'PageMain.html' : req.url

   if (req.url === '/') {
    const filePath = thepath.join(__dirname, 'src', thefile)  
    // 
    filefs.readFile(
        filePath,
        (err, content) =>{res.end(content)}
    )
   } else{
    const filePath = thepath.join(__dirname, 'src', twofile)

    filefs.readFile(
        filePath,
        (err, content) =>{res.end(content)}
    )  
   }



}).listen(2698, ()=> console.log('Server is running ')) 