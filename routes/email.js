const express = require("express");

const router = express.Router();

const { createEmail, editEmail , getEmail } = require("../controllers/email");

router.post("/create-email", async (req, res) => {
  await createEmail(req, res);
});

router.put("/edit-email/:companyid", async (req, res) => {
  await editEmail(req, res);
});

router.get("/get-email", async (req, res) => {
  await getEmail(req, res);
});

module.exports = router;
