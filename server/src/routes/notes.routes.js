import { Router } from "express";

import NoteController from "../controllers/notes.controllers.js";

// Create a new router instance
// This router will handle all the routes for the notes
const router = Router();

// Define the routes to handle different requests
// The routes will be handled by the functions in the NoteController
router.get("/", NoteController.getNotes);
router.get("/:id", NoteController.getNoteById);
router.post("/", NoteController.createNotes);
router.put("/", NoteController.updateNotes);
router.delete("/", NoteController.deleteNotes);

export default router;