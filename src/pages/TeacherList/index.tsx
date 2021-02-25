import React from 'react';
import PageHeader from '../../components/PageHeader';
import WhatsAppIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css';

function TeacherList(){
  return(
    <div id="page-teacher-list" className="container">
      <PageHeader title='Estes são os Proffys disponiveis !!'>
        <form id='search-teacher'>
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id='subject'/>
          </div>
          <div className="input-block">
            <label htmlFor="week_day">Dia da Semana</label>
            <input type="text" id='week_day'/>
          </div>
          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id='time'/>
          </div>
        </form>
      </PageHeader>

      <main>
        <article className="teacher-item">
          <header>
            <img src="https://media-exp1.licdn.com/dms/image/C4E03AQFACFPS0Df6Zg/profile-displayphoto-shrink_100_100/0/1516665221615?e=1619654400&v=beta&t=nz__YfpOzg05kTkKRvmpvmEYcVY9EUwWMoGUtpAf-ZE" alt="Rafael Ramires"/>
          <div>
            <strong>Rafael Ramires</strong>
            <span>História</span>
          </div>
          </header>

          <p>
            Um historiador apaixonado por tecnologia.
            <br/><br/>

          </p>

          <footer>
            <p>Preço por Hora
              <strong>R$60,00</strong>
            </p>
            <button type='submit'>
              <img src={WhatsAppIcon} alt="Whatspp"/>
              WhatsApp
            </button>
          </footer>
        </article>
      </main>
    </div>
  )
}

export default TeacherList;