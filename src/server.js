'use strict';

/**
 * pratice Node.js project
 *
 * @author Mingyi Zheng <badb0y520@gmail.com>
 */

import path from 'path';
import ProjectCore from 'project-core';
import createDebug from 'debug';

const $ = global.$ = new ProjectCore();


// 创建Debug函数
$.createDebug = function (name) {
  return createDebug('my:' + name);
};
const debug = $.createDebug('server');


// 加载配置文件
$.init.add((done) => {
  $.config.load(path.resolve(__dirname, 'config.js'));
  const env = process.env.NODE_ENV || null;
  if (env) {
    debug('load env: %s', env);
    try{
		$.config.load(path.resolve(__dirname, '../config', env + '.js'));
	}catch(err){
		debug('load %s.js is not function',env);
		process.exit();
	}	
  }
  $.env = env;
  done();
});


// 初始化MongoDB
$.init.load(path.resolve(__dirname, 'init', 'mongodb.js'));
// 加载Models
$.init.load(path.resolve(__dirname, 'models'));


// 初始化Express
$.init.load(path.resolve(__dirname, 'init', 'express.js'));
// 加载路由
$.init.load(path.resolve(__dirname, 'routes'));


// 初始化
$.init((err) => {
  if (err) {
    console.error(err);
    process.exit(-1);
  } else {
    console.log('inited [env=%s]', $.env);
  }

//添加测试用户
  const item = new $.model.User({
    name: "akin"+Math.ceil(Math.random()*1000),
	password: '123456',
	nickname: 'test'+Math.ceil(Math.random()*1000),
  });
  item.save(console.log);

});
