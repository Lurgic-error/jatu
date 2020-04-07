const UserServices = require('../services/user.services');

class UserController{

    async create(req,res){
        try {
            const user = await UserServices.create(req.body)
            res.status(201).json({
                message:"User was successfully created.",
                user
            })
        } catch (error) {
            res.json({
                message:"User was not created. Something went wrong.",
                error
            })
        }
    }

    async getAllUsers(req, res){
         try {
             const users = await UserServices.get()
             res.json({
                 message:"Successfully fetched all users",
                 users
             })
         } catch (error) {
             res.json({
                 message:"Failed to fetch all users.",
                 error
             })
         }
    }

    async getUser(req, res){
        try {
            const user = await UserServices.get(req.params.userID)
            res.json({
                message:"Successfully fetched user",
                user
            })
        } catch (error) {
            res.json({
                message:"Failed to fetch  user.",
                error
            })
        }
    }

    async update(req, res){
        try {
            const user = await UserServices.update(req.params.userID, req.body)
            console.log('user :', user);
            res.json({
                message:"Successfully updated user",
                user
            })
        } catch (error) {
            res.json({
                message:"Failed to update  user.",
                error
            })
        }
    }

    async delete(req, res){
        try {
            const user = await UserServices.delete(req.params.userID)
            res.json({
                message:"Successfully deleted user",
                user
            })
        } catch (error) {
            res.json({
                message:"Failed to delete  user.",
                error
            })
        }
    }


}


module.exports = new UserController()