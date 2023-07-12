import { redirect } from 'react-router-dom'


export async function requireAuth(request) {

    const isLoggedIn = localStorage.getItem('loggedIn')

    if (!isLoggedIn) {

        let message = 'You must be logged in first'

        let pathname = new URL(request.url).pathname

        throw redirect(`/login?message=${ message }&redirect=${ pathname }`)

        // hacky code
        // const response = redirect(
        //     `/login?message=${ message }&redirect=${ pathname }`
        // )
        // response.body = true
        // throw response
    }

    return null
}