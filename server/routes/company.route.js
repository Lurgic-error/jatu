const express = require('express');

const router = express.Router();

const companyController = require('../controllers/company.controller');


router.get('', companyController.getAllCompanies)

router.get('/:companyID', companyController.getCompany)

router.post('/register', companyController.create)

router.put('/update/:companyID', companyController.update)

router.delete('/delete/:companyID', companyController.delete)

module.exports = router