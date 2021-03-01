import React from 'react'
import WhatsAppIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css';

function TeacherItem(){

  return(
    <article className="teacher-item">
      <header>
        <img
          src="https://media-exp1.licdn.com/dms/image/C4E03AQFACFPS0Df6Zg/profile-displayphoto-shrink_100_100/0/1516665221615?e=1619654400&v=beta&t=nz__YfpOzg05kTkKRvmpvmEYcVY9EUwWMoGUtpAf-ZE"
          alt="Rafael Ramires" />
        <div>
          <strong>Rafael Ramires</strong>
          <span>História</span>
        </div>
      </header>

      <p>
        Um historiador apaixonado por tecnologia.
        <br /><br />

      </p>

      <footer>
        <p>Preço por Hora
          <strong>R$60,00</strong>
        </p>
        <button type='submit'>
          <img src={WhatsAppIcon} alt="Whatspp" />
          WhatsApp
        </button>
      </footer>
    </article>
)
}

export default TeacherItem;