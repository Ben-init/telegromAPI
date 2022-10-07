const Model = require('./model');

async function addUser(User) {
    const newUser = new Model(User);
    const myUser = await newUser.save();
    return myUser;
}

 async function getUser(id) {
    const user = await Model.findById(id);
    return user;
}

async function allUser(filter) {
    const users = await Model.find(filter);
    return users;
}

async function updateUser(User) {
    const updatedUser = await User.save();
    return updatedUser;
}

async function deleteUser(id) {
    try {
        await Model.findByIdAndDelete(id);
        return { 
            id: id ,
            message: 'User deleted'
        };
    } catch (error) {
        console.error(error);
    }
}

async function existsUser(id) {
    try {
        const exists = await Model.exists({
            _id: id,
        });
        return exists;
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    add: addUser,
    get: getUser,
    getAll: allUser,
    update: updateUser,
    remove: deleteUser,
    exists: existsUser,
}