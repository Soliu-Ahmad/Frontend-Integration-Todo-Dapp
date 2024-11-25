import "./config/connection"
import Layouts from "./components/Layout"
import CreateTodoModal from "./components/CreateTodoModal"
import Todos from "./components/Todos"


function App() {

  return (
    <Layouts>
      <CreateTodoModal />
      <Todos />
    </Layouts>
  )
}

export default App