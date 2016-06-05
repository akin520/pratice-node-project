'use strict';

/**
 * pratice Node.js project
 *
 * @author Mingyi Zheng <badb0y520@gmail.com>
 */

import {expect} from 'chai';
import {session} from '../test';

describe('topic', function () {

  // it('list', async function () {
  //
  //   const ret = await request.get('/api/topic/list');
  //   console.log(ret);
  //
  // });

  it('create topic', async function () {

    const request = session();

    {
      const ret = await request.post('/api/login', {
        name: 'test0',
        password: '12345678',
      });
      console.log(ret);
      expect(ret.token).to.be.a('string');
    }
    {
      const ret = await request.post('/api/topic/add', {
        title: '哈哈哈哈',
        content: '瓦赫哈哈哈',
        tags: 'test',
      });
      console.log(ret);
      expect(ret.topic.title).to.equal('哈哈哈哈');
      expect(ret.topic.content).to.equal('瓦赫哈哈哈');
      expect(ret.topic.tags).to.have.members(['test']);
    }

    {
      const ret = await request.post('/api/topic/item/57011b02e98f81ac0edfe585/comment/add', {
        content: '回复测试',
      });
      console.log(ret);
      expect(ret.topic.content).to.equal('回复测试');
    }

    {
      const ret = await request.post('/api/topic/item/57011b02e98f81ac0edfe585/comment/delete', {
        cid: '57011e05e98f81ac0edfe586',
      });
      console.log(ret);
    }


  });

});
