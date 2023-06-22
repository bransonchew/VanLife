import { redirect } from 'react-router-dom'


// export async function requireAuth() {
//
//     const isLoggedIn = false
//
//     if (!isLoggedIn) {
//         throw redirect('/login?message=You must be logged in first')
//     }
// }


export async function requireAuth() {
    const isLoggedIn = true

    if (!isLoggedIn) {
        const response = redirect('/login?message=You must be logged in first')
        response.body = true
        throw response
    }
    return null
}