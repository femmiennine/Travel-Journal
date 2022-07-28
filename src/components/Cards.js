import React from "react"

export default function Cards(props){
    return (
        <main className="main">
            <section className="section">
                <div>
                    <img src={props.imageUrl} alt="" className="destination--photo"/>
                </div>
                
                <div className="details">
                    <div className="location-container">
                        <img src={"./images/location.png"} alt="" className="pin"/>
                        <p className="country">{`${props.location}`.toUpperCase()}</p>
                        <a href={props.googleMapsUrl} className="google--maps">View on Google Maps</a>
                    </div>
                    
                    <div className="details--2">
                        <h1 className="tourist--spot">{props.title}</h1>
                        <p className="date">{`${props.startDate} - ${props.endDate}`}</p>
                        <p className="about">{props.description}</p>
                    </div>
                </div>
            </section>
        </main>
    )
}