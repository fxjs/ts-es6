'use strict';
/**
 * model
 */
export default class extends think.model.mongo {
    
    init(...args) {
        super.init(...args);
        this.indexes = {
            name: 1
        }
    }
    
}