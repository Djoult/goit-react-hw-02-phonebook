// import propTypes from 'prop-types';
import { Component } from 'react';
// import shortid from 'shortid';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  handleEnter = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };
  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    // this.setState({});
    this.reset();
  };
  reset = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={this.state.name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              onChange={this.handleEnter}
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label>
            Phone
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              onChange={this.handleEnter}
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>

          <button type="submit">Add contact</button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
