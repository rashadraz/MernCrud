//load env variable
if (process.env.NODE_ENV != "production") {
	require("dotenv").config();
}

//Import dependencies
const express = require("express");
const connectToDb = require("./config/connectToDb");
const notesController = require("./controllers/notesController");
const cors = require("cors");
//create an express app
const app = express();

//configure express app
app.use(express.json());
app.use(cors());

//connect to database
connectToDb();

//Routing

app.post("/notes", notesController.fetchNotes);
app.get("/notes", notesController.fetchNote);
app.get("/notes/:id", notesController.createNote);
app.put("/notes/:id", notesController.updateNote);
app.delete("/notes/:id", notesController.deleteNote);

//Start our server
app.listen(process.env.PORT);
