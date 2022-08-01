import React from "react"

function Logo(){
    return(
        <div className="logo-container flex-center">
            <h2>Simple, traffic-based pricing</h2>
            <p>Sign-up for our 30-day trial. No credit card required. </p>
            <img className="logo" src="./images/pattern-circles.svg" alt="logo"/>
        </div>
    )
}

export default Logo;