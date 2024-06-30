import {observer} from "mobx-react-lite";
import {Button, Card, Popconfirm} from "antd";
import Meta from "antd/es/card/Meta.js";
import {deleteUser} from "../api/index.js";
import usersStore from "../store/users.js";
import {DeleteOutlined,} from "@ant-design/icons";

export const UserCard = observer((props) => {
    const {
        user
    }= props

    return (
        <>
            <Card
                style={{
                    wordBreak:"break-all"
                }}
                hoverable

                cover={
                    <img
                        alt="example"
                        src={user.image}
                    />
                }
                actions={[
                    <Popconfirm
                        key={user.id}
                        placement="topRight"
                        title="Удалить пользователя"
                        description="Вы действительно хотите удалить пользователя?"
                        onConfirm={() =>{

                            deleteUser(user.id)

                            const newUsers = []
                            usersStore.users.map(currentUser => {
                                if (currentUser.id !== user.id) {
                                    newUsers.push(currentUser)
                                }
                            })
                            usersStore.setUsers(newUsers)
                        }}

                        okText="Да"
                        cancelText="Нет"
                    >
                        <Button
                            style={{padding:"5px"}}
                            key={user.id}
                            danger
                            type="primary"
                            icon={<DeleteOutlined />}
                        />
                    </Popconfirm>
                ]}
            >
                <Meta
                    title={user.firstName}

                />
                <p>{user.email}</p>
                <p>{user.phone}</p>
            </Card>
        </>
    )
})
