const http = require("http")
const server = http.createServer((req,res)=>{
res.write('welcome\n')
res.write('welcome to Ali\n')
res.write('the moon\n')
res.end()
})
server.listen(5000,()=>{console.log('server runnig')})