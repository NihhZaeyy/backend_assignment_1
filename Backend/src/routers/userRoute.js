const express = require("express");
const {
  CreateUser,
  GetUsers,
  UpdateUsers,
  DeleteAccount,
} = require("../controllers/userController");

const router = express.Router();

router.post("/create", CreateUser);
router.get("/getuser", GetUsers);
router.put("/update", UpdateUsers);
router.delete("/deleteAccount", DeleteAccount);

module.exports = router;
