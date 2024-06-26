import './App.css'
import useRouterElement from './useRouterElement'

function App() {
  const elementRouter = useRouterElement()
  return <div>{elementRouter}</div>
}

export default App
