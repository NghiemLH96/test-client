import React from 'react'
import { apis } from '@service/apis'

export default function SignIn() {
    const handleLogin = async (e:React.FormEvent) => {
        e.preventDefault()
        const loginDetail = {
            username:(e.target as any).username.value,
            password:(e.target as any).password.value
        }
        await apis.usersApiModule.login(loginDetail as any)
        .then(res=>{
            alert((res as any).data.message)
        })
        .catch(err=>{
            alert((err as any).data.message)
        })
    }
    return (
        <div className='authBox'>
            <h2>Sign In</h2>
            <form onSubmit={handleLogin} id='sign-up-form'>
                <div className='info-field'>
                    <label htmlFor="username">UserName</label>
                    <input id="username" name='username' type="text" />
                </div>
                <div className='info-field'>
                    <label htmlFor="pw">Passwords</label>
                    <input id="pw" name='pw' type="password" />
                </div>
                <button type='submit'>Sign In</button>
            </form>
        </div>
    )
}
