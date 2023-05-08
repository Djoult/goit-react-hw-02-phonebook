import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Contacts from './Contacts/Contacts';

export class App extends Component {
  state = {
    contacts: [{ id: 'fff', name: 'Ihor', number: '0000' }],
    name: '',
  };
  render() {
    return (
      <>
        <ContactForm />
        <Contacts contacts={this.state.contacts} />
      </>
    );
  }
}
