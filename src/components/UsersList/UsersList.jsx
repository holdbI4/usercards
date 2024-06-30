import { Col, Row} from "antd";
import { observer } from "mobx-react-lite";
import { UserCard } from "../UserCard/UserCard.jsx";
import usersStore from "../../store/users.js";
import cls from "../UserCard/UserCard.module.css";


export const UsersList = observer(({ handleClick }) => {
    const users = usersStore.getUsers();

    return (
        <Row >
            {users.map(user => {
                return (
                    <Col
                        xs={24} sm={12} md={12} lg={8}
                        span={8}
                        key={user.id}
                        className={cls.userCardOuterCol}
                    >
                        <Col className={cls.userCardInnerCol} style={{
                            margin:"10px"
                        }}>
                            <UserCard
                                className={cls.userCardItem}
                                user={user}
                            />
                        </Col>
                    </Col>
                );
            })}
        </Row>

    )
})

