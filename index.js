var express = require('express');

var app = express();
app.get('/', (req, res)=>{
  res.send('Hello world');
});

var server = app.listen(8081,()=>{
	console.log('server is listening at port:', 8081)	
});

