import React from 'react';
import FAB from '../components/FAB';
import Header from '../components/Header'
import PatientList from '../components/PatientList'

const listJSON = [
  {
    name: "Sebastian Segura",
    date: "23/09/19",
    description:
      "Descripcion Descripcion Descripcion Descripcion DescripcionDescripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion   "
  },
  {
    name: "Matias Martinez",
    date: "23/09/19",
    description: "Descripcion"
  },
  {
    name: "Adrian Vera",
    date: "23/09/18",
    description: "Descripcion Descripcion  "
  }
];

class Patients extends React.Component{
    state = {
        list: listJSON
    }

    onFilter = (event) => {
        let listFiltered = listJSON.filter(
            (item) => {
                return(item.name.toLowerCase().includes(event.target.value.toLowerCase()))
            }
        )
        this.setState({ list: listFiltered })
    }

    render(){
        return(
            <div>
                <Header title='Pacientes' />
                <FAB />
                <PatientList
                    list={this.state.list}
                    filter={this.onFilter}
                />
            </div>
        )
    }
}

export default Patients