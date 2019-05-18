module.exports = function(app) {
    var apis = require('./controllers/roonAPI');

    app.get('/roon/getCore', apis.getCore);
    app.get('/roon/listZones', apis.listZones);
    app.get('/roon/listOutputs', apis.listOutputs);
    app.get('/roon/getZone', apis.getZone);
    app.get('/roon/play_pause', apis.play_pause);
    app.get('/roon/stop', apis.stop);
    app.get('/roon/previous', apis.previous);
    app.get('/roon/next', apis.next);
    app.get('/roon/change_volume', apis.change_volume);
    app.get('/roon/getImage', apis.getImage);
    app.get('/roon/play', apis.play);
    app.get('/roon/pause', apis.pause);
    app.get('/roon/listByItemKey', apis.listByItemKey);
    app.get('/roon/listSearch', apis.listSearch);
    app.get('/roon/goUp', apis.goUp);
    app.get('/roon/goHome', apis.goHome);
    app.get('/roon/listGoPage', apis.listGoPage);
    app.get('/roon/listRefresh', apis.listRefresh);
    app.get('/roon/getMediumImage', apis.getMediumImage);
    app.get('/roon/getIcon', apis.getIcon);
    app.get('/roon/getOriginalImage', apis.getOriginalImage);
    app.get('/roon/getTimers', apis.getTimers);
    app.get('/roon/addTimer', apis.addTimer);
    app.get('/roon/removeTimer', apis.removeTimer);
};
