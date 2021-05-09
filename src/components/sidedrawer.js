import React, { Component } from "react";
import { FaFacebookF ,FaLinkedin,FaRegCalendarCheck,FaAddressCard,FaGithub,FaMailBulk  } from 'react-icons/fa';

class SideDrawer extends Component{
    render(){
        let drawerClasses = 'side-drawer';
        if (this.props.show) {
            drawerClasses = 'side-drawer open';
        }
        return(
            <nav className={drawerClasses}>
                <button className="close" onClick={this.props.click}>&#215;</button>
                <div className="profile-mobile">
                    <div className="profile-mobile__photo">
                        <img src="/images/profile.jfif" />
                    </div>
                    <div className="profile-mobile__detail">
                        <div><h3>Dunyawat Hongsupangpan</h3></div>
                        <div><button className="btn btn-sec">Front-End Developert</button></div>
                        <div className="profile-mobile__detail-icon"><a href="https://www.facebook.com/Dunyawat.h/"><FaFacebookF /></a> <a href="https://www.linkedin.com/in/dunyawat-hongsupangpan-9895b318a/"><FaLinkedin /></a> <a href="https://github.com/dunyawat"><FaGithub /></a>  </div>
                    </div>
                    <div className="profile-mobile__address">
                        <div><span><FaMailBulk /></span> dunyawat.h@gmail.com</div>
                        <div><span><FaAddressCard /></span>Thonburi, Bangkok</div>
                        <div><span><FaRegCalendarCheck /></span> December 3, 1995</div>
                    </div>
                    <div className="profile-mobile_email">
                    <a href="mailto:dumyawat.h@gmail.com"><button className="btn btn-blue btn-email">Email me</button></a>
                    </div>
                </div>
            </nav>
        );
    }
} 

export default SideDrawer;