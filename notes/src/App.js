import AddTask from './AddTask/AddTask';
import './App.css';
import ContainerOfTasks from './ContainerOfTasks/ContainerOfTasks';
import Header from './Header/Header';




const App = () => {
  return (<div className="App">
    <Header />
    <ContainerOfTasks />
    <AddTask />

    </div>
  );
}

export default App;
