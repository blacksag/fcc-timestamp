// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

//logger
app.use(function middleware(req,res,next) {
  var string = req.method + ' ' + req.path + ' - ' + req.ip;
  console.log(string);
  next();
});

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});


app.get("/api/timestamp/:date_string?", function (req,res) {
  
  //console.log(req.params.date_string);
  var date = null;
  var dateString = req.params.date_string;
  if (dateString !== undefined) {
    //parameter is either a date(ISO-8601) or miliseconds
    if(isNaN(Number(dateString))) {
      //its a date
      date = new Date(dateString);
    } else {
      // its miliseconds
      date = new Date(parseInt(dateString));
    }
  } else {
    //send current date
    date = new Date();
  }
  var response = {unix: date.getTime(),
                  utc: date.toUTCString()}
  res.json(response);
  //res.send(date);
});

//404: Not found error middleware!=
app.use(function(req, res, next){
  res.status(404);
  //res.render('404', { url: req.url });
  res.send({ error: 'Not found' });
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});