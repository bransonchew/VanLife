import { useState } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import { loginUser } from '../api'


export async function loader({ request }) {

    console.log(request)

    const url = new URL(request.url)

    const searchParams = url.searchParams

    return searchParams.get('message')
}


export default function Login() {

    const [loginFormData, setLoginFormData] = useState({
        email: '',
        password: ''
    })

    const [status, setStatus] = useState('idle')
    const [error, setError] = useState(null)

    const message = useLoaderData()

    const navigate = useNavigate()

    async function handleSubmit(e) {

        e.preventDefault()

        console.log(loginFormData)

        setStatus('submitting')
        setError(null)

        try {

            const data = await loginUser(loginFormData)

            console.log('data', data)

            // navigate('/host', { replace: true })
            navigate(-1)

        } catch (err) {

            setError(err)

            console.error('error', err)

        } finally {

            setStatus('idle')

        }

    }

    function handleChange(e) {
        const { name, value } = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div className="login-container">
            <h1>Sign in to your account</h1>
            { error && <h3 className="red">{ error.message }</h3> }
            { message && <h3 className="red">{ message }</h3> }
            <form onSubmit={ handleSubmit } className="login-form">
                <input
                    name="email"
                    onChange={ handleChange }
                    type="email"
                    placeholder="Email address"
                    value={ loginFormData.email }
                />
                <input
                    name="password"
                    onChange={ handleChange }
                    type="password"
                    placeholder="Password"
                    value={ loginFormData.password }
                />
                <button disabled={ status === 'submitting' }>
                    { status === 'submitting' ? 'Logging in...' : 'Log in' }
                </button>
            </form>
        </div>
    )

}