const express =require ('express')
const { addTransaction, getAllTransaction ,editTransaction,deleteTransaction} = require('../controllers/transactionController')


//router object
const router=express.Router()

//routers
//add transaction POST method
router.post('/add-transaction',addTransaction)
//Edit transaction POST method
router.post('/edit-transaction',editTransaction)
//Delete transaction POST method
router.post('/delete-transaction',deleteTransaction)


//get transactions
router.post('/get-transaction',getAllTransaction)
module.exports=router