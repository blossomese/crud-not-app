const { note } = require("../models");
const db = require("../models");

const Note = db.note;

// 1. Create note

const addNote = async (req, res) => {
  let info = {
    title: req.body.title,
    content: req.body.content,
  };
  const notes = await Note.create(info);
  res.status(200).send(notes);
  console.log(notes);
};

// 2. Get notes

const getNote = async (req, res) => {
  let notes = await Note.findAll({});
  res.status(200).send(notes);
};

// 3. Update note
const updateNote = async (req, res) => {
  let id = req.params.id;
  let notes = await Note.update(req.body, { where: { id: id } });
  res.status(200).send(notes);
};

// 4. Delete note
const deleteNote = async (req, res) => {
  await Note.destroy({ where: { id: id } });
  res.status(200).send(`Note is deleted!`);
};

module.exports = {
  addNote,
  getNote,
  updateNote,
  deleteNote,
};
