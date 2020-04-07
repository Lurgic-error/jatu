const LeaveModel = require('../models/leave.model')


class LeaveServices{


    async create(data){
        const leave = await LeaveModel.create(data)
        if (!leave) throw 'Failed to create a new leave.'
        return leave
    }

    async get(leaveID){
        if(leaveID){
            const leave  = await LeaveModel.findById(leaveID)
            if(!leave) throw 'The leave does not exist.'
            return leave
        }else{
            const leaves = await LeaveModel.find()
            return leaves
        }
    }

    async update(leaveID, data){
        const leave = await LeaveModel.findByIdAndUpdate({ _id: leaveID}, data, { new:true})
        if(!leave) throw `The leave you are trying to update does not exist.`
        return leave
    }

    async delete(leaveID){
        const leave = await LeaveModel.findByIdAndDelete(leaveID)
        if(!leave) throw `The leave you are trying to delete does not exist.`
        return leave
    }
}

// Export an instance of the service class
module.exports=new LeaveServices()