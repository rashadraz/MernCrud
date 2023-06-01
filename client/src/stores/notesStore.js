import axios from "axios";
import { create } from "zustand";

const notesStore = create((set) => ({
	notes: null,
	createForm: {
		title: "",
		body: "",
	},

	updateForm: {
		_id: null,
		title: "",
		body: "",
	},

	fetchNotes: async () => {
		//fetch notes
		const res = await axios.get("http://localhost:3000/notes");
		//set to states
		set({
			notes: res.data.notes,
		});
	},

	updateCreateFormField: (e) => {
		const { name, value } = e.target;

		set((state) => {
			return {
				createForm: {
					...state.createForm,
					[name]: value,
				},
			};
		});
	},

	createNote: async (e) => {
		e.preventDefault();

		const { createForm, notes } = notesStore.getState();

		const res = await axios.post("http://localhost:3000/notes", createForm);

		notesStore.getState().fetchNotes();
		// set({
		// 	notes: [...notes, res.data.note],
		// 	createForm: {
		// 		title: "",
		// 		body: "",
		// 	},
		// });
	},

	deleteNote: async (_id) => {
		//delete note
		const res = await axios.delete(`http://localhost:3000/notes/${_id}`);

		const { notes } = notesStore.getState();

		//update state

		const newNotes = notes.filter((note) => {
			return note._id !== _id;
		});
		set({ notes: newNotes });

		// const { notes } = notesStore.getState();
		// //update State
		// const newNotes = [...notes].filter((note) => {
		// 	return note._id !== _id;
		// });

		// notesStore.getState().fetchNotes();
		// // setNotes(newNotes);
	},

	handleUpdateFieldChange: (e) => {
		const { value, name } = e.target;

		set((state) => {
			return {
				updateForm: {
					...state.updateForm,
					[name]: value,
				},
			};
		});
	},

	toggleUpdate: ({ _id, title, body }) => {
		//set state on update form

		set({
			updateForm: {
				title,
				body,
				_id,
			},
		});
	},

	updateNote: async (e) => {
		e.preventDefault();
		// const { title, body, _id } = notesStore.getState().updateForm;

		const {
			updateForm: { title, body, _id },
			notes,
		} = notesStore.getState();
		//send the update request
		const res = await axios.put(`http://localhost:3000/notes/${_id}`, {
			title,
			body,
		});

		notesStore.getState().fetchNotes();

		set({
			updateForm: {
				_id: null,
				title: "",
				body: "",
			},
		});
	},
}));

export default notesStore;
