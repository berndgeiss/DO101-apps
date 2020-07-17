const express = require('express');
app = express();

var response;

app.get('/', function (req, res) {

    response = 'This is version 4 of the app.' + '\n';

    //send the response to the client
    res.send(response);

});

app.get('/version4', function (req, res) {

  response = 'This is the version 4 feature of the app.' + '\n';

  //send the response to the client
  res.send(response);

});

app.listen(8080, function () {
  console.log('Server listening on port 8080...');
});
