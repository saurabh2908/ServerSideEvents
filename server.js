const express = require("express");
const app = express();
var fs = require('fs');
console.log("fs for read file",fs);
app.use(express.static("public"));
cosole.log("serving static file using express.static");
app.get('/stream',function(req,res){
	console.log("Server Call");
        res.writeHead(200, {
            'content-type' : 'text/event-stream',
            'connection' : 'keep-alive',
            'Access-Control-Allow-Origin' : '*'
        });
        fs.watchFile(__dirname+'/public/score.txt', function(){
		console.log("watch change in file every time")
            var content = fs.readFileSync(__dirname+'/public/score.txt');
            res.write('event: letdoservertalk\n');
            res.write('data:  Score.txt changed at ' + new Date().toString()+' '+content + '\n\n');
        });

    });

const listner= 1234; 
console.log("listner",listner);
app.listen(1234,()=>{
console.log("Server Start at",listner);
});
