import React from 'react';
import Imgstar from '../../assets/img/star.png';
import ImgHeart from '../../assets/img/red_heart.svg';
import { useDispatch } from 'react-redux';
import { deleteFavourite } from '../../reducks/favourites/operations';

const FavCard = ({ favourite }) => {
    const dispatch = useDispatch();
    return (
        <div class="card">
            <div class="cards m-10">
                <img class="cardimage" src={favourite.image} alt="" />
                <div class="carddetails">
                <p>{favourite.name}</p>
                    <div class="row space-between">
                        <div>
                            <img src={Imgstar} alt="" />
                            <span>{favourite.rating}</span>
                            <span class="dark">/10</span>
                        </div>
                        <button class="trailer">
                            <img src="images/arrow.svg" alt="" />
                            <a class="trailer-link" href={favourite.trailer_link} target="_blank">&#9655; Trailer</a> 
                        </button>
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
