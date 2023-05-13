// component that renders a form input
// props are all attirbutes of a input element

const Input = () => {
  return (
    <div>
      <label htmlFor="name">Name</label>
      <div>
        <input type="text" id="name" name="name" />
        <p>unit</p>
      </div>
    </div>
  );
};

export default Input;
