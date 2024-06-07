import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Modal = () => {
    const [modal, setModal] = useState("")
    const nav = useNavigate()
    function getModal() {
        if(modal == "123" ){
            nav("/Obj   ")
        }
        else{
            alert("Не правильный пароль")
        }
    }
    return (
        <div id='modal'>
            <div className="container">
                <div className="modal">
                <input type="text" onKeyDown={(e) => {
                    if(e.key === "Enter"){
                        nav("/Obj")
                    }
                }} onChange={(e) => setModal(e.target.value)} placeholder='Password'/>
                <button onClick={getModal}>Подтвердить</button>
                </div>
            </div>
            
        </div>
    );
};

export default Modal;