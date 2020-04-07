const LeaveServices = require('../services/leave.services');

class LeaveController{

    async create(req,res){
        try {
            const leave = await LeaveServices.create(req.body)
            res.status(201).json({
                message:"Leave request was successfully created.",
                leave
            })
        } catch (error) {
            res.json({
                message:"Leave request was not created. Something went wrong.",
                error
            })
        }
    }

    async getAllLeaveRequests(req, res){
         try {
             const leaves = await LeaveServices.get()
             res.json({
                 message:"Successfully fetched all leaves",
                 leaves
             })
         } catch (error) {
             res.json({
                 message:"Failed to fetch all leaves.",
                 error
             })
         }
    }

    async getLeaveRequest(req, res){
        try {
            const company = await LeaveServices.get(req.params.companyID)
            res.json({
                message:"Successfully fetched company",
                company
            })
        } catch (error) {
            res.json({
                message:"Failed to fetch  company.",
                error
            })
        }
    }

    async update(req, res){
        try {
            const leave = await LeaveServices.update(req.params.leaveID, req.body)
            console.log('leave :', leave);
            res.json({
                message:"Successfully updated leave",
                leave
            })
        } catch (error) {
            res.json({
                message:"Failed to update  leave.",
                error
            })
        }
    }

    async delete(req, res){
        try {
            const leave = await LeaveServices.delete(req.params.leaveID)
            res.json({
                message:"Successfully deleted leave",
                leave
            })
        } catch (error) {
            res.json({
                message:"Failed to delete  leave.",
                error
            })
        }
    }


}


module.exports = new LeaveController()