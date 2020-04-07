const CompanyServices = require('../services/company.services');

class CompanyController{

    async create(req,res){
        try {
            const company = await CompanyServices.create(req.body)
            res.status(201).json({
                message:"company was successfully created.",
                company
            })
        } catch (error) {
            res.json({
                message:"company was not created. Something went wrong.",
                error
            })
        }
    }

    async getAllCompanies(req, res){
         try {
             const companies = await CompanyServices.get()
             res.json({
                 message:"Successfully fetched all companies",
                 companies
             })
         } catch (error) {
             res.json({
                 message:"Failed to fetch all companies.",
                 error
             })
         }
    }

    async getCompany(req, res){
        try {
            const company = await CompanyServices.get(req.params.companyID)
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
            const company = await CompanyServices.update(req.params.companyID, req.body)
            console.log('company :', company);
            res.json({
                message:"Successfully updated company",
                company
            })
        } catch (error) {
            res.json({
                message:"Failed to update  company.",
                error
            })
        }
    }

    async delete(req, res){
        try {
            const company = await CompanyServices.delete(req.params.companyID)
            res.json({
                message:"Successfully deleted company",
                company
            })
        } catch (error) {
            res.json({
                message:"Failed to delete  company.",
                error
            })
        }
    }


}


module.exports = new CompanyController()