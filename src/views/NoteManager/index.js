import Header from './components/Header';
import InputContainer from './components/InputContainer';
import NotesContainer from './components/NotesContainer';
import './styles.css';

export default function NoteManager() {
    return (
        <div className='note-manager'>
            <Header />
            <div className='content'>
                <InputContainer />
                <NotesContainer />
            </div>
        </div>
    );
}