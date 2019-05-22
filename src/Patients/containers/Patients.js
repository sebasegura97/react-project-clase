import React from 'react';
import FAB from '../components/FAB';
import Header from '../components/Header'

class Patients extends React.Component{
    render(){
        return(
            <div>
                <Header title='Pacientes' />
                <FAB />
            </div>
        )
    }
}

export default Patients