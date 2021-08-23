import React from 'react'

export default function Card(props) {
    // props: image, name, onclick
    const {link, name, id, onPress} = props
    return (
        <div className="card" key={"card-" + id} onClick={
            () => {onPress(id)}
        }>
            <img src={link} alt={name}></img>
            <h2>{name}</h2>
        </div>
    ) 
}
