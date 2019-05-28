module.exports = function(app) {
  var apis = require("./controllers/roonAPI");

  /**
   * @swagger
   * /roon/getCore:
   *   get:
   *     description: Returns the core information
   *     responses:
   *       '200':
   *         description: OK
   *         content:
   *           application/json:
   */
  app.get("/roon/getCore", apis.getCore);

  /**
   * @swagger
   * /roon/listZones:
   *    get:
   *      description: Returns the zones
   *      responses:
   *        '200':
   *          description: OK
   *          content:
   *            application/json:
   */
  app.get("/roon/listZones", apis.listZones);

  /**
   * @swagger
   * /roon/listOutputs:
   *    get:
   *      description: Returns the core information
   *      responses:
   *        '200':
   *           description: OK
   *           content:
   *             application/json
   */

  app.get("/roon/listOutputs", apis.listOutputs);

  /**
   * @swagger
   * /roon/getZone:
   *    get:
   *      description: Returns the core information
   */
  app.get("/roon/getZone", apis.getZone);

  /**
   * @swagger
   * /roon/play:
   *    get:
   *      description: Play
   */  
  app.get("/roon/play", apis.play);

  /**
   * @swagger
   * /roon/pause:
   *    get:
   *      description: Pause
   */
   app.get("/roon/pause", apis.pause);
  
  /**
   * @swagger
   * /roon/play_pause:
   *    get:
   *      description: Play/Pause
   */
  app.get("/roon/play_pause", apis.play_pause);

  /**
   * @swagger
   * /roon/stop:
   *    get:
   *      description: Stop
   */
  app.get("/roon/stop", apis.stop);

  /**
   * @swagger
   * /roon/previous:
   *    get:
   *      description: Previous
   */
  app.get("/roon/previous", apis.previous);

  /**
   * @swagger
   * /roon/next:
   *    get:
   *      description: Next
   */
  app.get("/roon/next", apis.next);

  /**
   * @swagger
   * /roon/change_volume:
   *    get:
   *      description: Change Volume
   */
  app.get("/roon/change_volume", apis.change_volume);

  app.get("/roon/listByItemKey", apis.listByItemKey);
  app.get("/roon/listSearch", apis.listSearch);
  app.get("/roon/goUp", apis.goUp);
  app.get("/roon/goHome", apis.goHome);
  app.get("/roon/listGoPage", apis.listGoPage);
  app.get("/roon/listRefresh", apis.listRefresh);

  app.get("/roon/getImage", apis.getImage);
  app.get("/roon/getMediumImage", apis.getMediumImage);
  app.get("/roon/getIcon", apis.getIcon);
  app.get("/roon/getOriginalImage", apis.getOriginalImage);
  
  app.get("/roon/getTimers", apis.getTimers);
  app.get("/roon/addTimer", apis.addTimer);
  app.get("/roon/removeTimer", apis.removeTimer);
};
