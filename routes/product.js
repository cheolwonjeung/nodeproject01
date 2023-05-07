const express = require('express');
const router = express.Router();

const  product_controller = require('../controllers/product');



router.get('/create', product_controller.getFormProduct);

router.post('/product', product_controller.postAddProduct);

router.get('/product', product_controller.getAddProduct);

// router.put('/:id/update', product_controller.product_update);

// router.delete('/:id/delete', product_controller.product_delete);



module.exports = router;
