import {Modal, Image, Button} from "antd";

export const Detailmodal = ({singleUser, isModalOpen,setIsModalOpen, setSingleUser}) => {
    return (
        <Modal title={"@"+ singleUser.username} open={isModalOpen}
               footer={[]}
               onOk={() => setIsModalOpen(false)}
               onCancel={() => {
                   setIsModalOpen(false)
                   setSingleUser({})
               }}>
            <Image
                preview={false}
                width={"100%"}
                src={singleUser.image}
            />
            <b>First Name:</b> <p>{singleUser.firstName}</p>
            <b>Last Name:</b> <p>{singleUser.lastName}</p>
            <b>Age :</b> <p>{singleUser.age}</p>
        </Modal>
    )
}