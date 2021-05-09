import React,{Component} from 'react';
import Nav from './nav';
import { FaUserGraduate,FaLaptopCode } from 'react-icons/fa';

class Resume extends Component {
    render(){
        return(
            <div className="content">
                <Nav />
                <div className="resume-box">
                    <div className="resume">
                        <h1>Resume</h1>
                        <div className="border"></div>
                        <div className="resume-content">
                            <a href="/files/dunyawatResume.pdf" dowload><button className="btn btn-blue btn-dowload">Download Resume</button></a>
                            {/* <div className="edu">
                                <div className="edu-head"><FaUserGraduate /> Education</div>
                            </div>
                            <div className="exp">
                                <div className="exp-head"><FaLaptopCode /> Experience</div>
                            </div> */}
                        </div>
                    </div>
                </div>              
            </div>
        )
    }
}
export default Resume;