'use strict';

/**
 * pratice Node.js project
 *
 * @author Mingyi Zheng <badb0y520@gmail.com>
 */

module.exports = function (done) {

  $.router.get('/', function (req, res, next) {
    res.end(`hello world!!!`);
  });

  done();

};
