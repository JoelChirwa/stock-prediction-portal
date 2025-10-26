import React from 'react'
import Button from './Button'

const Main = () => {
  return (
    <>
      
        <div className="container">
            <div className="text-center p-3 bg-light-dark rounded">
                <h1 className="text-light">Stock Prediction Portal</h1>
                <p className="text-light lead">
                    Predict stock prices using advanced machine learning algorithms and in-depth historical data analysis. 
Our platform empowers investors and analysts with real-time insights, trend forecasting, and interactive visualizations 
to make smarter and more confident investment decisions. It integrates cutting-edge analytics, predictive modeling, and data-driven intelligence 
to enhance market accuracy, minimize risk, and identify profitable opportunities across diverse financial sectors worldwide.
                </p>
                 <Button text="Login" class="btn-outline-info" />
            </div>
       
        </div>
    </>
  )
}

export default Main
