'use strict';

const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'bb';
    // git test 12
  }
}

module.exports = HomeController;
