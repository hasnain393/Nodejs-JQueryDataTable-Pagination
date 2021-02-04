const express = require('express')
const dbcon=require("./db");
const bodyParser = require("body-parser");
const ejs = require("ejs");


const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

const port = 3005


const user=[
    {bookid:1,author:"hasnain",title:"lti"},
    {bookid:2,author:"darshan",title:"reliance"},
    {bookid:3,author:"kunal",title:"qunox"},
    {bookid:4,author:"mrunali",title:"lti"},
    {bookid:5,author:"apurva",title:"reliance"},
    {bookid:6,author:"harshal",title:"datamatrix"},
    {bookid:7,author:"aditi",title:"lti"},
    {bookid:8,author:"tammny",title:"hotstar"},
    {bookid:9,author:"rohan",title:"reliance"},
    {bookid:10,author:"mrunali",title:"lti"},
    {bookid:11,author:"apurva",title:"reliance"},
    {bookid:12,author:"harshal",title:"datamatrix"},
    {bookid:13,author:"aditi",title:"lti"},
    {bookid:14,author:"tammy",title:"hotstar"},
    {bookid:15,author:"rohan",title:"reliance"}
]
app.get("/selecteditems",(req,res)=>{
    console.log("items as per request");

    
    let hasnain={

    }

    const page=parseInt(req.query.page);
    const limit=parseInt(req.query.limit);
    const startIndex=(page-1)*limit;
    const endIndex=page*limit ;
    if(endIndex<user.length){
        hasnain.next={
            page:page+1,
            limit:limit
        }
       
    }
    if(startIndex>0){
       
        hasnain.previous={
            page:page-1,
            limit:limit
        }
    }
    console.log(startIndex);
    console.log(endIndex);

    hasnain.results=user.slice(startIndex,endIndex)
    hasnain.length = user.length;
    res.send(hasnain);

    //or
//     var getall=`SELECT * FROM library.books_data LIMIT ${limit} OFFSET ${startIndex}`

//     let getdbuser
//     dbcon.query(getall, function (err, result) {  
//         if (err) throw err;  
//         console.log(" record fetched");
// console.log(result);
//         hasnain.results=result
//         console.log("printing whole object");
//        console.log(hasnain);
//        res.send(hasnain);  
//         });
        
  
  
  
})
    
    
app.get('/users', (req, res) => {
   
    let hasnain={

    }

    const page=parseInt(req.query.page);
    const limit=parseInt(req.query.limit);
    const startIndex=(page-1)*limit;
    const endIndex=page*limit ;
    if(endIndex<user.length){
        hasnain.next={
            page:page+1,
            limit:limit
        }
       
    }
    if(startIndex>0){
       
        hasnain.previous={
            page:page-1,
            limit:limit
        }
    }
    console.log(startIndex);
    console.log(endIndex);
    const len=user.length;
    console.log(len);

    hasnain.results=user.slice(startIndex,endIndex)
    res.render("home.ejs",{hasnain,len})
    //or
//     var getall=`SELECT * FROM library.books_data LIMIT ${limit} OFFSET ${startIndex}`

//     let getdbuser
//     dbcon.query(getall, function (err, result) {  
//         if (err) throw err;  
//         console.log(" record fetched");
// console.log(result);
//         hasnain.results=result
//         console.log("printing whole object");
//        console.log(hasnain);
//        res.render("home.ejs",{hasnain});  
//         });
        
  
  
  
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})