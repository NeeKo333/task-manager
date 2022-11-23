function Buttons({ changeTodosFn, children, title }) {
  return (
    <>
      <button title={title} onClick={changeTodosFn}>
        {children}
      </button>
    </>
  );
}

export default Buttons;
