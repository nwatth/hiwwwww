var express  = require('express');
var router   = express.Router();

var CartController = require('../controllers/carts_controller');

router.get('/carts', CartController.index);
router.get('/carts/:id', CartController.show);
router.post('/carts', CartController.create);
router.put('/carts/:id', CartController.update);
router.delete('/carts/:id', CartController.destroy);

module.exports = router;
