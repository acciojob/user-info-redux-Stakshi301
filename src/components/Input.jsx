import { useDispatch, useSelector } from 'react-redux';

function Input() {
  const dispatch = useDispatch();
  const input = useSelector((state) => state.input); // Corrected to 'input'

  const handleInputChange = (e) => {
    dispatch({ type: 'UPDATE_INPUT', payload: e.target.value }); // Corrected action type
  };

  return (
    <div>
      <form>
        <input type="text" placeholder="Enter name" onChange={handleInputChange} />
      </form>
      <p>{input}</p> {/* Display the input value */}
    </div>
  );
}

export default Input;
