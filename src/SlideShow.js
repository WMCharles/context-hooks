import React, { useState} from 'react'
export default function SlideShow({slides}) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const sliderStyles = {
        height: "100%",
        position: "relative"
    }
    const slideStyles = {
        width: "100%",
        height: "100%",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${slides[currentIndex].url})`
    }
    const leftArrow = {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        left: "20px",
        fontSize: "45px",
        color: "red",
        zIndex: 1,
        cursor: "pointer"
    }
    const rightArrow = {
        position: "absolute",
        top: "50%",
        right: "20px",
        transform: "translate(0, -50%)",
        fontSize: "45px",
        color: "red",
        zIndex: 1,
        cursor: "pointer"
    }
    function goLeft(){
        const isFirstSlide = currentIndex === 0
        const newSlide = isFirstSlide ? slides.length - 1 : currentIndex -1
        setCurrentIndex(newSlide)
    }
    function goRight(){
        const isLastSlide = currentIndex === slides.length - 1
        const newSlide = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newSlide)
    }
    const dotsContainer = {
        display: "flex",
        justifyContent: "center"
    }
    const dotsStyle = {
        margin: "0 3px",
        cursor: "pointer",
        fontSize: "20px"
    }
    function goToSlide(index){
        setCurrentIndex(index)
    }
    return (
        <div style={sliderStyles}>
            <div style={leftArrow} onClick={goLeft}><span><i className='fas fa-angle-left'></i></span></div>
            <div style={rightArrow} onClick={goRight}><span><i className='fas fa-angle-right'></i></span></div>
            <div className='Image' style={slideStyles}></div>
            <div style={dotsContainer}>
                {slides.map((slide, slideIndex) => 
                    <div style={dotsStyle} key={slideIndex} onClick={() => goToSlide(slideIndex)}>0</div>
                )}
            </div>
        </div>
    )
}
