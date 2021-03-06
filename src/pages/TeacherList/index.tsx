import React from 'react';
import PageHeader from '../../components/PageHeader';
import './styles.css';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

function TeacherList(){
  return(
    <div id="page-teacher-list" className="container">
      <PageHeader title='Estes são os Proffys disponiveis !!'>
        <form id='search-teacher'>
          
          <Select
          name="subject" 
          label="Matéria"
          options = {[
            {value:"Artes", label:"Artes"},
            {value:"Biologia", label:"Biologia"},
            {value:"Química", label:"Química"},
            {value:"Geogragia", label:"Geogragia"},
            {value:"História", label:"História"},
            {value:"Matemática", label:"Matemática"},
            {value:"Português", label:"Português"},
            {value:"Química", label:"Química"},
            {value:"Física", label:"Física"},

          ]}
         />
          <Select
          name="week_day" 
          label="Dia da semana"
          options = {[
            {value:"0", label:"Domingo"},
            {value:"1", label:"Segunda-feira"},
            {value:"2", label:"Terçca-feira"},
            {value:"3", label:"Quarta-feira"},
            {value:"4", label:"Quinta-feira"},
            {value:"5", label:"Sexta-feira"},
            {value:"6", label:"Sábado"},
          ]}
         />
          <Input type="time" label="Horário" name="time" />
        </form>
      </PageHeader>

      <main>
        <TeacherItem/>
        <TeacherItem/>
        <TeacherItem/>
        <TeacherItem/>
      </main>
    </div>
  )
}

export default TeacherList;