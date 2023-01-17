import { List, Item } from './ContactsList.styled';
import { Contact } from 'components/Contact/Contact';

export const ContactsList = ({ contacts, onDelete }) => {
  return (
      <List>
        {contacts.map((contact, idx) => (
          <Item key={idx}>
            <Contact contact={contact} onDelete={onDelete} />
          </Item>
        ))}
      </List>
  );
};
