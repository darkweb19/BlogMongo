const router = require("express").Router();
const blogController = require("../controller/blog.control");

router.get("/blog", blogController.index);
router.get("/blog/create", blogController.create);
router.post("/blog", blogController.store);
router.get("/blog/delete/:id", blogController.delete);

module.exports = router;
