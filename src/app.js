const express = require("express");
const path = require("path");
const hbs = require('hbs');
const app = express();
const port = 8000;

// public ststic path

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.set('view engine','hbs');
app.set('views', template_path)
hbs.registerPartials(partials_path);

app.use(express.static(static_path));



//       routine
app.get("", (req,res)=>{
   res.render('index');
})
app.get("/wordcount", (req,res)=>{
   res.render('wordcount');
})
app.get("/stopwatch", (req,res)=>{
   res.render('stopwatch');
})
app.get("/login", (req,res)=>{
   res.render('login');
})
app.get("/temp_convert", (req,res)=>{
   res.render('temp_convert');
})
app.get("/*", (req,res)=>{
   res.render("404error", {
      errormsg: "oops! errorpage ot found"
   });

})

app.listen(port , () => {
    console.log(`listining my server ${port}`);
});