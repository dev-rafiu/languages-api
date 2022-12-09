const { log } = require("console");
const Language = require("../models/Language");

const getAllLanguagesStatic = async (req, res) => {
  throw new Error("testing errors");
  res.status(200).json({ msg: "testing route" });
};

const getAllLanguages = async (req, res) => {
  const languages = await Language.find({});
  res
    .status(200)
    .json({ sucsess: true, length: languages.length, data: languages });
};

const getLanguage = async (req, res) => {
  const { id } = req.params;
  const language = await Language.findById({ _id: id });
  if (!language) {
    return res.status(404).json({ msg: `No language with id: ${id}` });
  }
  res.status(200).json({ language });
};

const createLanguage = async (req, res) => {
  console.log(req.body);
  const language = await Language.create(req.body);
  res.status(200).json({ language });
};

const deleteLanguage = async (req, res) => {
  const { id } = req.params;
  const language = await Language.findOneAndDelete({ _id: id });
  if (!language) {
    return res.status(404).json({ msg: `No language with id: ${id}` });
  }
  res.status(200).json({ msg: "language deleted successfully" });
};

const updateLanguage = async (req, res) => {
  const { id } = req.params;
  const language = await Language.findOneAndUpdate({ _id: id }, req.body);
  if (!language) {
    return res.status(404).json({ msg: `No language with id: ${id}` });
  }
  res.status(200).json({ language });
};

module.exports = {
  getAllLanguagesStatic,
  getAllLanguages,
  getLanguage,
  createLanguage,
  deleteLanguage,
  updateLanguage,
};
