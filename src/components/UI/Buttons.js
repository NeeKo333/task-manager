function Buttons({ changeTodosFn, children }) {
  return (
    <>
      <button onClick={changeTodosFn}>{children}</button>
    </>
  );
}

export default Buttons;
