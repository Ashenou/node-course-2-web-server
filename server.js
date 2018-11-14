// const express = require(`express`);

// let app = express();

// app.get(`/`,(req,res)=>{
//     res.send(`<h1>Welcome to Express!</h1>`);
// })
// app.listen(3000);

const express = require(`express`);
const hbs = require(`hbs`);

const port = process.env.PORT || 3000;
let app = express();

hbs.registerHelper(`getCurrentYear`,()=>{
    return new Date().getFullYear();
});

hbs.registerPartials(__dirname + `/views/partials`);
app.use(express.static(__dirname+`/public`));
app.set(`view engine`,`hbs`);

hbs.registerHelper(`screamIt`, (text)=>{

    return text;
});

app.get(`/`,(req,res)=>{

   res.render(`home.hbs`,{
       pageTitle:`This is Home`,
       currentYear:new Date().getFullYear(),
       welcomeMessage:`Welcome to Home Page`
   })
});

app.get(`/about`,(req,res)=>{

    //res.send(`<h1>About page</h1>`);
    res.render(`about.hbs`,{
        pageTitle:`About`,
        currentYear: new Date().getFullYear()
    });
})

app.get(`/bad`,(req,res)=>{

    res.send({
        errorMessage:`unable to fulfill this request`
    });
})
app.listen(port,()=>{
    console.log(`Server is currently running port:${port}`);
});