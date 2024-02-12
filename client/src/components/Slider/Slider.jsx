import React, { useState } from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import "./Slider.scss"

const Slider = () => {


    const [transXContainer, setTransXContainer] = useState({ transform: 'translateX(0vw)' })

    const data = [
        "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ];


    const handleClick = (event) => {

        const buttonId = event.target.id

        const start = transXContainer.transform.toString().indexOf("(")
        const end = transXContainer.transform.toString().indexOf("vw")

        let value = parseInt(transXContainer.transform.toString().slice(start + 1, end))


        buttonId === "next" ? value -= 100 : value += 100


        console.log(value)

        if (value === -300)
            value = 0

        if (value === 100)
            value = -200

        console.log(value)

        if ((value <= 0) && (value >= (data.length - 1) * -100))
            setTransXContainer({
                transform: `translateX(${value}vw)`
            });
    }

    return (

        <div className='slider'>

            {console.log("render")}

            <div className='container' style={transXContainer}>
                <img src={data[0]} alt="" />
                <img src={data[1]} alt="" />
                <img src={data[2]} alt="" />
            </div>

            <div className="icons">
                <div className='button' >
                    <KeyboardArrowLeftIcon id="previous" onClick={handleClick} />
                </div>

                <div className='button' >
                    <KeyboardArrowRightIcon id="next" onClick={handleClick} />
                </div>

            </div>


        </div>
    )
}

export default Slider