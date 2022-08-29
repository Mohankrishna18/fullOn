
import './App.css';
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Header from './containers/Header';
import ProductList from './containers/ProductList';
import ProductDetails from './containers/ProductDetails';

function App() {
  return (
    <div className="App">
      
      <Router>
      <Header />
 <Switch>

  
 <Route exact path="/" component={ProductList}></Route>
    <Route exact path="/productDetails" component={ProductDetails}></Route>  
     
 </Switch>
    
          
   
     
     </Router>

    </div>
  );
}

export default App;
