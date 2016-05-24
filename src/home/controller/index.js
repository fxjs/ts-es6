'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  indexAction(){
    //auto render template file index_index.html
    
    // 让Action只在命令行调用
    // if(!this.isCli()) {
    //   this.fail("only allow invoked in cli mode!");
    // }
    this.navType = "home";
    return this.display();
  }
  
  // async indexAction() {
  //   console.log(1);
  //   let content = await this.fetch();
  //   console.log(2);
  //   return this.display();
  // }
  
  // imageAction(){
  //   let imageBuffer = new Buffer();
  //   this.type("image/png");
  //   this.end(imageBuffer);
  // }
  
  // 错误或者无权限时候执行
  __call() {
    console.log("url error!");
    return think.statusAction(404,this.http);
    
  }
  
  __before() {
    // console.log("before",this.http.req.url);
    // this._url = this.http.req.url;
    //return this.display();
  }
  
  detailAction(){
    // if(this.isGet()) {
    //   this.fail(this.ip() + " 无权限");
    // }
    console.log("here");
        
    let id = this.get("id"),
        type = this.get("type")
    console.log(id,type);
    return this.display();
  }
  
  // __after() {
  //   console.log("after");
  // }
    
}