'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  indexAction() {
    //auto render template file index_index.html
    return this.display();
  }

  // async testAction() {
  //     let modle = this.model("admin");
  //     let mindex = await modle.getIndexes();
  //     console.log(mindex);
  //     return this.display();
  // }

  async addAction() {
    // this.json({"version":"1.0.2"});
    let model = this.model("admin");
    let insertId = await model.add({ name: this.get("name"), carrer: this.get("carrer") });

    console.log(insertId);
    this.assign("data",insertId);
    // let cookie = this.cookie("thinkjs");
    // if(this.cookie("name"))
    //   this.cookie("name","zhangyanxaing",{timeout: 24 * 3600}); // 失1天后效
    // console.log(cookie);
    
    return this.display();
  }

}