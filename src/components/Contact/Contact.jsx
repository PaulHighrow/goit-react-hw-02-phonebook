import { Text, Button } from "./Contact.styled";

export const Contact = ({ contact: { id, name, number }, onDelete }) => (
  <>
    <Text>
      {name}: {number}
    </Text>
    <Button type="button" onClick={() => onDelete(id)}>
      Delete
    </Button>
  </>
);
