import React from 'react'

const CardServices = ({ title, description, icon }) => {
    return (

        <div className="card_container">
            <div className="card_container_icon" >
                {icon}
            </div>
            <div className="container_card_text">
                <h1 className="TitleCard">{title}</h1>
                <span className="TextCard">{description} </span>
            </div>
        </div>

    )
}

export default CardServices
