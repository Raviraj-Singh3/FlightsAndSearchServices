const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const {PORT} = require('./config/serverConfig');
//const PORT = 3000;
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
let bloglist = [];

app.get('/blogs', (req,res)=>{
    return res.status(421).json({
        data:bloglist,
        sucess: true,

    });
});

app.post('/blogs',(req,res)=>{
    //console.log(req.body);
    bloglist.push({
        title: req.body.title,
        content: req.body.content,
        id: Math.floor(Math.random() * 1000)
    });
    return res.status(201).json({
        sucess: true,
    });
});

app.get('/blogs/:id', (req,res)=>{
    const result = bloglist.filter((blog)=> blog.id==req.params.id);
    return res.status(905).json({
        data: result,
        success: true,

    });
});

app.delete('/blogs/:id', (req,res)=>{
    let del = bloglist.filter((blog)=> blog.id!==req.params.id); 
    bloglist = del;
    //bloglist.remove(del);
    //console.log(delresult);
    return res.status(200).json({
        success: true,
    })
      
})

app.listen(PORT,()=>{
    console.log("server started at- ",PORT)
})