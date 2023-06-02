import notesStore from "../stores/notesStore";
import Note from "./Note";

function Notes() {
	const store = notesStore();
	return (
		<div>
			<h2>Notes:</h2>
			{store.notes &&
				store.notes.map((note) => {
					return (
					<Note key={note._id} note={note}/>
					);
				})}
		</div>
	);
}
export default Notes;
