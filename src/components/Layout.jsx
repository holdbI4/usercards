import { Col, Row } from "antd";
import { Header } from "./Header.jsx";
import { observer } from "mobx-react-lite";

export const Layout = observer(({children}) => {

    return (
        <>
            <Row
                className="flex row-wrapper"
            >
                <Col xs={20} sm={18} md={16} lg={14} xl={8}>
                    <Header />
                    {children}
                </Col>
            </Row>
        </>
    )
});
