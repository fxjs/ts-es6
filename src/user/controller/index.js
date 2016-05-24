'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  // indexAction() {
  //   //auto render template file index_index.html
  //   return this.display();
  // }

  // * addAction() {
  //   let model = this.model("user");
  // let insertId = yield model.add({ name: "zyx"+(+new Date()),age: 28});
  // let insertId = yield model.addMany([
  //     { name: "zyx",age: 28},
  //     { name: 'fx', age: 29 }
  //   ]);
  // console.log(model.schema);
  // let [name, age] = [this.get("name"), this.get("age")];
  // let res = yield model.thenAdd({"name": name,age: age},{name: name, age: age});
  // let res  = yield model.where({name: name}).update({age: age});
  // model.updateViewNums(name) // add age

  // let res = yield model.where({name: name}).find();
  // let res = yield model.where({name: name}).limit(2).select();

  // if(think.isEmpty(res)) {
  //   console.log("空");
  // } else {
  //   console.log(res);
  // }

  // let resMaxAge = yield model.getMax();
  // console.log(resMaxAge);

  //   let res = yield model.where({age:[">=",20]}).delete();
  //   console.log(res);

  //   this.assign("res", res);
  //   this.display();
  // }

  async addAction() {
    let model = this.model("user");
    let indexes = await model.getIndexes();
    console.log(indexes);
  }

  __after() {
    this.assign("msg", "add succ")
    return this.display();
  }


}