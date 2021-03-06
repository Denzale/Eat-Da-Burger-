const orm = require("../config/orm.js");

const burger = {
    all: function (cb) {
        orm.all("burgers", function (res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    create: function (cols, vals, cb) {
        orm.create("burgers", cols, vals, function (res) {
            cb(res);
        });
    },
    update: function (cols, vals, id, cb) {
        console.log(cols)
        orm.update("burgers",  cols, vals, id, function (res) {
            cb(res);
        });
    },

}

module.exports = burger;