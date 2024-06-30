import { useEffect } from "react";
import { getAllUsers } from "../api/index.js";
import { UsersList } from "../components/UsersList/UsersList.jsx";
import { Layout } from "../components/Layout.jsx";
import { observer } from "mobx-react-lite";
import usersStore from "../store/users.js";

export const Home = observer(() => {
    useEffect(() => {
        getAllUsers().then(response => usersStore.setUsers((response.users)))
    }, []);

    return (
        <Layout>
            {/*<Detailmodal*/}
            {/*    setIsModalOpen={setIsModalOpen}*/}
            {/*    isModalOpen={isModalOpen}*/}
            {/*    singleUser={singleUser}*/}
            {/*    setSingleUser={setSingleUser}*/}
            {/*/>*/}


            <UsersList />
        </Layout>
    );

});
