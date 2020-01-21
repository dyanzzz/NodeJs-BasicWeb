var express = require('express')

var app = express()

app.get('/', function(req, res, next){
    console.log('Home Page')
    res.json('Halaman Beranda')
})

app.get('/products', function(req, res, next){
    console.log('anda berada di halaman product')
    res.json('anda berada di halaman product')
})

app.get('/:name', function(req, res, next){
    console.log(req.params.name)
    res.json(req.params.name)
})

//penggunaan midleware
app.use(function(req, res, next){
    if(0 < 50){
        next()
    }else{
        res.json('maaf anda tidak dapat lanjut lewat tol')
    }
})

function traveling(req, res, next){
    if(req.params.uang === "oke"){
        next()
    }else{
        res.json('anda tidak memiliki uang untuk traveling')
    }
}

app.get('/bandung/:uang', traveling, function(req, res, next){
    res.json("Silahkan anda traveling lewat tol")
})


app.listen(3000, function(err){
    if(err){
        console.log(err)
    }else{
        console.log("Server use port 3000")
    }
})