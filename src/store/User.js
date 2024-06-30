import { makeAutoObservable } from "mobx";
import { addUser } from "../api/index.js";
import usersStore from "./users.js";

class UserStore {
    isModalOpen = false;
    firstname = "";
    phone = "";
    email = "";
    username = "";

    constructor() {
        makeAutoObservable(this)
    }

    setIsModalOpen(isModalOpen) {
        this.isModalOpen = isModalOpen
    }

    setFirstname(firstname) {
        this.firstname = firstname
    }

    setEmail(email) {
        this.email = email
    }

    setPhone(phone) {
        this.phone = phone
    }

    clearUserData() {
        this.isModalOpen = false
        this.firstname = ""
        this.email = ""
        this.phone = ""
    }

    addNewUser(){
        addUser(this.firstname, this.email, this.phone).then(data =>{
            const { firstName, email, phone } = data;

            const newUser = {
                id: Date.now(),
                firstName,
                email,
                phone,
                image: "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp"
            };

            usersStore.setUsers([
                newUser,
                ...usersStore.users
            ]);

            this.clearUserData();
        })
    }
}


const userStore = new UserStore()

export default userStore;