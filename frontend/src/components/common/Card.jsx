import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavourite } from '../../reducks/favourites/operations';
import { getFavourites } from '../../reducks/favourites/selectors';
import Imgstar from '../../assets/img/star.png';
import ImgHeart from '../../assets/img/red_heart.svg';
const Card = ({ movie }) => {
    const dispatch = useDispatch();
    const clickFavourite = movie => {
        dispatch(addFavourite(movie));
    };
    const selector = useSelector(state => state);
    const favourites = getFavourites(selector);
    const [showLikeButton, setShowLikeButton] = useState(true);
    useEffect(() => {
        let favoriteMovie = favourites.filter(favourite => favourite.id == movie.id);
        if (favoriteMovie.length > 0) {
            setShowLikeButton(false);
        }
    }, [favourites]);
    return (
        <div class="card">
            <div class="cards m-10">
                <div className="movie">
                    <img className="cardimage" src={movie.image} alt="" />
                    <div className="movie-description">
                        <p>{movie.description}</p>
                    </div>
                </div>
                <div class="carddetails">
                    <p>{movie.name}</p>
                    <div class="row space-between">
                        <div>
                            <img src={Imgstar} alt="" />
                            <span>{movie.rating}</span>
                            <span class="dark">/10</span>
                        </div>
                        {/* <div class="trailer-row">
                            <img src="images/arrow.svg" alt="" />
                            <a class ="trailer-link" href={movie.trailer_link} target="_blank"><div class="btn-text">&#9655; Trailer</div></a>
                        </div> */}
                        <button class="trailer">
                            <img src="images/arrow.svg" alt="" />
                            <a class="trailer-link" href={movie.trailer_link} target="_blank">&#9655; Trailer</a> 
                        </button>
                    </div>
                </div>
                {showLikeButton && (
                    <div
                        class="like"
                        onClick={() => {
                            clickFavourite(movie);
                        }}
                    >
                        <img src={ImgHeart} alt="" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Card;
