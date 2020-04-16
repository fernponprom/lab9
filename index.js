
let express = require('express')
let app = express()
let PORT = 3000

app.get('/',(reg,res)=>{
    console.log('Hello world')
    res.send('Hello world')
})

app.get('/crash',(req,res)=>{
    console.log('Crash!!')
    res.send('Crash')
    process.exit(1)
})

app.listen(PORT ,() => {
    console.log('run on port: ', PORT)
})