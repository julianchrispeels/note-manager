import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faBoxArchive, faBoxesPacking } from "@fortawesome/free-solid-svg-icons";

import './styles.css';

export default function NotesContainer({ RemoveNoteFromBox, onEdit, onArchive, notesArray }) {

	const [optionSelected, setOptionSelected] = useState(false);

	notesArray = [
		{
			id: 1,
			title: 'Note 1',
			content: 'This is the content of note 1. This is the content of note 1. This is the content of note 1. This is the content of note 1',
			isArchived: false,
		},
		{
			id: 3,
			title: 'Note 3',
			content: 'This is the content of note 3',
			isArchived: false,
		},
		{
			id: 4,
			title: 'Note 4',
			content: 'This is the content of note 4',
			isArchived: false,
		},
		{
			id: 5,
			title: 'Note 5',
			content: 'This is the content of note 5',
			isArchived: false,
		},
		{
			id: 6,
			title: 'Note 6',
			content: 'This is the content of note 6',
			isArchived: false,
		},
		{
			id: 2,
			title: 'Note 2',
			content: 'This is the content of note 2',
			isArchived: true,
		}]

	// Handle the selection change between active and archived notes
	const handleSelectionChange = (event) => {
		setOptionSelected(!optionSelected);
	}

	// Handle the delete note button
	const handleDeleteNote = (event) => {
		const noteId = parseInt(event.target.parentElement.parentElement.id);
		RemoveNoteFromBox(noteId);

	}

	return (
		<div className='notes-container'>
			<div className='notes-head'>
				<h2 className='notes-head-title'>My Notes</h2>
				<select value={optionSelected} onChange={handleSelectionChange} className='notes-selection'>
					<option value={false}>Active Notes</option>
					<option value={true}>Archived Notes</option>
				</select>
			</div>
			<div className='notes-grid-container'>
				{notesArray.filter(note => JSON.parse(note.isArchived) === JSON.parse(optionSelected)).map((note) => (
					<div className="note-item" key={note.id} id={note.id}>
						<div className="notes-header">
							<button title={JSON.parse(optionSelected) ? 'Unarchive' : 'Archive'} className='notes-archive-button' onClick={() => onArchive(note, optionSelected)}>
								{JSON.parse(optionSelected) ? <FontAwesomeIcon icon={faBoxesPacking} /> : <FontAwesomeIcon icon={faBoxArchive} />}
							</button>
							<button title='Edit' className='notes-edit-button' onClick={() => onEdit(note)}>
								<FontAwesomeIcon icon={faPenToSquare} />
							</button>
							<button id={note.id} title='Delete' className='notes-delete-button' onClick={handleDeleteNote}>
								<FontAwesomeIcon icon={faTrash} />
							</button>
						</div>
						<div className='note-item-content'>
							<h2 className='note-item-title'>{note.title}</h2>
							<p className='note-item-text' >{note.content}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}