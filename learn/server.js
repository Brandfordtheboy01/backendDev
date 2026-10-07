const http = require('http');

const server = http.createServer((req, res)=> {

    if(req.url === '/about'){
        res.write("Hello about")
    }else if (req.url === '/contact'){
        res.write("Hello contact")
    }else{
        res.write("Not Found!")
    }
    res.end()
});

server.listen(3000, ()=> {
    console.log('server running on port 3000');
    
})

