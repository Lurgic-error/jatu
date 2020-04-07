const User = require('../models/user.model')

class UserServices{

    async create(data){
        let users = await User.find({ email: data.email  })
        console.log('users :', users);
        if(users.length >= 1) throw 'User already exists'
        const user = await User.create(data)
        if(!user) throw 'Failed to create a new user.'
        return user
    }

    async get(userID){
        if(userID){
            const user  = await User.findById(userID)
            if(!user) throw 'The user does not exist.'
            return user
        }else{
            const users = await User.find()
            return users
        }
    }

    async update(userID, data){
        const user = await User.findByIdAndUpdate({ _id: userID}, data, { new:true})
        if(!user) throw `The user you are trying to update does not exist.`
        return user
    }

    async delete(userID){
        const user = await User.findByIdAndDelete(userID)
        if(!user) throw `The you are trying to delete does not exist.`
        return user
    }
}


module.exports = new UserServices()