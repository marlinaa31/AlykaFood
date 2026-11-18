const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menuController');
const upload = require('../middleware/upload');


router.get('/', menuController.getAllMenu);
router.get('/:id', menuController.getMenuById);
router.post(
    '/',
    upload.single('gambar'),
    menuController.createMenu
);
router.put(
    '/:id',
    upload.single('gambar'),
    menuController.updateMenu
);

router.delete('/:id', menuController.deleteMenu);

module.exports = router;