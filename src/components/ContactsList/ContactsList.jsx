import { Contact } from 'components/Contact/Contact';

export const ContactsList = ({ contacts, onDelete }) => {
  return (
      <ul>
        {contacts.map((contact, idx) => (
          <li key={idx}>
            <Contact contact={contact} onDelete={onDelete} />
          </li>
        ))}
      </ul>
  );
};
