import './App.scss';
import React,{Component} from 'react';
import { BrowserRouter , Route , Switch} from "react-router-dom";
import Home from "./container/Home";
import NotFound from "./container/error/NotFound";


class App extends Component {

  renderRouter(){
    return(
      <Switch>  
        <Route exact path="/" component={Home} />
        <Route exact path="/resume" component={Home} />
        <Route exact path="/portfolio" component={Home} />
        
      
        <Route component={NotFound} />
      </Switch>
    )
  }

  render(){
    return (
      <BrowserRouter>
          {this.renderRouter()}
      </BrowserRouter>
    );
  }
}

export default App;
