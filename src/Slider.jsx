import React, {useState} from "react"

function Slider(){
    const [price, setPrice] = useState("36")
    const [views, setViews] = useState('1M')
    const [position, setPosition] = useState(4)
    const [discount, setDiscount] = useState(false)

    const handleInput = (e) =>{
        let pricesArr = [8,12,16,24,36]
        let viewArr = ["10K", "50K", "100K", "500K", "1M"]
        setPrice(pricesArr[e.target.value])
        setViews(viewArr[e.target.value])
        setPosition(e.target.value)
    }

    const handleClick = () =>{
        setDiscount(!discount)
    }

    return(
        <div className="slider-container flex-center">
            <h5 className="views">{views} views</h5>
            <input onInput={handleInput} id="rangeSlider" className="range-slider" type="range" min="0" max="4" style={{background: 'linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%)' + (position/4)*100 + '%, hsl(224, 65%, 95%) ' + (position/4)*100 + '%, hsl(224, 65%, 95%) 100%)'}}/>            
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
                <span>Yearly Billing</span>
                <span className="discount"></span>
            </div>
        </div>
    )
}

export default Slider;