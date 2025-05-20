import { useEffect, useState } from 'react'
import './cambio.css'

const Cambio = () => {
    const [theme, setTeheme] = useState('claro')

    const handleChange = (e) => setTeheme(e.target.checked ? 'oscuro' : 'claro')

    useEffect(()=>{
        document.body.setAttribute('data-theme', theme)
    }, [theme])

    return (
        <section className='cambio'>
            <label className='toggle'>
                <input hidden type="checkbox" onChange={handleChange} className='check-cambio'/>
                <span className='slider' />
            </label>
        </section>
    )
}

export default Cambio