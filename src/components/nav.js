import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

class Nav extends Component {

    constructor() {
        super();
        
        this.state = {
          showMenu: false,
        };
        
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
      }

      showMenu(event) {
        event.preventDefault();
        
        this.setState({ showMenu: true }, () => {
          document.addEventListener('click', this.closeMenu);
        });
      }
      
      closeMenu() {
        
        this.setState({ showMenu: false }, () => {
          document.removeEventListener('click', this.closeMenu);
        });
        
      }

    render(){
        return(
            <div className="nav">
                <button className="mainnav" onClick={this.showMenu}>
                  <FaBars />
                    {/* <div className="line"></div>
                    <div className="line-mid"></div>
                    <div className="line"></div> */}
                </button>
                
                {
                this.state.showMenu
                    ? (
                        {
                            "/" :    <div className="menu open">
                                        <Link to="/resume">Resume</Link>
                                        <Link to="/portfolio">Portfolio</Link>
                                    </div>,

                            "/resume" :   <div className="menu open">
                                            <Link to="/">About Me</Link>
                                            <Link to="/portfolio">Portfolio</Link>
                                        </div>,

                            "/portfolio" :   <div className="menu open">
                                                <Link to="/">About Me</Link>
                                                <Link to="/resume">Resume</Link>
                                            </div>
                        }[window.location.pathname] || <h1>No project match</h1>
                  
                    )
                    : (
                        <div className="menu">
                        <a>Resume</a>
                        <a>Portfolio</a>
                         </div>
                    )
                }
            </div>
        )
    }
}

export default Nav;