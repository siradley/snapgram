import './globals.css'
import { Routes, Route } from 'react-router-dom'
import AuthLayout from './_auth/AuthLayout'
import RootLayout from './_root/RootLayout'
import LoginForm from './_auth/forms/LoginForm'
import RegisterForm from './_auth/forms/RegisterForm' // can put like { Home } below if you define something in index.ts maybe?
import { Home } from './_root/pages'

const App = () => {
    return (
        <main className="flex h-screen">
            <Routes>
                {/* public routes */}
                <Route element={<AuthLayout />} >
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/register" element={<RegisterForm />} />
                </Route>
                
                {/* private routes */}
                <Route element={<RootLayout />} >
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </main>
    )
}

export default App