import React from 'react';
import Imglogo from '../../assets/img/logo.png';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

const Footer = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <footer>
                <div class="m-20">
                    <hr />
                    <img src={Imglogo} onClick={() => dispatch(push('/'))} alt="" />
                </div>
            </footer>
        </div>
    );
};

export default Footer;
