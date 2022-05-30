const express = require("express");


var methodOverride = require("method-override")
const router = express.Router();

router.use(methodOverride("_method"))

router.use(express.urlencoded({extended: true}))

const authorCtrl = require("../controllers/author");

router.get("/author/add", authorCtrl.author_create_get);
router.post("/author/add", authorCtrl.author_create_post);
router.get("/author/index", authorCtrl.author_index_get);
router.get("/author/detail", authorCtrl.author_show_get);
router.get("/author/delete", authorCtrl.author_delete_get);
router.get("/author/edit", authorCtrl.author_edit_get);
router.put("/author/update", authorCtrl.author_update_put);




module.exports = router;