import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import shortid from 'shortid';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };
    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    console.log(e.currentTarget.value);

    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const getVisibleContacts = this.getVisibleContacts();
    return (
      <>
        <h1>PhoneBook</h1>
        <ContactForm onSubmit={this.addContact} />
        <Filter value={filter} onChange={this.changeFilter} />
        <Contacts
          contacts={getVisibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </>
    );
  }
}
