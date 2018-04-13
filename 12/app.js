var express = require('express')
var bodyparser = require('body-parser')
var mysql = require('mysql')
var app = express()

app.use(bodyparser.urlencoded({}))
var pool = mysql.createPool({
  host:'localhost',
  user:'root',
  password:'',
  database:'staty',
  port:3306
}) 

//查询
app.use('/sel', function(req, res) {
	res.setHeader('Access-Control-Allow-Origin','*')
	console.log(req.body.id)
  pool.query(`SELECT * FROM class`,function(err,rows){
  	if(err){
  		throw err
  	}else{
  		res.send(rows)
  	}
  	
  })
});

//修改
//app.use('/add',function(req,res,next){
//	res.header('Access-Control-Allow-Origin','*')
//	pool.query(`UPDATE class c1=?,c2=?,c3=?,c4=?,c5=?,c6=?,c7=?,c8=?,c9=? WHERE id=('${req.body.c1}','${req.body.c2}','1')`,function(err,rows){
//		res.send(rows)
//	})
//	
//})

app.listen(8002,function(){
	console.log('ok')
})



