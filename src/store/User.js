import {makeAutoObservable} from "mobx";
import {addUser} from "../api/index.js";
import usersStore from "./users.js";

class UserStore {


    isModalOpen = false;

    firstname = "";
    phone = 0;
    username = "";
    photolink = "";
    constructor() {
        makeAutoObservable(this)

    }

    setIsModalOpen = (isModalOpen) => {
        this.isModalOpen = isModalOpen
    }
    setFirstname = (firstname) => {
        this.firstname = firstname
    }

    setEmail = (email) => {
        this.email = email
    }

    setPhone = (phone) => {
        this.phone = phone
    }


    addNewUser = () => {
        addUser(this.firstname, this.email, this.phone).then(response =>{
            console.log(response)
            usersStore.setUsers([{
                firstName: this.firstname,
                email:this.email,
            },
                ...usersStore.users
            ])
            this.isModalOpen = false
            this.firstname = ""
            this.email = ""
            this.phone=""



        })
    }
}


const userStore = new UserStore()

export default userStore;