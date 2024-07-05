import React, {useState} from 'react'
import './index.css'

const Speedometer = () => {
  const [speed, setSpeed] = useState(0)

  const accelerate = () => {
    if (speed < 200) {
      setSpeed(speed + 10)
    }
  }

  const applyBrake = () => {
    if (speed > 0) {
      setSpeed(speed - 10)
    }
  }

  return (
    <div className="speedometer-container">
      <h1 className="heading">SPEEDOMETER</h1>
      <img
        src="https://accets.ccbp.in/frontend/react-js/speedometer-img.png"
        alt="speedometer"
        className="speedometer-image"
      />
      <h2 className="speed-display">Speed is {speed}mph</h2>
      <p className="description">Min Limit is 0mph, max Limit is 200mph</p>
      <div className="buttons-container">
        <button className="button accelerate-button" onClick={accelerate}>
          Accelerate
        </button>
        <button className="button brake-button" onClick={applyBrake}>
          Apply Brake
        </button>
      </div>
    </div>
  )
}

export default Speedometer
