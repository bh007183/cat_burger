const connections = require("../config/connection")
const connection = require("./connection")

function printQuestionMarks(num){
    const arr = [];
    for (let i = 0; i < num; i++){
        arr.push("?")
    }
    return arr.toString()
    
}

function objToSql(ob){
    var arr = []

    for(const key in obj){
        const value = obj[key];
        if(Object.hasOwnProperty.call(obj, key)){
            if (typeof value === "string" && value.indexOf(" ") >= 0){
                value = "'" + value + "'"
            }
            arr.push(key + "=" +value)
        }
    }
    console.log(arr.toString + "orm.js ln 25")
    return arr.toString
}


var orm = {

all: function(tableInput, cb){
    const queryString = "SELECT * FROM " + tableInput + ";"
    connection.query(queryString, function(err, result){
        if(err){
            throw err
        }
        cb(result)
    })
},



create: function (table, col, val, cb){
    const queryString = "INSERT INTO " + table + " (" + col.toString() + ") " + "VALUES" + " (" + printQuestionMarks(val.length) + ") "
    console.log(queryString+ "on line 46, orm.js")
    connection.query(queryString, val, function(err, result){
        if(err){
            throw err
        }
        cb(result)
    })
},



update: function(table, objColVals, condition, cb){
    const queryString = "UPDATE " + table + " SET " + objToSql(objColVals) + " WHERE " + condition
    console.log(queryString + "on line 59, orm.js")
    connection.query(queryString, function(err, result){
        if(err){
            throw err;
        }
        cb(result)
    })
}


}
module.exports = orm




