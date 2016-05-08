'use strict';

/**
 * pratice Node.js project
 *
 * @author Mingyi Zheng <badb0y520@gmail.com>
 */

import path from 'path';

module.exports = function (done) {

  $.router.get('*', function (req, res, next) {
    if (req.url.indexOf('/api/') !== 0 && req.url.indexOf('/build/') !== 0) {
      res.sendFile(path.resolve(__dirname, '../../frontend/index.html'));
    } else {
      next();
    }
  });

  done();

};
