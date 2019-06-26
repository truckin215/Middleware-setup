// connecting express to File
const express = require('express');
// quickens express function
const app = express();

// getting and sending content
app.get('/', function(req, res){
    res.send('yoooo')
});

// Setting server port and error notification
app.listen(3000, function(err){
    if (err){
        console.log(err);
    }
        console.log('server is live on port 3000')
});


