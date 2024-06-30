import { Col, Row} from "antd";


import usersStore from "../store/users.js";
import {observer} from "mobx-react-lite";

import {UserCard} from "./UserCard.jsx";


export const UsersList = observer(() => {
    return (
        <Row >
            {usersStore.users.map(user => (
                <Col span={8} key={user.id}>
                <Col style={{
                    margin:"10px"
                }}>
                    <UserCard
                        user={user}
                    />
                </Col>
                </Col>
            ))}
        </Row>

    )
})

