function Contacts({ contacts }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <span>{name}</span>
            <span>{number}</span>
            <button type="button">Delete</button>
          </li>
        );
      })}
    </ul>
  );
}

export default Contacts;
