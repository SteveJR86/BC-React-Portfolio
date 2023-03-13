import ContactForm from "../components/ContactForm";

function Contact(){
  return (
    <main>
      <h2>Contact Page</h2>
      <p>Please get in touch with me through the following means or using the contact form below</p>
      <ul>
        <li><a href='https://github.com'>GitHub</a></li>
        <li><a href='https://linkedin.com'>LinkedIn</a></li>
        <li><a href='mailto:steven.j.riley@gmail.com'>steven.j.riley@gmail.com</a></li>
      </ul>
      <ContactForm />
    </main>
  )
}

export default Contact;