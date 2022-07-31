import React from "react"
import Slider from "./Slider"
import "./App.css"

// - 10K pageviews / $8 per month
// - 50K pageviews / $12 per month
// - 100K pageviews / $16 per month
// - 500k pageviews / $24 per month
// - 1M pageviews / $36 per month


function Pricing(){
    return(
        <div className="pricing-container">
            <Slider />
           <article className="benefits-container">
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
