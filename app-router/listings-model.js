const db = require('../data/dbConfig.js');

function findBy(where){
    return db('listings')
    .where(where)
}

const add = listing =>{
    
    return db('listings')
    .insert(listing)
};


function findByUserId(user_id){
    return findBy({ user_id })   

};

function find(){
    return db('listings');
}

const remove = id =>{

    return db('listings')
    .where({id})

    .delete();

};const update = (changes, id) =>{

    return db('listings')
    .where('id', id)
    .update(changes, '*')
    .then(count => findById(id));

};

const findById = id =>{
    return db('listings')
    .select('*')
    .where({id})
    .first();
};

module.exports= {
    add, 
    remove,
    update,
    findBy,
    findById, 
    findByUserId,
    find
}