const models = require('../models');

const println = () => {
    console.log("ABCD");
}

const create = () => {
    models.User.create(
    {
        name: "Hi",
        email: "HI@email",
        age: 20
    }).then(result => {
        console.log("데이터 추가 완료", result.email);
    });
}

module.exports = {
    println,
    create
};