import React, { useEffect } from "react";
import Notes from "../components/Notes";
import UpdateForm from "../components/UpdateForm";
import CreateForm from "../components/CreateForm";
import notesStore from "../stores/notesStore";

function NotesPage() {
	const store = notesStore();

	//useeffect
	useEffect(() => {
		store.fetchNotes();
	}, []);
	return (
		<>
			<Notes />
			<UpdateForm />
			<CreateForm />
		</>
	);
}

export default NotesPage;
