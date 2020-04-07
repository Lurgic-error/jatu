const UserModel = require('../models/user.model')

class UserServices{

    async create(data){
        const users = await UserModel.find({ email: data.email  })
        console.log('users :', users);
        if(users.length >= 1) throw 'User already exists'
        const user = await UserModel.create(data)
        if(!user) throw 'Failed to create a new user.'
        return user
    }

    async get(userID){
        if(userID){
            const user  = await UserModel.findById(userID)
            if(!user) throw 'The user does not exist.'
            return user
        }else{
            const users = await UserModel.find()
            return users
        }
    }

    async update(userID, data){
        const user = await UserModel.findByIdAndUpdate({ _id: userID}, data, { new:true})
        if(!user) throw `The user you are trying to update does not exist.`
        return user
    }

    async delete(userID){
        const user = await UserModel.findByIdAndDelete(userID)
        if(!user) throw `The you are trying to delete does not exist.`
        return user
    }
}


module.exports = new UserServices()