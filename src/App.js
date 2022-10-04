import React from 'react'
import SlideShow from './SlideShow'

export default function App() {
  const slides = [
    {
      url: "https://d-micheni.github.io/Gadget-Centre/assets/images/1a.jpg",
      text: "1 / 3"
    },
    {
      url:"https://d-micheni.github.io/Gadget-Centre/assets/images/2a.jpg",
      text: "2 / 3"
    },
    {
      url: "https://d-micheni.github.io/Gadget-Centre/assets/images/3a.jpg",
      text: "3 / 3"
    }
  ]
  const divStyles = {
    width: "80%",
    height: "700px",
    margin: "0 auto"
  }
  
  return (
    <div>
      <div style={divStyles}>
        <SlideShow slides={slides}/>
      </div>
    </div>
  )
}
