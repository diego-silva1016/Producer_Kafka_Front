import React, { useState } from "react";
import axios from "axios";

import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);

  const createMessage = async () => {
    if(!inputValue)
      return;

    setLoading(true)

      axios.post('https://back-dad.herokuapp.com/mesage', {mesage: inputValue})
      .then(() => setInputValue(''))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
  };

return(
  <div>
    <h1>Producer</h1>
    <form onSubmit={createMessage}>
      <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)}/>
      <input type='submit' hidden/> 
      <button type="submit">{loading ? <div class="loader"></div> : 'Enviar'}</button>
    </form>
  </div>
  );
}

export default App;
