export const Contact = ({ contact: { id, name, number }, onDelete }) => (
  <>
    <p>
      {name}: {number}
    </p>
    <button type="button" onClick={() => onDelete(id)}>
      Delete
    </button>
  </>
);
