import { Component } from 'react';
// import ContactForm from './ContactForm/ContactForm';
// import Contacts from './Contacts/Contacts';
import Profile from './Profile/Profile';
import user from './Profile/user.json';

export class App extends Component {
  state = {
    contacts: [{ id: 'fff', name: 'Ihor', number: '0000' }],
    name: '',
  };
  render() {
    return (
      <>
        {/* <ContactForm />
        <Contacts contacts={this.state.contacts} /> */}
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </>
    );
  }
}
