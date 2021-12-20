import React, { useState } from 'react';
import Imgmenu from '../../assets/img/menu.svg';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
const MenuIcon = () => {
    const dispatch = useDispatch();
    const [rotateMenu, setRotateMenu] = useState(false);
    const handleRotate = () => setRotateMenu(!rotateMenu);
    const rotate = rotateMenu ? 'rotate(90deg)' : 'rotate(0)';
    return (
        <>
            <img
                class="sp-menu"
                src={Imgmenu}
                style={{ transform: rotate, transition: 'all 0.1s linear' }}
                onClick={handleRotate}
            />
            {rotate == 'rotate(90deg)' ? (
                <div className="togglemenu">
                    <div class="favourites m-15 row" onClick={() => dispatch(push('/favourites'))}>
                        <div class="p-10">Favourites</div>
                    </div>
                    <div class="category m-15 row">
                        <div class="p-10" onClick={() => dispatch(push('/category#actions'))}>
                            Action
                        </div>
                    </div>
                    <div class="category m-15 row">
                        <div class="p-10" onClick={() => dispatch(push('/category#comedy'))}>
                            Comedy
                        </div>
                    </div>
                    <div class="category m-15 row">
                        <div class="p-10" onClick={() => dispatch(push('/category#drama'))}>
                            Drama
                        </div>
                    </div>
                    <div class="category m-15 row">
                        <div class="p-10" onClick={() => dispatch(push('/category#horror'))}>
                            Horror
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    );
};

export default MenuIcon;
