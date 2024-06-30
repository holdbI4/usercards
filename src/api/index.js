import {toast} from "react-toastify";


export const getAllUsers = async () => {
    try {

        const response = await fetch('https://dummyjson.com/users')
        if (response.ok){
            return await response.json()
        }

    }
    catch (e){
        toast.error(e.message)
    }

}

export const getSingleUser = (userId) => {
    return fetch(`https://dummyjson.com/users/${userId}`)
        .then(res => res.json())
}

export const deleteUser = (userId) => {
    return fetch(`https://dummyjson.com/users/${userId}`, {
        method: 'DELETE',
    })
        .then(res => res.json())
}

export const addUser = (firstname, email, phone) =>{
    return fetch('https://dummyjson.com/users/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            firstname,
            email,
            phone,
        })
    })
        .then(res => res.json())
}