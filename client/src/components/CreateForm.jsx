import notesStore from "../stores/notesStore";

function CreateForm() {
    const store = notesStore();
    if(store.updateForm._id) return <></>
  return (
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
  )
}
export default CreateForm;
