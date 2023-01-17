import { Label, Input } from "./Filter.styled";

export const Filter = ({ filter, onFilterInput }) => (
  <Label htmlFor="">
    Find contacts by name:
    <Input type="text" value={filter} onChange={onFilterInput} />
  </Label>
);
