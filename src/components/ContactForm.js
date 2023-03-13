function ContactForm(){
  return(
    <form>
      <input type="text" placeholder="Name"></input>
      <input type="email" placeholder="Email"></input>
      <textarea placeholder="Details..."></textarea>
      <button type="submit">Submit</button>
    </form>
  )
}

export default ContactForm;