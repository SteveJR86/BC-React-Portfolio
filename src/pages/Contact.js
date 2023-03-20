import ContactForm from "../components/ContactForm";
import './Contact.css';

function Contact(){
  return (
    <main className="contact-page">
      <h2>Contact Page</h2>
      <p>Please get in touch with me through the following means or using the contact form below</p>
      <ul>
        <li><a href='https://github.com/SteveJR86'>GitHub</a></li>
        <li><a href='https://www.linkedin.com/in/steven-riley-dev/'>LinkedIn</a></li>
        <li><a href='mailto:steven.j.riley@gmail.com'>steven.j.riley@gmail.com</a></li>
      </ul>
      <ContactForm />
    </main>
  )
}

export default Contact;