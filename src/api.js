import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore'
import { db } from './firebaseConfig'


const vansCollectionRef = collection(db, 'vans')


export async function getVans() {

    const querySnapshot = await getDocs(vansCollectionRef)

    return querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
}


export async function getVan(id) {

    const docRef = doc(db, 'vans', id)
    const docSnap = await getDoc(docRef)

    if (!docSnap.exists()) {
        // Do something
    }

    return { ...docSnap.data(), id: docSnap.id }
}


export async function getHostVans() {

    const q = query(
        vansCollectionRef,
        where('hostId', '==', '123')
    )
    const querySnapshot = await getDocs(q)

    return querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
}


export async function loginUser(creds) {

    const user = {
        id: '123',
        email: 'b@b.com',
        password: 'p123',
        name: 'Bob'
    }

    if (creds.email !== user.email || creds.password !== user.password) {
        throw {
            message: 'No user with those credentials found!',
            statusText: '',
            status: 401
        }
    }

    localStorage.setItem('loggedIn', 'true')

    return user

    // const res = await fetch('/api/login',
    //     { method: 'post', body: JSON.stringify(creds) }
    // )
    // const data = await res.json()
    //
    // if (!res.ok) {
    //     throw {
    //         message: data.message,
    //         statusText: res.statusText,
    //         status: res.status
    //     }
    // }
}


// export async function getVans(id) {
//     const url = id ? `/api/vans/${ id }` : '/api/vans'
//     const res = await fetch(url)
//     if (!res.ok) {
//         throw {
//             message: 'Failed to fetch vans',
//             statusText: res.statusText,
//             status: res.status
//         }
//     }
//     const data = await res.json()
//     return data.vans
// }


// export async function getHostVans(id) {
//     const url = id ? `/api/host/vans/${ id }` : '/api/host/vans'
//     const res = await fetch(url)
//     if (!res.ok) {
//         throw {
//             message: 'Failed to fetch vans',
//             statusText: res.statusText,
//             status: res.status
//         }
//     }
//     const data = await res.json()
//     return data.vans
// }


// export async function setVans() {
//
//     const data = [
//         {
//             id: '1',
//             name: 'Modest Explorer',
//             price: 60,
//             description: 'The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!',
//             imageUrl: 'https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png',
//             type: 'simple',
//             hostId: '123'
//         },
//         {
//             id: '2',
//             name: 'Beach Bum',
//             price: 80,
//             description: 'Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won\'t find in an ordinary camper.',
//             imageUrl: 'https://assets.scrimba.com/advanced-react/react-router/beach-bum.png',
//             type: 'rugged',
//             hostId: '123'
//         },
//         {
//             id: '3',
//             name: 'Reliable Red',
//             price: 100,
//             description: 'Reliable Red is a van that was made for travelling. The inside is comfortable and cozy, with plenty of space to stretch out in. There\'s a small kitchen, so you can cook if you need to. You\'ll feel like home as soon as you step out of it.',
//             imageUrl: 'https://assets.scrimba.com/advanced-react/react-router/reliable-red.png',
//             type: 'luxury',
//             hostId: '456'
//         },
//         {
//             id: '4',
//             name: 'Dreamfinder',
//             price: 65,
//             description: 'Dreamfinder is the perfect van to travel in and experience. With a ceiling height of 2.1m, you can stand up in this van and there is great head room. The floor is a beautiful glass-reinforced plastic (GRP) which is easy to clean and very hard wearing. A large rear window and large side windows make it really light inside and keep it well ventilated.',
//             imageUrl: 'https://assets.scrimba.com/advanced-react/react-router/dreamfinder.png',
//             type: 'simple',
//             hostId: '789'
//         },
//         {
//             id: '5',
//             name: 'The Cruiser',
//             price: 120,
//             description: 'The Cruiser is a van for those who love to travel in comfort and luxury. With its many windows, spacious interior and ample storage space, the Cruiser offers a beautiful view wherever you go.',
//             imageUrl: 'https://assets.scrimba.com/advanced-react/react-router/the-cruiser.png',
//             type: 'luxury',
//             hostId: '789'
//         },
//         {
//             id: '6',
//             name: 'Green Wonder',
//             price: 70,
//             description: 'With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that\'s perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.',
//             imageUrl: 'https://assets.scrimba.com/advanced-react/react-router/green-wonder.png',
//             type: 'rugged',
//             hostId: '123'
//         }
//     ]
//
//     for (const van of data) {
//
//         const id = van.id
//
//         delete van.id
//
//         console.log(van)
//
//         await setDoc(doc(db, 'vans', id), van)
//
//     }
//
// }
