const store = require('./store');

async function addUser(data) {

    if (!data) {
        throw new Error('[Controller] no user or password');
    }
    const fullUser = {
        ...data,
        created: new Date(),
    }
    const res = await store.add(fullUser);

    return res;
}

async function getUser(id) {
    const user = await store.get(id);
    return user;
}

async function getAllUser(filterUser) {
    const filter = {};
    if (filterUser) {
        filter.user = filterUser;
    }
    const user = await store.getAll(filter);
    return user;
}

// 
async function updateUser(id, description) {
    try {

        if (!description || !id) {
            throw new Error('[Controller] invalid data')
        }
        
        const user = await store.get(id);
        user.description = description;
        user.modified = new Date();
        const updatedUser = await store.update(user);
        return updatedUser;
    } catch (error) {
        console.error(error);
    }
}

async function deleteUser(id) {
    try {
        const user = await store.exists(id);
        if (!id || !user) {
            throw new Error('[Controller] invalid or missing params')
        }
        const deletedUser = await store.remove(id);
        return deletedUser;
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    addUser,
    getUser,
    getAllUser,
    updateUser,
    deleteUser
}