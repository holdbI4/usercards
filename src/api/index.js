import { toast } from "react-toastify";


export const getAllUsers = async () => {
    try {
        const response = await fetch('https://dummyjson.com/users')

        if (response.ok){
            return await response.json()
        }

    } catch (e) {
        toast.error(e.message);
    }
}

export const getSingleUser = async (userId) => {
    try {
        const response = await fetch(`https://dummyjson.com/users/${userId}`);

        if (response.ok){
            return await response.json()
        }
    } catch (e) {
        toast.error(e.message);
    }
}

export const deleteUser = async (userId) => {
    try {
        const response = await fetch(`https://dummyjson.com/users/${userId}`, {
            method: 'DELETE',
        });

        if (response.ok){
            return await response.json()
        }
    } catch (e) {
        toast.error(e.message);
    }
}

export const addUser = async (firstName, email, phone) =>{
    try {
        const response = await fetch('https://dummyjson.com/users/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                firstName,
                email,
                phone,
            })
        });

        if (response.ok){
            return await response.json()
        }
    } catch (e) {
        toast.error(e.message);
    }
}