import { Route, Switch } from 'wouter'
import Home from './pages/home'
import Projects from './pages/projects'
import Forniture from './pages/forniture'
import Art from './pages/art'
import Shop from './pages/shop'
import Galerie from './pages/galerie'
import Error from './pages/error'
import Details from './components/Details'
import About from './pages/about'
import Contact from './pages/contact'
import Feohouse from './pages/feohouse'

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
        path='/furniture'
        component={Forniture}
      />
      <Route
        path='/art'
        component={Art}
      />
      <Route
        path='/store'
        component={Shop}
      />
      <Route
        path='/gallery'
        component={Galerie}
      />
      <Route
        path='/about'
        component={About}
      />
      <Route
        path='/contact'
        component={Contact}
      />
      <Route
        path='/feohouse'
        component={Feohouse}
      />
      <Route
        path='/projects/:id/:slug'
        component={Details}
      />
      <Route
        path='/furniture/:id/:slug'
        component={Details}
      />
      <Route
        path='/projects/:id/:slug'
        component={Details}
      />
      <Route
        path='/art/:id/:slug'
        component={Details}
      />
      <Route
        path='/store/:id/:slug'
        component={Details}
      />
      <Route
        path='/gallery/:id/:slug'
        component={Details}
      />

      <Route component={Error} />
    </Switch>
  )
}

export default App
