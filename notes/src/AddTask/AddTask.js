import React from 'react';



class AddTask extends React.Component {

    
    
    constructor(props) {
        super(props);
        let tasks = [];
    }
    

    render(){

        function f() {
            var val = document.getElementById('inputTask').value;
            this.tasks.push(val);
            console.log(this.tasks);
            setTimeout(5000)
        }

        return (
            <div>
                <p>Add Task</p>
                <form>
                    <input type="text" id='inputTask'/>
                    <button id="sub" onClick={f}>button</button>
                </form>
                
                
            </div> 

        )
    }
}

export default AddTask