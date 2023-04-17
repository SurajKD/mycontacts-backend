const express = require("express");
const router = express.Router();
const {
  getContacts,
  getContact,
  createContacts,
  updateContact,
  deleteContact,
} = require("../controllers/contactControllers");

router.route("/").get(getContacts).post(createContacts);
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;
