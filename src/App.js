import React from 'react'
import Patients from './Patients/containers/Patients'

// Los componentes de clase son los encargados de la logicalExpression, y generalmente renderizan componentes funcionales
class App extends React.Component{
    render(){
        return(
            <div>
                <Patients />
            </div>
        )
    }
}
export default App