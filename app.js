const express = require("express");
const ejs = require("ejs");

const app = express();

app.use(express.static("public"));
app.set("view engine","ejs");

app.get('/',function(req,res){
	res.render('rgb');
})


app.listen(4000,function(req,res){
	console.log("Listening to port 4000");
});