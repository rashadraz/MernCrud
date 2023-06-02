//load env variable
if (process.env.NODE_ENV != "production") {
	require("dotenv").config();
}

//Import dependencies
const express = require("express");
const connectToDb = require("./config/connectToDb");
const notesController = require("./controllers/notesController");
const usersController = require("./controllers/usersController");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const requireAuth = require("./middleware/requireAuth");
//create an express app
const app = express();

//configure express app
app.use(express.json());
app.use(
	cors({
		origin: true,
		credentials: true,
	})
);
app.use(cookieParser());

//connect to database
connectToDb();

//Routing
app.post("/signup", usersController.signup);
app.post("/login", usersController.login);
app.get("/logout", usersController.logout);
app.get("/check-auth", requireAuth, usersController.checkAuth);

app.post("/notes", requireAuth, notesController.fetchNotes);
app.get("/notes", requireAuth, notesController.fetchNote);
app.get("/notes/:id", requireAuth, notesController.createNote);
app.put("/notes/:id", requireAuth, notesController.updateNote);
app.delete("/notes/:id", requireAuth, notesController.deleteNote);

//Start our server
app.listen(process.env.PORT);
