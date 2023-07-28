import React from "react";
import ben from './img/ben1.jpg';
import benA from './img/ben2.jpg';
import benB from './img/ben3.jpg';
import benC from './img/ben4.jpg';
import './task4.css';
class Task4 extends React.Component{
    render(){
        return(
            <div>
                <div>
                 <img className='ben' src={ben} width="500"/>
                 <img className='ben1' src={benA} width="500"/>
                </div> 
                <div>
                    <video width="1000" autoPlay loop controls className="vid">
                         <source src="./video/ben.mp4" type="video/mp4"/>
                    </video>
                </div>
                <div>
                 <img className='ben2' src={benB} width="500"/>
                 <img className='ben3' src={benC} width="500"/>
                </div>
            </div>
        )
    }
}
export default Task4;