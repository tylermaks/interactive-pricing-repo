import React from "react"
import Slider from "./Slider"
import "./App.css"


function Pricing(){
    return(
        <div className="pricing-container">
            <Slider />
           <article className="benefits-container flex-center">
                <div>
                    <p className="benefit"><img className="icon" src="./images/icon-check.svg" alt="checkmark" /> Unlimited websites</p>
                    <p className="benefit"><img className="icon" src="./images/icon-check.svg" alt="checkmark" /> 100% data ownership</p>
                    <p className="benefit"><img className="icon" src="./images/icon-check.svg" alt="checkmark" /> Email reports</p> 
                </div>
                <button className="trial-btn">Start my trail</button>    
           </article>
        </div>
    )
}

export default Pricing;
