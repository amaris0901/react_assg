import React from 'react';
import "../styles/form.css"
class MyForm extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault(); 
    const email = event.target.elements.email.value;
    const firstName = event.target.elements.firstName.value;
    const lastName = event.target.elements.lastName.value;
    const phone = event.target.elements.phone.value;
    const password = event.target.elements.password.value;
    alert(`Email: ${email}\nFirst Name: ${firstName}\nLast Name: ${lastName}\nPhone: ${phone}\nPassword: ${password}`);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="email">Email: <input type="email" id="email" name="email" required /></label>
       
        <label htmlFor="firstName">First Name:<input type="text" id="firstName" name="firstName" pattern="[a-zA-Z]+" required /></label>
        
        <label htmlFor="lastName">Last Name:<input type="text" id="lastName" name="lastName" pattern="[a-zA-Z]+" required /></label>
        
        <label htmlFor="phone">Phone Number:<input type="tel" id="phone" name="phone" pattern="[0-9]{10}" required /></label>
        
        <label htmlFor="password">Password:<input type="password" id="password" name="password" required /></label>
        
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default MyForm;
