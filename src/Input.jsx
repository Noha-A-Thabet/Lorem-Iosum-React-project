const Input = () => {
  const submitHandler = (event) => {
    event.preventDefault();
    inputHandler();
  };
  const inputHandler = (event) => {
    console.log(event.target.value);
  };
  return (
    <>
      <form action="" onSubmit={submitHandler}>
        <label htmlFor="para">Paragraphs</label>;
        <input id="para" type="number" min="0" max="8" onClick={inputHandler} />
        <button type="submit">Generate</button>
      </form>
    </>
  );
};

export default Input;
