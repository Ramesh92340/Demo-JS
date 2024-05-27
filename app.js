// var http = require('http');

// var fs = require('fs');

// http.createServer(function (req, res) {

//   fs.readFile('demo.html', function(err, data) {
//     res.write(data);

//     return res.end();

//   });
// }).listen(8080);



// fs.appendFile('mynewfile1.txt', 'Hello Interns!', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });


// fs.open('mynewfile2.txt', 'w', function (err, file) {
//     if (err) throw err;
//     console.log('Saved!');
//   });



// fs.writeFile('mynewfile3.txt', 'Hello Interns!', function (err) {
//     if (err) throw err;
//     console.log('Saved!');
//   });


// fs.writeFile('mynewfile3.txt', 'This is my texwewt', function (err) {
//     if (err) throw err;
//     console.log('Replaced!');
//   });



// fs.unlink('mynewfile1.txt', function (err) {
//     if (err) throw err;
//     console.log('File deleted!');
//   });



// fs.rename('mynewfile3.txt', 'myrenamedfile.txt', function (err) {
//     if (err) throw err;
//     console.log('File Renamed!');
//   });


// var url = require('url');
// var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
// var q = url.parse(adr, true);

// console.log(q.host); //returns 'localhost:8080'
// console.log(q.pathname); //returns '/default.htm'
// console.log(q.search); //returns '?year=2017&month=february'

// var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
// console.log(qdata.month); //returns 'february'
// console.log(qdata.year);


// var http = require('http');
// var url = require('url');
// var fs = require('fs');

// http.createServer(function (req, res) {


//   var q = url.parse(req.url, true);

//   var filename = "." + q.pathname;
//   fs.readFile(filename, function(err, data) {
//     if (err) {
//       res.writeHead(404, {'Content-Type': 'text/html'});
//       return res.end("404 Not Found");
//     } 
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//   });
// }).listen(8080);



// var http = require('http');
// var uc = require('upper-case');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write(uc.upperCase("Hello World!"));
//   res.end();
// }).listen(8080);








// events


// var events= require('events');
// var eventemmiter = new events.EventEmitter();

// var myEventHandler = function () {
//     console.log('i here tne scream');
// }

// eventemmiter.on("start",myEventHandler);
// eventemmiter.emit("start");




// CREATE AN UPLOAD FORM 

// var http = require('http');

// http.createServer(function(req,res){
//     res.write('<form action="fileupload" method="post" enctype = "multipart/form-data" >');
//     res.write('<input type="file" name="filetoupload" ><br>');
//     res.write('<input type="submit">');
//     res.write('</form>');
//     return res.end();
// }).listen(8000);



var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
  res.write('<input type="file" name="filetoupload"><br>');
  res.write('<input type="submit">');
  res.write('</form>');
  return res.end();
}).listen(8080); 