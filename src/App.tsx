import { Route, Switch } from 'wouter'
import Home from './pages/home'
import Projects from './pages/projects'
import Forniture from './pages/forniture'
import Art from './pages/art'
import Shop from './pages/shop'
import Galerie from './pages/galerie'
import Error from './pages/error'

function App() {
  return (
    <Switch>
      <Route
        path='/'
        component={Home}
      />
      <Route
        path='/projects'
        component={Projects}
      />
      <Route
        path='/forniture'
        component={Forniture}
      />
      <Route
        path='/art'
        component={Art}
      />
      <Route
        path='/shop'
        component={Shop}
      />
      <Route
        path='/galerie'
        component={Galerie}
      />
      <Route component={Error} />
    </Switch>
  )
}

export default App
