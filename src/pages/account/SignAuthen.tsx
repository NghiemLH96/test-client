import './SignAuth.scss'
import { Outlet } from 'react-router-dom'

export default function SignAuthen() {
    return (
        <div className='authPage'>
            <Outlet/>
        </div>
    )
}
