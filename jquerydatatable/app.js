const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");


const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));


const user=[
    {id:1,name:"hasnain",company:"lti"},
    {id:2,name:"darshan",company:"reliance"},
    {id:3,name:"kunal",company:"qunox"},
    {id:4,name:"mrunali",company:"lti"},
    {id:5,name:"apurva",company:"reliance"},
    {id:6,name:"harshal",company:"datamatrix"},
    {id:7,name:"aditi",company:"lti"},
    {id:8,name:"tammny",company:"hotstar"},
    {id:9,name:"rohan",company:"reliance"},
    {id:4,name:"mrunali",company:"lti"},
    {id:5,name:"apurva",company:"reliance"},
    {id:6,name:"harshal",company:"datamatrix"},
    {id:7,name:"aditi",company:"lti"},
    {id:8,name:"tammny",company:"hotstar"},
    {id:9,name:"rohan",company:"reliance"}
]

app.get('/', (req, res) => {
   
    res.render("home.ejs",{user})
})


let port =process.env.PORT;
if(port ==null || port ==""){
  port=3001;
}


app.listen(port, function() {
  console.log("Server has started on port 3000");
});