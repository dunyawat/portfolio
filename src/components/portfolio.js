import React,{Component} from 'react';
import Nav from './nav';

class Portfolio extends Component {
    render(){
        return(
            <div className="content">
                <Nav />
                <div className="portfolio-box">
                    <div className="portfolio">
                        <h1>Portfolio</h1>
                        <div className="border"></div>
                    </div>
                    <div  className="portfolio-content">
                        <div>
                            <a href="https://www.roman-chelseath.com/" target="_blank"><button className="portfolio-button"><img src="images/chelsea.png" /></button></a>
                            <p>HTML + CSS + JS + jQuery + PHP</p>
                        </div>
                        <div>
                            <a href="https://train-scss.web.app/" target="_blank"><button className="portfolio-button"><img src="images/scss.png" /></button></a>
                            <p>SCSS</p>
                        </div>
                        <div>
                            <a href="https://salebox.io/en/" target="_blank"><button className="portfolio-button"><img src="images/salebox.png" /></button></a>
                            <p>HTML + SCSS + JS + jQuery</p>
                        </div>
                        <div>
                            <a href="https://dunyawat-pos.herokuapp.com/" target="_blank"><button className="portfolio-button"><img src="images/pos.png" /></button></a>
                            <p>React POS</p>
                        </div>
                        <div>
                            <a href="https://yaksri-website.herokuapp.com/" target="_blank"><button className="portfolio-button"><img src="images/yaksri.png" /></button></a>
                            <p>React Website</p>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
export default Portfolio;