import {makeAutoObservable} from "mobx";


class UsersStore {
    users =[]

    constructor() {

        makeAutoObservable(this)
    }

    setUsers = (users) =>{
        this.users = users;
    }

}

const usersStore = new UsersStore();

export default usersStore