const BranchServices = require('../services/branch.services')

class BranchController{

    async create(req, res){
        try {
            const branch = await BranchServices.create(req.body)
            res.status(201).json({
                message:"Successfully created new branch.",
                branch
            })
        } catch (error) {
            res.json({
                message:"Failed to create new branch.",
                error
            })
        }
    }

    async getAllBranches(req, res){
        try {
            const branches = await BranchServices.get()
            res.json({
                message:"Successfully fetched all branches",
                branches
            })
        } catch (error) {
            res.json({
                message:"Failed to fetch all branches",
                error
            })
        }
    }

    async getOneBranch(req, res){
        try {
            const branch = await BranchServices.get(req.params.branchID)
            res.json({
                message:"Successfully fetched all branch",
                branch
            })
        } catch (error) {
            res.json({
                message:"Failed to fetch all branch",
                error
            })
        }
    }

    async update(req, res){
        try {
            const branch = await BranchServices.update(req.params.branchID, req.body)
            res.json({
                message:"Successfully updated branch",
                branch
            })
        } catch (error) {
            res.json({
                message:"Failed to update branch",
                error
            })
        }
    }

    async delete(req, res){
        try {
            const branch = await BranchServices.delete(req.params.branchID)
            res.json({
                message:"Successfully deleted branch",
                branch
            })
        } catch (error) {
            res.json({
                message:"Failed to delete branch",
                error
            })
        }
    }

}

module.exports = new BranchController()