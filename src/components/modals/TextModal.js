import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'antd';


const TextModal = ({isVisible,isHide}) => {


    const isModalVisible = isVisible;
    

    

    const handleOk = () => {
        console.log('handle ok');
        isHide();
    };
    
    const handleCancel = () => {
        console.log('handle cancel');
        isHide();
    };

    return (
        <>
        <Modal title="Create a Text Post" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <textarea className="w-full" rows="10"></textarea>
        </Modal>
        </>
    )
}

export default TextModal