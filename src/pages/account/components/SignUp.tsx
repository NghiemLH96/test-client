import React from 'react'
import { apis } from '@service/apis';

export default function SignUp() {
    const handleCreate = async (e:React.FormEvent) =>{
        e.preventDefault();

        const newUserDetail={
            userName:(e.target as any).username.value,
            password:(e.target as any).pw.value,
            avatar:(e.target as any).avatar.value,
            email:(e.target as any).email.value
        }
        await apis.usersApiModule.createNew(newUserDetail)
        .then(()=>{
            alert("Created Done!")
        })
        .catch(err=>{
            console.log(err);
            alert("Create Failed")
        })
    }
    return (
        <div className='authBox'>
                <h2>Sign Up</h2>
                <form onSubmit={handleCreate} id='sign-up-form'>
                    <div className='info-field'>
                        <label htmlFor="username">UserName</label>
                        <input id="username" name='username' type="text" />
                    </div>
                    <div className='info-field'>
                        <label htmlFor="pw">Passwords</label>
                        <input id="pw" name='pw' type="password" />
                    </div>
                    <div className='info-field'>
                        <label htmlFor="avatar">Avatar</label>
                        <input id="avatar" name='avatar' type="text" value={"https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%2Fimages%3Fk%3Dno%2Bimage%2Bavailable&psig=AOvVaw3T9TtGgO8g0wPtYG7pNePP&ust=1703338227437000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCMDS_8GTo4MDFQAAAAAdAAAAABAE"}/>
                    </div>
                    <div className='info-field'>
                        <label htmlFor="pw">Email</label>
                        <input id="email" name='email' type="email" />
                    </div>
                    <button type='submit'>Sign Up</button>
                </form>
            </div>
    )
}
