const BranchModel =  require('../models/branch.model')

class BranchServices{

    async create(data){
        const  branch = await BranchModel.create(data)
        if(!branch) throw `Sorry, branch not created.`
        return branch
    }

    async get(branchID){
        if(branchID){
            const branch = await BranchModel.findById(branchID)
            if(!branch) throw `Sorry, branch not found.`
            return branch
        }else{
            const branches = await BranchModel.find()
            return branches
        }
    }

    async update(branchID, data){
        const branch = BranchModel.findByIdAndUpdate({ _id: branchID }, data, { new: true })
        if(!branch) throw 'Sorry, branch not found.'
        return branch
    }

    async delete(branchID){
        const branch = BranchModel.findByIdAndDelete(branchID)
        if(!branch) throw 'Sorry, branch not found.'
        return branch
    }

}

module.exports = new BranchServices()