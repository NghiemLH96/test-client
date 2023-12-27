import Home from '@pages/home/Home'
import About from '@pages/about/About'
import SignAuthen from '@pages/account/SignAuthen'
import SignIn from '@pages/account/components/SignIn'
import SignUp from '@pages/account/components/SignUp'
import { BrowserRouter , Routes , Route } from 'react-router-dom'


export default function MainRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}>
                <Route path='about' element={<About/>}></Route>
            </Route>
            <Route path='/account/auth' element={<SignAuthen/>}>
                <Route path='sign-in' element={<SignIn/>}></Route>
                <Route path='sign-up' element={<SignUp/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
