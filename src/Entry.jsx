import React from 'react'
import './Entry.css'
import locationIcon from '../assets/images/location.png'

function Entry(props) {
    return (
        <article>
            <img src={props.imageUrl} />
            <div className="blog-text">
                <div>
                    <img src={locationIcon} />
                    <p>{props.location}</p>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h2>{props.title}</h2>
                <p className="dates">{props.startDate} - {props.endDate}</p>
                <p className="description">{props.description}</p>
            </div>
        </article>
    )
}

export default Entry