import React from "react"


// - 10K pageviews / $8 per month
// - 50K pageviews / $12 per month
// - 100K pageviews / $16 per month
// - 500k pageviews / $24 per month
// - 1M pageviews / $36 per month

function Slider(){
    return(
        <div className="slider-container">
            <h5 className="views">100K Pagviews</h5>
            <input className="range-slider" type="range" />
            <div className="price-container">
                <h1>$16.00</h1>
                <p>/month</p>
            </div>
            <div className="toggle-container">
                <span>Monthly Billing</span>
                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                </label>
                <span>Monthly Billing</span>
                <span className="discount">-25%</span>
            </div>
        </div>
    )
}

export default Slider;