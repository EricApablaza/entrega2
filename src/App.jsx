import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import { NavBar } from "./componentes/NavBar/NavBar"

export const App = () => {
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting={"Mis Productos"}/>
    </>
  
    )
}
export default App