import React, {useState} from "react"


// - 10K pageviews / $8 per month
// - 50K pageviews / $12 per month
// - 100K pageviews / $16 per month
// - 500k pageviews / $24 per month
// - 1M pageviews / $36 per month

function Slider(){

    const [price, setPrice] = useState("16")
    const [discount, setDiscount] = useState(false)


    const handleInput = () =>{
        const slider = document.getElementById("rangeSlider")
        setPrice(slider.value)
    }

    const handleClick = () =>{
        setDiscount(!discount)
    }

    return(
        <div className="slider-container">
            <h5 className="views">100K Pagviews</h5>
            <input onInput={handleInput} id="rangeSlider" className="range-slider" type="range" min="8" max="36" step="4" value="16" />
            <div className="price-container">
                <h1>${discount ? price * 0.75 : price}.00</h1>
                <p>/month</p>
            </div>
            <div className="toggle-container">
                <span>Monthly Billing</span>
                <label className="switch">
                    <input onClick={handleClick} type="checkbox" />
                    <span className="slider round"></span>
                </label>
                <span>Monthly Billing</span>
                <span className="discount">-25%</span>
            </div>
        </div>
    )
}

export default Slider;