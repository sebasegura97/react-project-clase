import React from 'react'
// https://react-icons-kit.now.sh/
import Icon from 'react-icons-kit'
import { ic_search } from 'react-icons-kit/md/ic_search'
import './PatientList.css'



const Filter = (props) => {
    return(
        <div className='filter-container'>
            <div className='filter-input-container'>
                <Icon icon={ic_search} size={22}    className='filter-search-icon'> icono  </Icon>
                <input onChange={ props.filter } className='filter-input' placeholder='Nombre del paciente'  />
            </div>
            <p className='filter-cancel'> Cancelar </p>
        </div>
    )
}

const PatientItem = (props) => {
    return (
      <div className="patient-item-container">
        <p className="patient-item-title"> {props.name} </p>
        <p className='patient-item-description'>
          <span className='patient-item-date'> {props.date} </span> {props.description}
        </p>
      </div>
    );
}


const PatientList = (props) => {
    return(
        <div className='patient-list-container'>
            <Filter
                filter={props.filter}
            />
            <h1> Lista </h1>

            {
                props.list.map(
                    (item) => {
                        return (
                          <PatientItem
                            name= {item.name}
                            date= {item.date}
                            description= {item.description}
                          />
                        );
                    }
                )
            }

            
        </div>
    )
}

export default PatientList