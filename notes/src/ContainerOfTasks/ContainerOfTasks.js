import React from 'react';
import Task from '../Task/Task';

class ContainerOfTasks extends React.Component {

    render(){
        return (
            <div>
                <Task />
                <Task />
            </div> 

        )
    }
}

export default ContainerOfTasks