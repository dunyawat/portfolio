import React,{Component} from 'react';
import Profile from '../components/profile';
import About from '../components/about';
import Resume from '../components/resume';
import ProfileMobile from '../components/profile_mobile';
import SideDrawer from '../components/sidedrawer';
import Backdrop from '../components/backdrop';
import Portfolio from '../components/portfolio';

class Home extends Component {
  constructor(props){
    super(props);
    this.drawerToggleClickHandler = this.drawerToggleClickHandler.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
  }

  state = {
    sideDrawerOpen:false
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen:!prevState.sideDrawerOpen};
    });
  };

  closeDrawer = () => {
    this.setState({sideDrawerOpen:false})
  };

  render(){
    let backdrop;
    if(this.state.sideDrawerOpen){
      backdrop = <Backdrop />;
    }

    return (
      <div className="home">
        <div className="box">
          <Profile />
          <ProfileMobile drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer  click={this.closeDrawer} show={this.state.sideDrawerOpen} />
          {backdrop}
          <div className="space"></div>
          {{
              "/" :  <About />,
              "/resume" : <Resume />,
              "/portfolio" : <Portfolio />
          }[window.location.pathname] || <h1>No project match</h1>}
         
        </div>
      </div>
    );
  }
}

export default Home;
