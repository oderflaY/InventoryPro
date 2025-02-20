import { BrowserRouter, Routes, Route}  from 'react-router-dom'
import LoginView from './views/LoginView'
import RegisterView from './views/RegisterView'
import Homepage from './views/Homepage'
import AuthLayout from './layouts/AuthLayout'

export default function Router() {

    return(
        <BrowserRouter>
        <Routes>
            <Route element={<AuthLayout />}>
                <Route path='/auth/login' element={<LoginView/>}/>
                <Route path='/auth/register'element={<RegisterView/>}/>
            </Route>
            <Route>
                <Route path='/auth/homepage'element={<Homepage/>}/>
            </Route>
        </Routes>
        </BrowserRouter>
    )
}