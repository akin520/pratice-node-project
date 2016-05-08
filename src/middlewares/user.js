'use strict';

/**
 * pratice Node.js project
 *
 * @author Mingyi Zheng <badb0y520@gmail.com>
 */

module.exports = function (done) {


  $.checkLogin = function (req, res, next) {

    if (!(req.session.user && req.session.user._id)) return next(new Error('please login firstly'));

    next();

  };

  $.checkCount = async function (req, res, next) {

    const count = await $.method('topic.count').call({_id: req.params.author._id, createdAt: new Date()});
	if (count >= 2) return next(new Error(`1小时发贴不能超过2个`));

    next();

  };

  $.checkTopicAuthor = async function (req, res, next) {

    const topic = await $.method('topic.get').call({_id: req.params.topic_id});
    if (!topic) return next(new Error(`topic ${req.params.topic_id} does not exists`));

    req.topic = topic;

    if (req.session.user.isAdmin) return next();
    if (topic.author._id.toString() === req.session.user._id.toString()) return next();

    next(new Error('access denied'));

  };


  done();

};
