// import express from "express"

// const app = express();

// app.get('/', (req, res) =>{
//     res.send('This is a server');
// })

// app.listen(3000, ()=> {
//     console.log('Server running at port 3000');
    
// })

import express from 'express'

const app = express()

function myServer (req, res){
    res.send('this is my server')
}


app.get('/', myServer)

app.listen(3000, ()=> {
    console.log('server running on port 3000');
    
})