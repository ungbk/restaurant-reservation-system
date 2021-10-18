export const Tasks = ({ tasks }) => {

    return (
        <>
          {tasks.map((task) => (
          <h3 key = {task.Id}> {task.Name} - {task.Phone}</h3>
          ))}  
        </>
    )
}

export default Tasks