import Note from '../models/notes.js';

// Define the NoteController object that will hold all the functions to handle the requests
// The functions will be called from the routes
const NoteController = {
    async getNotes(req, res) {
        try {
            const notes = await Note.findAll();
            res.json(notes);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async getNoteById(req, res) {
        res.send("Hello from getNoteById");
    },

    async createNotes(req, res) {
        res.send("Hello from createNotes");
    },

    async updateNotes(req, res) {
        res.send("Hello from updateNotes");
    },

    async deleteNotes(req, res) {
        res.send("Hello from deleteNotes");
    }
};

export default NoteController;