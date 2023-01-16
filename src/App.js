import React, { useState } from 'react';
import data from './data';

function App() {
  const [showParagraphs, setShowParagraph] = useState([]);
  const [count, setCount] = useState(0)

  const submitHandler = (e) => {
    e.preventDefault();
    let num = parseInt(count);
    if (count > 8) {
      num = 8
    }
    if (count <= 0) {
      num = 1
    }
    setShowParagraph(data.slice(0, num))

  }

  return (
    <section className='section-center'>
      <h3>get ride of lorem ipsum ?!</h3>

      <form onSubmit={submitHandler} className='lorem-form'>
        <label htmlFor="amount">Paragraphs</label>
        <input type="number" vlaue={count} id="amount" onChange={(event) => { setCount(event.target.value) }} />
        <button type="submit" className="btn">generate</button>
      </form>
      <article className='lorem-text'>
        {showParagraphs.map((show, index) => {
          return <p key={index}>{show}</p>
        })}
      </article>
    </section>
  )
}

export default App;
