const express = require('express');

const router = express.Router();

const branchController = require('../controllers/branch.controller');


router.get('', branchController.getAllBranches)

router.get('/:branchID', branchController.getOneBranch)

router.post('/register', branchController.create)

router.put('/update/:branchID', branchController.update)

router.delete('/delete/:branchID', branchController.delete)

module.exports = router