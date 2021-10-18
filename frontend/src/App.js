import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {

  const [tasks, setTasks] = useState([
    {
        Id: 1,
        Name: 'Beck',
        Phone: '123',
        Account: true
    },
    {
        Id: 2,
        Name: 'Joe',
        Phone: '234',
        Account: false
    }
])

  return (
    <div className="App">
      <Header />
      <Tasks tasks = {tasks}/>
      
    </div>
  );
}

export default App;
