import React from 'react';
import Imgstar from '../../assets/img/star.png';
import ImgHeart from '../../assets/img/red_heart.svg';
import { useDispatch } from 'react-redux';
import { deleteFavourite } from '../../reducks/favourites/operations';

const FavCard = ({ favourite }) => {
    const dispatch = useDispatch();
    return (
        <div>
            <div class="cards m-10">
                <img class="cardimage" src={favourite.image} alt="" />
                <div class="carddetails">
                    <div class="row space-between">
                        <div>
                            <img src={Imgstar} alt="" />
                            <span>4.6</span>
                            <span class="dark">/5</span>
                        </div>
                        <div class="trailer row">
                            <img src="images/arrow.svg" alt="" />
                            <div class="btn-text">Trailer</div>
                        </div>
                    </div>
                </div>
                <div class="like" onClick={() => dispatch(deleteFavourite(favourite.id))}>
                    <img src={ImgHeart} alt="" />
                </div>
            </div>
        </div>
    );
};

export default FavCard;
