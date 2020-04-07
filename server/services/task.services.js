const TaskModel = require('../models/task.model')


class TaskServices{

    async create(data){
        const task = await TaskModel.create(data)
        if (!task) throw 'Failed to create a new task.'
        return task
    }

    async get(taskID){
        if(taskID){
            const task  = await TaskModel.findById(taskID)
            if(!task) throw 'The task does not exist.'
            return task
        }else{
            const tasks = await TaskModel.find()
            return tasks
        }
    }

    async update(taskID, data){
        const task = await TaskModel.findByIdAndUpdate({ _id: taskID}, data, { new:true})
        if(!task) throw `The task you are trying to update does not exist.`
        return task
    }

    async delete(taskID){
        const task = await TaskModel.findByIdAndDelete(taskID)
        if(!task) throw `The task you are trying to delete does not exist.`
        return task
    }
}

// Export an instance of the service class
module.exports=new TaskServices()