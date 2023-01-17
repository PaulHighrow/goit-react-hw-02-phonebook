export const Filter = ({ filter, onFilterInput }) => (
  <label htmlFor="">
    Find contacts by name:
    <input type="text" value={filter} onChange={onFilterInput} />
  </label>
);
