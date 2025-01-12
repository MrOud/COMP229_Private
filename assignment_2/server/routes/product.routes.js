import express  from "express"
import productCtrl from '../controllers/product.controller.js'

const router = express.Router()

router.route('/api/products')
    .get(productCtrl.list)
    .post(productCtrl.create)
    .delete(productCtrl.removeAll)

router.route('/api/products/:id')
    .get(productCtrl.read)
    .put(productCtrl.update)
    .delete(productCtrl.remove)


router.param('id', productCtrl.productById)

export default router