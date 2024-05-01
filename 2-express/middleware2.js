const express = require('express');
const app = express();
const logger = require('./logger');
const authorize = require('./authorize');
// req => middleware => res

// 1. use vs route
//2. options - own, express and third party

// // we are not required to pass the parameter in the logger, express does it for us
// // when we work with mioddleware we must pass it to the next middleware unless we terminate the cycle by sending back a response
// // middleware function
// const logger = (req, res, next)=>{
//     const method = req.method;
//     const url = req.url;
//     const time = new Date().getFullYear();
//     console.log(method, url, time);
//     // res.send('Testing'); // terminating
//     next(); // passing to the next middleware
// }

// app.get('/', logger, (req, res)=>{
//     // const method = req.method;
//     // const url = req.url;
//     // const time = new Date().getFullYear();
//     // console.log(method, url, time);
//     res.send('Home Page');
// })

// app.get('/about',logger, (req, res)=>{
//     res.send('About Page');
// })

// app.use('/api', logger); // order matters
// app.use(logger); // order matters
// app.use([logger, authorize]);
// app.use([authorize, logger]);
// app.use(express.static('./public'));  // serving static files from public folder - middleware function 

app.get('/', (req, res)=>{
    res.send('Home Page');
})

app.get('/about', (req, res)=>{
    res.send('About Page');
})

app.get('/api/products', (req, res)=>{
    res.send('Product Page');
})

app.get('/api/items', (req, res)=>{
    console.log(req.user);
    res.send('Item Page');
})

app.listen(5000, ()=>{
    console.log('Server is running at port 5000');
})