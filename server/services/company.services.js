const CompanyModel = require('../models/company.model')


class CompanyServices{


    async create(data){
        const company = await CompanyModel.create(data)
        if (!company) throw 'Failed to create a new company.'
        return company
    }

    async get(companyID){
        if(companyID){
            const company  = await CompanyModel.findById(companyID)
            if(!company) throw 'The company does not exist.'
            return company
        }else{
            const companies = await CompanyModel.find()
            return companies
        }
    }

    async update(companyID, data){
        const company = await CompanyModel.findByIdAndUpdate({ _id: companyID}, data, { new:true})
        if(!company) throw `The company you are trying to update does not exist.`
        return company
    }

    async delete(companyID){
        const company = await CompanyModel.findByIdAndDelete(companyID)
        if(!company) throw `The company you are trying to delete does not exist.`
        return company
    }
}

// Export an instance of the service class
module.exports=new CompanyServices()