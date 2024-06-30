import {Input, Modal, Space} from "antd";
import userStore from "../store/User.js";
import {observer} from "mobx-react-lite";
import {message} from "antd/lib";


export const AddUserModal = observer(() => {
    const [messageApi, contextHolder] = message.useMessage();
    return (
        <>
            {contextHolder}
        <Modal
            centered
            title="Add new user" open={userStore.isModalOpen}
            onOk={() => {
                userStore.addNewUser()
                messageApi.open({
                    type: 'success',
                    content: 'New User Created',
                });

            }}
            onCancel={() => userStore.setIsModalOpen(false)}>

            <Space className="flex" direction="vertical">
                <Input
                    value={userStore.firstname}
                    onChange={(e) => userStore.setFirstname(e.target.value)}
                    placeholder="Enter Firstname" />
                <Input
                    value={userStore.email}
                    onChange={(e) => userStore.setEmail(e.target.value)}
                    placeholder="Enter Email" />


                <Input
                    value={userStore.phone}
                    onChange={(e) => userStore.setPhone(Number(e.target.value))}
                    type="number" placeholder="Enter Number" />
            </Space>
        </Modal>
        </>
    )
})
