import notesStore from "../stores/notesStore";

function UpdateForm() {
    const store = notesStore();

	if (!store.updateForm._id) return <></>;
	return (
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
	);
}
export default UpdateForm;
