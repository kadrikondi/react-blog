 
import Navbar  from './Navbar';
import Home from './Home'
import Create from './Create'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import BlogDetail from './BlogDetail';
import NotFound from './NotFound';
 const name =" idris abdulkadri kondi"
 let link ="http://google.com"
function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>

      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/create">
      <Create/>
          </Route>
          <Route path="/blog/:id">
      <BlogDetail/>
          </Route>
          <Route path='*'>
            <NotFound/>
          </Route>
        </Switch>
        
     
  
      {[34,43,43,3]}
     { Math.floor(Math.random() * 2 )}
     <br />
     <a href={link}> google</a>
     <h1>welcome to reatjs</h1>
     </div>
    </div>
    </Router>
  );
}

export default App;
