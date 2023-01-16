export const Contacts = ({ contacts, filter }) => {
  const handleClick = () => { }

  return (
    <>
      <label htmlFor="">
        Find contacts by the name:
        <input type="text" />
      </label>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            <p>
              {name}: {number}
            </p>
            <button type="button" onClick={handleClick}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
