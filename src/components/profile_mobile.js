import React,{Component} from 'react'
import {Link} from 'react-router-dom'

class ProfileMobile extends Component {
    render(){
        return(
            <div className="profile-mobile__button-box">
                <div className="profile-mobile__button"><button className="btn" onClick={this.props.drawerClickHandler}>Profile</button></div>
                {{
                 "/" :  <div className="profile-mobile__button"><Link to="/resume"><button className="btn btn-right">Resume</button></Link> <Link to="/portfolio"><button className="btn btn-right">Portfolio</button></Link></div>,
                "/resume" : <div className="profile-mobile__button"><Link to="/"><button className="btn btn-right">About Me</button></Link> <Link to="/portfolio"><button className="btn btn-right">Portfolio</button></Link></div>,
                "/portfolio" : <div className="profile-mobile__button"><Link to="/"><button className="btn btn-right">About Me</button></Link> <Link to="/resume"><button className="btn btn-right">Resume</button></Link></div>
                }[window.location.pathname] || <h1>No project match</h1>}

            </div>
        )
    }
}

export default ProfileMobile