import React from 'react'
import SignUp from './SignUp'
import LoginPage from './LoginPage'
import CompleteRegistrationForm from "./CompleteAccountForm"

export default function RegistrationLayout({ children }) {
    return (
    <div>
        <main>
        <LoginPage />
        {/* <SignUp /> */}
        {/* <CompleteRegistrationForm /> */}
            {children}
        </main>
    </div>
  )
}
