import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import ImgCover from '../assets/img/coverImage.png';
import ImgButton from '../assets/img/button1.png';
import Imgbutton from '../assets/img/sp-cover.png';
import { getMovies } from '../reducks/movies/selectors';
import queryString from 'query-string';
import API from '../API';
import Card from '../components/common/Card';

const api = new API();
const Home = () => {
    const parsed = queryString.parse(window.location.search);
    const [moviesComingSoon, setMoviesCommingSoon] = useState(null);
    const [moviesNewReleased, setMoviesNewReleased] = useState(null);
    const selector = useSelector(state => state);
    const movies = getMovies(selector);

    useEffect(() => {
        api.getMovies({ release_type: 'Coming Soon' })
            .then(movies => {
                setMoviesCommingSoon(movies);
            })
            .catch(error => {
                alert('Failed to connect API: /movies/');
            });
        api.getMovies({ release_type: 'Newly Released' })
            .then(movies => {
                setMoviesNewReleased(movies);
            })
            .catch(error => {
                alert('Failed to connect API: /movies/');
            });
    }, []);
    return (
        <>
            <Header />
            <section class="cover">
                <div class="gradient">
                    <div class="coverdetails m-25">
                        <div class="row sp-coverdetails">
                            <div class="trailer-btn m-10 row">
                                <a href="https://www.youtube.com/watch?v=N_gD9-Oa0fg&ab_channel=JamesBond007" target="_blank">
                                    <img src={ImgButton} alt="" />
                                </a>
                                <div class="p-10">
                                    <a href="https://www.youtube.com/watch?v=N_gD9-Oa0fg&ab_channel=JamesBond007" target="_blank">
                                        Watch Trailer
                                    </a>
                                </div>
                            </div>
                            <div class="m-10">
                                In theaters
                                <p class="date">April 2020</p>
                                
                            </div>
                        </div>
                        <div class="banner-text">
                            <p>
                                James Bond has left active service. His peace is short-lived when Felix Leiter, an old
                                friend from the CIA, turns up asking for help, leading Bond onto the trail of a
                                mysterious villain armed with dangerous new technology.
                            </p>
                        </div>
                    </div>
                </div>
                <img src={ImgCover} alt="" class="backgroundcover" />
                <img src={Imgbutton} class="sp-backgroundcover" alt="" />
            </section>
            <section class="content">
                <h1 class="section-heading m-20">Newly Released</h1>
                {moviesNewReleased && moviesNewReleased.results.length > 0 ? (
                    <div class="grid">
                        {moviesNewReleased.results.map(movie => (
                            <Card movie={movie} />
                        ))}
                    </div>
                ) : (
                    <div class="no-post">
                        <p>No movies available at this time.</p>
                    </div>
                )}

                <hr class="divider" />

                <h1 class="section-heading m-20 ">Coming Soon</h1>
                {moviesComingSoon && moviesComingSoon.results.length > 0 ? (
                    <div class="grid">
                        {moviesComingSoon.results.map(movie => (
                            <Card movie={movie} />
                        ))}
                    </div>
                ) : (
                    <div class="no-post">
                        <p>No movies available at this time.</p>
                    </div>
                )}
            </section>
            <Footer />
        </>
    );
};

export default Home;
