const express = require('express');
const router = express.Router();

const skillsCtrl = require("../controllers/skills");

/* Get skills listing*/

router.get("/", skillsCtrl.index);
router.get("/new", skillsCtrl.new);
router.get("/:id", skillsCtrl.show)
router.get("/:id/edit", skillsCtrl.edit);
router.post("/", skillsCtrl.create);
router.delete("/:id", skillsCtrl.delete);
router.put("/:id", skillsCtrl.update);


module.exports = router;