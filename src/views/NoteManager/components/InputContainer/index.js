export default function InputContainer() {
  return (
    <div>
        <h2>New Note</h2>
        <label>
            Title
            <input type='text' />
        </label>
        <label>
            Text
            <input type='text' />
        </label>
        <button>Save</button>
    </div>
  );
}