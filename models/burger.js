const orm = require("../config/orm.js")
const burgers = {
    all: function(cb){
        orm.all("burgers", function(res){
            cb(res)
        })
    },

    create: function(col,val,cb){
        orm.create("burgers", col, val, function(res){
            cb(res)
        })
    },


    update: function(objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function(res) {
          cb(res);
        });
      },

      delete: function(idVal, cb){
          orm.delete(idVal, function(res){
              cb(res)
          })
        
    }



}

module.exports = burgers