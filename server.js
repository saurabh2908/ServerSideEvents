const express = require("express");
const app = express();
var fs = require('fs');
app.use(express.static("public"));
app.get('/stream',function(req,res){
	console.log("Server Call");
        res.writeHead(200, {
            'content-type' : 'text/event-stream',
            'connection' : 'keep-alive',
            'Access-Control-Allow-Origin' : '*'
        });
        fs.watchFile(__dirname+'/public/score.txt', function(){
            var content = fs.readFileSync(__dirname+'/public/score.txt');
            res.write('event: letdoservertalk\n');
            res.write('data:  Score.txt changed at ' + new Date().toString()+' '+content + '\n\n');
        });

    });

app.listen(1234,()=>{
console.log("Server Start");
});