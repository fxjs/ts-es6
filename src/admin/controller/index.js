'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  indexAction(){
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
    let model = this.model("admin");
    let insertId = await model.add({name: "zzz", carrer: "jser"});
    
    console.log(insertId);
    return this.display();
  }
  
}