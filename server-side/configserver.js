const serverhttp = require('http')
const filefs = require('fs')
const thepath = require('path')


serverhttp.createServer((req, res) =>{

   const thefile = req.url === '/' ? 'PageMain.html' : req.url
   const filePath = thepath.join(__dirname, 'src', thefile)


   filefs.readFile(
       filePath,
       (err, content) =>{res.end(content)}
   )  

}).listen(2698, ()=> console.log('Server is running ')) 