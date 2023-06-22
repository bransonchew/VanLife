import { Form, redirect, useActionData, useLoaderData, useNavigation } from 'react-router-dom'
import { loginUser } from '../api'


export async function loader({ request }) {

    const searchParams = new URL(request.url).searchParams

    return searchParams.get('message')
}


export async function action({ request }) {

    // Get data in form
    const formData = await request.formData()
    const email = formData.get('email')
    const password = formData.get('password')

    // Authenticate user & error handling
    try {
        const auth = await loginUser({ email, password })
    } catch (err) {
        return err
    }

    // Redirect user to original desired destination
    const searchParams = new URL(request.url).searchParams
    const path = searchParams.get('redirect') || '/host'

    // hacky code
    const response = redirect(path)
    response.body = true
    throw response

    // return redirect(path)
}


export default function Login() {

    const navigation = useNavigation()
    const message = useLoaderData()
    const error = useActionData()

    return (
        <div className="login-container">
            <h1>Sign in to your account</h1>
            { error && <h3 className="red">{ error.message }</h3> }
            { message && <h3 className="red">{ message }</h3> }
            <Form method="post" replace className="login-form">
                <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                />
                <button disabled={ navigation.state === 'submitting' }>
                    { navigation.state === 'submitting' ? 'Logging in...' : 'Log in' }
                </button>
            </Form>
        </div>
    )
}