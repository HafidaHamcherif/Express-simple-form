const express = require('express');
const exphbs = require ('express-handlebars');
const app = express();

const port = 3000;

app.engine('handlebars', exphbs());
app.set('view engine','handlebars');

app.get('/',(req, res)=>{
    res.render('home',{
       students :['Jean', 'Binta', 'Agathe', 'Adil'] 
    });
});

app.get('/student/add',()=>{
    res.send('This route is diffferent than app.post("/student/add');
});

app.post('/student/add',(req,res)=>{
    console.log('post')
    res.render('confirm')
})
app.listen(port,()=>{
    console.log(`server started on: ${port}`);
})