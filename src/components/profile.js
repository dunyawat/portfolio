import React,{Component} from "react";
import { FaFacebookF ,FaLinkedin,FaRegCalendarCheck,FaAddressCard,FaGithub,FaMailBulk } from 'react-icons/fa';

class Profile extends Component {
    render(){
        return(
            <div className="profile">
                <div className="profile__photo">
                    <img src="/images/profile.jfif" />
                </div>
                <div className="profile__detail">
                    <div><h3>Dunyawat Hongsupangpan</h3></div>
                    <div><button className="btn btn-sec">Front-End Developer</button></div>
                    <div className="profile__detail-icon"><a href="https://www.facebook.com/Dunyawat.h/" target="_blank"><FaFacebookF /></a> <a href="https://www.linkedin.com/in/dunyawat-hongsupangpan-9895b318a/" target="_blank"><FaLinkedin /></a> <a href="https://github.com/dunyawat" target="_blank"><FaGithub /></a> </div>
                </div>
                <div className="profile__address">
                    <div><span><FaMailBulk /></span> dunyawat.h@gmail.com</div>
                    <div><span><FaAddressCard /></span>Thonburi, Bangkok</div>
                    <div><span><FaRegCalendarCheck /></span> December 3, 1995</div>
                </div>
                <div className="profile_email">
                    <a href="mailto:dumyawat.h@gmail.com"><button className="btn btn-blue btn-email">Email me</button></a>
                </div>
            </div>
        )
    }
}

export default Profile;