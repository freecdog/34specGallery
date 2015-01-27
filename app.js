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

// TODO recent data block
var data = [];

// small
//    data.push({ link: 'https://pp.vk.me/c623629/v623629437/f600/6_Bq2i6ItLo.jpg' });
//    data.push({ link: 'https://pp.vk.me/c622322/v622322993/1ae16/4Sobpjo9Jpc.jpg' });
//    data.push({ link: 'https://pp.vk.me/c620331/v620331717/215a7/d9wOQjqeTI0.jpg' });
//    data.push({ link: 'https://pp.vk.me/c618126/v618126222/b99c/rVdNbVRjQmw.jpg' });
//    data.push({ link: 'https://pp.vk.me/c307104/v307104004/b18b/PYJYMHgrE1c.jpg' });
//    data.push({ link: 'https://pp.vk.me/c306705/v306705270/4fd5/u1oCsjADTzI.jpg' });
//    data.push({ link: 'https://pp.vk.me/c619330/v619330703/17d7c/XRfo_Ed-Szs.jpg' });
//    data.push({ link: 'https://pp.vk.me/c308222/v308222595/bd64/x-tqACEZLgs.jpg' });
//    data.push({ link: 'https://pp.vk.me/c617822/v617822960/202e8/vmqWm4JyxCE.jpg' });
//    data.push({ link: 'https://pp.vk.me/c623221/v623221440/98c7/LbEPw_Au8Ak.jpg' });
//    data.push({ link: 'https://pp.vk.me/c622327/v622327919/64b7/Iy50yLXxSZI.jpg' });
//    data.push({ link: 'https://pp.vk.me/c314228/v314228078/a0d6/fXTv-WI5RO8.jpg' });

// big
//    data.push({ link: 'https://pp.vk.me/c623629/v623629437/f5f5/mCpRYOd4DS0.jpg' });
//    data.push({ link: 'https://pp.vk.me/c622322/v622322993/1ae0e/-P-qvvvILg4.jpg' });
//    data.push({ link: 'https://pp.vk.me/c620331/v620331717/481c/HxI4p_SMMW0.jpg' });
//    data.push({ link: 'https://pp.vk.me/c618126/v618126222/b568/7Tn8D8YQLp0.jpg' });
//    data.push({ link: 'https://pp.vk.me/c307104/v307104614/515e/-j9QEm3pWHM.jpg' });
//    data.push({ link: 'https://pp.vk.me/c306705/v306705270/4fcd/uINcOVVdNr0.jpg' });
//    data.push({ link: 'https://pp.vk.me/c619330/v619330703/17d71/PQ8pBarfOdk.jpg' });
//    data.push({ link: 'https://pp.vk.me/c308222/v308222595/66b1/xu3qEBaB5WU.jpg' });
//    data.push({ link: 'https://pp.vk.me/c617822/v617822960/160bf/7AvW459ORbU.jpg' });
//    data.push({ link: 'https://pp.vk.me/c623221/v623221440/98bf/MZYSuEJz44g.jpg' });
//    data.push({ link: 'https://pp.vk.me/c622327/v622327919/64ae/rmGqC5SDeG4.jpg' });
//    data.push({ link: 'https://pp.vk.me/c314228/v314228078/9716/JAtnPvKw6Ao.jpg' });

data.push({
    userId: '1034437',
    link: 'https://pp.vk.me/c623629/v623629437/f5f5/mCpRYOd4DS0.jpg',
    previewSmall: 'https://pp.vk.me/c623629/v623629437/f600/6_Bq2i6ItLo.jpg',
    previewBig: '',
    groupId: '',
    photoId: '',
    photoId2: ''
});
data.push({
    userId: '81133993',
    link: 'https://pp.vk.me/c622322/v622322993/1ae0e/-P-qvvvILg4.jpg',
    previewSmall: 'https://pp.vk.me/c622322/v622322993/1ae16/4Sobpjo9Jpc.jpg',
    previewBig: '',
    groupId: '',
    photoId: '',
    photoId2: ''
});
data.push({
    userId: '16559717',
    link: 'https://pp.vk.me/c620331/v620331717/481c/HxI4p_SMMW0.jpg',
    previewSmall: 'https://pp.vk.me/c620331/v620331717/215a7/d9wOQjqeTI0.jpg',
    previewBig: '',
    groupId: '',
    photoId: '',
    photoId2: ''
});
data.push({
    userId: '32252222',
    link: 'https://pp.vk.me/c618126/v618126222/b568/7Tn8D8YQLp0.jpg',
    previewSmall: 'https://pp.vk.me/c618126/v618126222/b99c/rVdNbVRjQmw.jpg',
    previewBig: '',
    groupId: '',
    photoId: '',
    photoId2: ''
});
data.push({
    userId: '122556004',
    link: 'https://pp.vk.me/c307104/v307104614/515e/-j9QEm3pWHM.jpg',
    previewSmall: 'https://pp.vk.me/c307104/v307104004/b18b/PYJYMHgrE1c.jpg',
    previewBig: '',
    groupId: '',
    photoId: '',
    photoId2: ''
});
data.push({
    userId: '13439270',
    link: 'https://pp.vk.me/c306705/v306705270/4fcd/uINcOVVdNr0.jpg',
    previewSmall: 'https://pp.vk.me/c306705/v306705270/4fd5/u1oCsjADTzI.jpg',
    previewBig: '',
    groupId: '',
    photoId: '',
    photoId2: ''
});
data.push({
    userId: '92031703',
    link: 'https://pp.vk.me/c619330/v619330703/17d71/PQ8pBarfOdk.jpg',
    previewSmall: 'https://pp.vk.me/c619330/v619330703/17d7c/XRfo_Ed-Szs.jpg',
    previewBig: '',
    groupId: '',
    photoId: '',
    photoId2: ''
});
data.push({
    userId: '12376595',
    link: 'https://pp.vk.me/c308222/v308222595/66b1/xu3qEBaB5WU.jpg',
    previewSmall: 'https://pp.vk.me/c308222/v308222595/bd64/x-tqACEZLgs.jpg',
    previewBig: '',
    groupId: '',
    photoId: '',
    photoId2: ''
});
data.push({
    userId: '5276960',
    link: 'https://pp.vk.me/c617822/v617822960/160bf/7AvW459ORbU.jpg',
    previewSmall: 'https://pp.vk.me/c617822/v617822960/202e8/vmqWm4JyxCE.jpg',
    previewBig: '',
    groupId: '',
    photoId: '',
    photoId2: ''
});
data.push({
    userId: '99668440',
    link: 'https://pp.vk.me/c623221/v623221440/98bf/MZYSuEJz44g.jpg',
    previewSmall: 'https://pp.vk.me/c623221/v623221440/98c7/LbEPw_Au8Ak.jpg',
    previewBig: '',
    groupId: '',
    photoId: '',
    photoId2: ''
});
data.push({
    userId: '59791919',
    link: 'https://pp.vk.me/c622327/v622327919/64ae/rmGqC5SDeG4.jpg',
    previewSmall: 'https://pp.vk.me/c622327/v622327919/64b7/Iy50yLXxSZI.jpg',
    previewBig: '',
    groupId: '',
    photoId: '',
    photoId2: ''
});
data.push({
    userId: '4199078',
    link: 'https://pp.vk.me/c314228/v314228078/9716/JAtnPvKw6Ao.jpg',
    previewSmall: 'https://pp.vk.me/c314228/v314228078/a0d6/fXTv-WI5RO8.jpg',
    previewBig: '',
    groupId: '',
    photoId: '',
    photoId2: ''
});
app.use('/data', function(req, res){
    res.send(data);
});
app.use('/photos/:id', function(req, res){
    var id = req.params.id;
    function isNumber(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }
    if (isNumber(id)){
        id = parseInt(id);

        var ans = [];

        // TODO lol, linear search xD
        for (var i = 0; i < data.length; i++){
            if (id == data[i].userId){
                ans.push(data[i]);
            }
        }
        res.send(ans);
    }

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
