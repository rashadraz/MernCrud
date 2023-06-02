import { useEffect, useState } from "react";
import axios from "axios";
import notesStore from "../stores/notesStore";
import Notes from "./Notes";
import UpdateForm from "./UpdateForm";
import CreateForm from "./CreateForm";

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
				<Notes />
				<UpdateForm />
				<CreateForm />
			</div>
		</>
	);
}

export default App;
