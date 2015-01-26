var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var gallery = require('./routes/gallery');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/gallery', gallery);
app.use('/data', function(req, res){
    var data = [];
    data.push({ link: 'https://pp.vk.me/c623629/v623629437/f600/6_Bq2i6ItLo.jpg' });
    data.push({ link: 'https://pp.vk.me/c622322/v622322993/1ae16/4Sobpjo9Jpc.jpg' });
    data.push({ link: 'https://pp.vk.me/c620331/v620331717/215a7/d9wOQjqeTI0.jpg' });
    data.push({ link: 'https://pp.vk.me/c618126/v618126222/b99c/rVdNbVRjQmw.jpg' });
    data.push({ link: 'https://pp.vk.me/c307104/v307104004/b18b/PYJYMHgrE1c.jpg' });
    data.push({ link: 'https://pp.vk.me/c306705/v306705270/4fd5/u1oCsjADTzI.jpg' });
    data.push({ link: 'https://pp.vk.me/c619330/v619330703/17d7c/XRfo_Ed-Szs.jpg' });
    data.push({ link: 'https://pp.vk.me/c308222/v308222595/bd64/x-tqACEZLgs.jpg' });
    data.push({ link: 'https://pp.vk.me/c617822/v617822960/202e8/vmqWm4JyxCE.jpg' });
    res.send(data);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
