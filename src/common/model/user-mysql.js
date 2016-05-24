'use strict';
/**
 * model
 */
export default class extends think.model.base {
    init(...args) {
        super.init(...args);
        //this.tablePrefix = ""; //将数据表前缀设置为空
        //this.tableName = "user2"; //将对应的数据表名设置为 user2
        this.schema = {
            age: {
                default: 20
            }
        }
    }

    updateViewNums(name) {
        return this.where({ name: name }).increment("age", 1); //将age加 1
    }

    updateViewNums(id) {
        return this.where({ id: id }).decrement("coins", 10); //将金币减 10 
    }

    // 返回最大的
    getMax() {
        return this.where({ name: "aaa" }).max("age");
    }

    // getList() {
    //     //设定缓存 key 和缓存时间
    //     return this.cache("get_list", 3600).where({ id: { ">": 100 } }).select();
    // }

    getList() {
        //只设定缓存时间
        return this.cache(3600).where({ id: { ">": 100 } }).select();
    }

}