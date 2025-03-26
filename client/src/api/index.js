const endpoint = 'https://mswgsfgwleficsndtcdz.supabase.co/rest/v1/notes';
const apikey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1zd2dzZmd3bGVmaWNzbmR0Y2R6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU1ODk1NTAsImV4cCI6MjA1MTE2NTU1MH0.P7jWF0-7Qa2ZcXd4bUvi1M7pOnsbhoZ5O21EoFIXe6Q';

const headers = {
    'Content-Type': 'application/json',
    'apikey': apikey,
}

// Fetch notes from the server
const fetchData = async (setNotes) => {
    try {
        const response = await fetch(endpoint, {
            method: 'GET',
            headers,
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setNotes(data);
        console.log('Notes loaded successfully:', data);
    } catch (error) {
        console.error('Error loading note:', error);
    }
};

// Add a new note
const AddNote = async (note, setNotes) => {
    try {
        const response = await fetch(endpoint, {
            method: 'POST',
            headers,
            body: JSON.stringify(note),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        fetchData(setNotes);
    } catch (error) {
        console.error('Error creating note:', error);
    }
};

// Change the archived status of a note
const ChangeArchiveStatus = async (note, newIsArchivedValue, setFlagArchivedMessage, setShowArchivedMessage, setNotes) => {
    try {
        const updatedNote = {
            id: note.id,
            title: note.title,
            content: note.content,
            isArchived: !newIsArchivedValue,
        };
        const response = await fetch(`${endpoint}?id=eq.${note.id}`, {
            method: 'PUT',
            headers,
            body: JSON.stringify(updatedNote),
        });
        if (!response.ok) {
            throw new Error(`Error al actualizar la nota: ${response.statusText}`);
        }
        setFlagArchivedMessage(newIsArchivedValue);
        setShowArchivedMessage(true);
        fetchData(setNotes);
        setTimeout(() => {
            setShowArchivedMessage(false);
        }, 3000);
    } catch (error) {
        console.error('Error actualizando la nota:', error);
    }
};

// Edit a note
const EditeNote = async (title, text, editingNote, setEditingNote, setNotes) => {
    try {
        const updatedNote = {
            id: editingNote.id,
            title: title,
            content: text
        };
        const response = await fetch(`${endpoint}?id=eq.${editingNote.id}`, {
            method: 'PUT',
            headers,
            body: JSON.stringify(updatedNote)
        });
        if (!response.ok) {
            throw new Error(`Error updating the note: ${response.statusText}`);
        }
        setEditingNote(null);
        fetchData(setNotes);
    } catch (error) {
        console.error('Error updating the note:', error);
    }
};

const SelectNoteToEdit = (note, setEditingNote) => {
    setEditingNote(note);
};

// Remove a note from the box
const RemoveNoteFromBox = async (noteId, setShowDeletedMessage, setNotes) => {
    try {
        const response = await fetch(`${endpoint}?id=eq.${noteId}`, {
            method: 'DELETE',
            headers,
        });
        if (!response.ok) {
            throw new Error(`Error al eliminar la nota: ${response.statusText}`);
        }
        setShowDeletedMessage(true);
        fetchData(setNotes);
        setTimeout(() => {
            setShowDeletedMessage(false);
        }, 3000);
    } catch (error) {
        console.error('Error eliminando la nota:', error);
    }
};

export {
    fetchData,
    AddNote,
    ChangeArchiveStatus,
    EditeNote,
    SelectNoteToEdit,
    RemoveNoteFromBox,
};