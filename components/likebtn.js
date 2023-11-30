"use client"
import { useState } from "react"

export default function Likebtn(){
    const [count, setCount] = useState(0)
    
    return(
        <div className="contact-info-container">
            <button className="btn btn-color-2 project-btn" onClick={() => setCount(count+1)}>Likes: {count}</button>  
        </div>
    )
}