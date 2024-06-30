import { Button, Col, Row, Typography } from "antd";
import { AddUserModal } from "./AddUserModal.jsx";
import userStore from "../store/User.js";
import { observer } from "mobx-react-lite";

export const Header = observer(() => {
    return (
        <Row>
            <AddUserModal />
            <Col span={12}>
                <Typography.Title level={3} style={{float: "left"}}>DummyJSON users</Typography.Title>
            </Col>
            <Col span={12} >
                <Button
                    style={{float: "right"}}
                    onClick={() => userStore.setIsModalOpen(true)}
                >
                    Create new user
                </Button>
            </Col>
        </Row>
    )
})