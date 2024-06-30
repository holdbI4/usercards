import { makeAutoObservable } from "mobx";
import { toJS } from 'mobx'

class UsersStore {
    users = [];

    constructor() {
        makeAutoObservable(this)
    }

    getUsers() {
        return toJS(this.users);
    }

    setUsers = (users) =>{
        this.users = users;
    }

}

const usersStore = new UsersStore();

export default usersStore