export default function RadioInput({ item, state, options }) {
  const [form, setForm] = state;

  function ChangeHandler(event) {
    setForm({ ...form, [item.key]: event.target.value });
    console.log(event.target.value);
  }

  const radioOptions = options.map((option) => (
    <label key={option.id}>
      <input
        type="radio"
        name="options"
        id={option.id}
        value={option.label}
        checked={item.checked}
        onChange={ChangeHandler}
      />
      {option.label}
    </label>
  ));

  return <div>{radioOptions}</div>;
}
