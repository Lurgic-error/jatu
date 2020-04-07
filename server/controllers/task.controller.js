const TaskServices = require('../services/task.services');

class TaskController{

    async create(req,res){
        try {
            console.log('req.file :', req.file);
            const task = await TaskServices.create(req.body)
            res.status(201).json({
                message:"task was successfully created.",
                task
            })
        } catch (error) {
            res.json({
                message:"task was not created. Something went wrong.",
                error
            })
        }
    }

    async getAllTasks(req, res){
         try {
             const task = await TaskServices.get()
             res.json({
                 message:"Successfully fetched all task",
                 task
             })
         } catch (error) {
             res.json({
                 message:"Failed to fetch all task.",
                 error
             })
         }
    }

    async getTask(req, res){
        try {
            const task = await TaskServices.get(req.params.taskID)
            res.json({
                message:"Successfully fetched task",
                task
            })
        } catch (error) {
            res.json({
                message:"Failed to fetch  task.",
                error
            })
        }
    }

    async update(req, res){
        try {
            const task = await TaskServices.update(req.params.taskID, req.body)
            console.log('task :', task);
            res.json({
                message:"Successfully updated task",
                task
            })
        } catch (error) {
            res.json({
                message:"Failed to update  task.",
                error
            })
        }
    }

    async delete(req, res){
        try {
            const task = await TaskServices.delete(req.params.taskID)
            res.json({
                message:"Successfully deleted task",
                task
            })
        } catch (error) {
            res.json({
                message:"Failed to delete  task.",
                error
            })
        }
    }


}


module.exports = new TaskController()