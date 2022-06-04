import React from 'react'

export default function () {
  return (
    <div>
      <section class='section section-center content'>
        <h3 class='title-contact'>Envoyer nous vos Message</h3>
        <form class='form'>
          <div class='form-control'>
            <label for='name'>Nom</label>
            <input type='text' class='name-input' id='name' />
          </div>
          <div class='form-control'>
            <label for='email'>Email</label>
            <input type='email' class='email-input' id='email' />
          </div>
          <div class='form-control'>
            <label for='subject'>SuJet</label>
            <input type='text' class='subject-input' id='subject' />
          </div>
          <div class='form-control'>
            <label for='message'>Message</label>
            <textarea id='message' class='message-input' rows='5'>
              {' '}
            </textarea>
          </div>
          
          <button type='submit' class='submit-btn'>
            Send
          </button>
        </form>
      </section>
    </div>
  );
}
