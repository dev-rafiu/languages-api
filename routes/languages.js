const express = require("express");
const router = express.Router();

const {
  getAllLanguagesStatic,
  getAllLanguages,
  getLanguage,
  createLanguage,
  deleteLanguage,
  updateLanguage,
} = require("../controllers/languages");

router.route("/static").get(getAllLanguagesStatic);

router.route("/").get(getAllLanguages).post(createLanguage);
router
  .route("/:id")
  .get(getLanguage)
  .delete(deleteLanguage)
  .patch(updateLanguage);

module.exports = router;
