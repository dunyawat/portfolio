import React,{Component} from 'react';
import { FaLaptopCode,FaReact,FaMobileAlt,FaTeamspeak } from 'react-icons/fa';
import Nav from './nav';

class About extends Component {
    render(){
        return(
            <div className="content">
                <div className="about-box">
                    <div className="about">
                        <Nav />
                        <h1>About Me</h1>
                        <div className="border"></div>
                        <p>I am a person who's purposeful, a quick learner, loves to problems solving and i can working under pressure.</p>
                    </div>
                    <div  className="doing">
                        <h3 className="doing-head">What I'm doing</h3>
                        <div className="box4">
                            <div className="box4-box">
                                <div className="box4-icon"><FaLaptopCode /></div>
                                <div>
                                    <h5>Front-End Development</h5>
                                    <p>Able to create beautiful sites by using HTML, SCSS, JS</p>
                                </div>
                            </div>
                            <div className="box4-box">
                                <div className="box4-icon"><FaReact /></div>
                                <div>
                                    <h5>React Development</h5>
                                    <p>Able to create React quicky and effective</p>
                                </div>
                            </div>
                            <div className="box4-box">
                                <div className="box4-icon"><FaMobileAlt /></div>
                                <div>
                                    <h5>Responsive Design</h5>
                                    <p>Able to create mobile responsive sites at profressional level</p>
                                </div>
                            </div>
                            <div className="box4-box">
                                <div className="box4-icon"><FaTeamspeak /></div>
                                <div>
                                    <h5>Strong Support</h5>
                                    <p>Able to communicate ideas in brief way</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;