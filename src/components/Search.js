import { useState } from "react"
import { useNavigate } from "react-router-dom"
import './Search.css'
export default function Search() {
    const navigate = useNavigate()
    const [cityName, setCityName] = useState('')
    const onClick = () => {
        navigate(`/${cityName}`)
    }
    const handleChange = e => {
        setCityName(e.target.value)
    }
    return (
        <div className="inputStyle">
            <input placeholder="Напишите город" type='text' value={cityName} onChange={handleChange} />
            <button onClick={onClick}>Find</button>
        </div>
    )
}