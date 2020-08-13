const db = require();

module.exports = {
    get,
    getById,
    insert,
    update,
    remove
}

function get(){
    return db("cars")
}

function getById(id){
    return db("cars").where({ id: id })
}

function insert(car) {
    return db("cars")
    .insert(car, "id")
    .then(ids => ({ id: ids[0] }));
}

function update(id, car) {
    return db("cars")
    .where("id", Number(id))
    .update(car);
}

function remove(id) {
    return db("cars")
    .where("id", Number(id))
    .del();
}