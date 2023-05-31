const Note = require("../models/note");

const fetchNotes = async (req, res) => {
	//Get the sent in data off request boy
	const { title, body } = req.body;

	//create a note with it
	const note = await Note.create({
		title,
		body,
	});
	//respond with the new note
	res.json({ note });
};

const fetchNote = async (req, res) => {
	//find the notes
	const notes = await Note.find();
	res.json({ notes });

	//respond with them
};

const createNote = async (req, res) => {
	//get id of the url
	const noteId = req.params.id;
	//find the note using the id
	const note = await Note.findById(noteId);

	//respond with the note
	res.json({ note });
};

const updateNote = async (req, res) => {
	//get the id of the url
	const noteId = req.params.id;

	//get the data off the req body
	const { title, body } = req.body;

	//find and update the record
	await Note.findByIdAndUpdate(noteId, {
		title,
		body,
	});

	//find updated note
	const note = await Note.findById(noteId);
	//respond with it
	res.json({ note });
};

// const deleteNote = async (req, res) => {
// 	//get id of the url
// 	const noteId = req.params.id;

// 	//Delete the record
// 	await Note.deleteOne({ id: noteId });

// 	//Respond
// 	res.json({ success: "Record deleted successfully" });
// };

const deleteNote = async (req, res) => {
	//get id of the url
	const noteId = req.params.id;

	//delete the note
	await Note.findByIdAndDelete(noteId);

	//respond with it
	res.json({ success: "Record deleted successfully" });
};

module.exports = {
	fetchNotes,
	fetchNote,
	createNote,
	updateNote,
	deleteNote,
};
