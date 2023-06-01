import { useEffect, useState } from "react";
import axios from "axios";
import notesStore from "../stores/notesStore";

function App() {
	const store = notesStore();
	//states
	// const [notes, setNotes] = useState(null);
	// const [createForm, setCreateForm] = useState({
	// 	title: "",
	// 	body: "",
	// });

	const [updateForm, setUpdateForm] = useState({
		_id: null,
		title: "",
		body: "",
	});





	const updateNote = async (e) => {
		e.preventDefault();
		const { title, body } = updateForm;
		//send the update request
		const res = await axios.put(
			`http://localhost:3000/notes/${updateForm._id}`,
			{
				title,
				body,
			}
		);

		fetchNotes();

		setUpdateForm({
			_id: null,
			title: "",
			body: "",
		});
	};
	//useeffect
	useEffect(() => {
		store.fetchNotes();
	}, []);

	return (
		<>
			<div className="App">
				<div>
					<h2>Notes:</h2>
					{store.notes &&
						store.notes.map((note) => {
							return (
								<div key={note._id}>
									<h3>{note.title}</h3>
									<button onClick={() => store.deleteNote(note._id)}>
										Delete Note
									</button>
									<button onClick={() => store.toggleUpdate(note)}>
										Update Note
									</button>
								</div>
							);
						})}
				</div>

				{!store.updateForm._id && (
					<div>
						<h2>Create Note:</h2>
						<form onSubmit={store.createNote}>
							<input
								name="title"
								value={store.createForm.title}
								onChange={store.updateCreateFormField}
							/>
							<textarea
								name="body"
								value={store.createForm.body}
								onChange={store.updateCreateFormField}
							/>
							<button type="submit">Create Note</button>
						</form>
					</div>
				)}

				{store.updateForm._id && (
					<div>
						<h2>Update note</h2>
						<form onSubmit={store.updateNote}>
							<input
								onChange={store.handleUpdateFieldChange}
								name="title"
								value={store.updateForm.title}
							/>
							<textarea
								name="body"
								onChange={store.handleUpdateFieldChange}
								value={store.updateForm.body}
							/>
							<button type="submit">Update Note</button>
						</form>
					</div>
				)}
			</div>
		</>
	);
}

export default App;
