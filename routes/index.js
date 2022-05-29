// Express dependency
const express = require("express");

// Initialize router
const router = express.Router();

// Define root for the index controller
const indexCtrl = require("../controllers/index")

// Establish the path to the index and the execution at that path
router.get("/", indexCtrl.index_get)




module.exports = router;