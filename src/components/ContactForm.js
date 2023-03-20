import './ContactForm.css';

function ContactForm(){

  function formHandler(event){
    event.preventDefault();
    const formData = new FormData(event.target.form);
    formData.append('access_key', '9abd3290-4896-4e90-a98b-9fac87ed69b8');
    const res = fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then(res => console.log(res));
  }

  return(
    <section className='contact'>
      <h3 className='contact-title'>Contact Form</h3>
      <form className='contact-form'>
        <input className='contact-form-name' type='text' placeholder='Name' id='name' name='name'></input>
        <input className='contact-form-email' type='email' placeholder='Email' id='email' name='email'></input>
        <textarea className='contact-form-details' placeholder='Details...' id='details' name='details'></textarea>
        <button className='contact-form-button' type='submit' onClick={formHandler}>Submit</button>
      </form>
    </section>
  )
}

export default ContactForm;