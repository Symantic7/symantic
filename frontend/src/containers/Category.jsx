import React, { useEffect, useState } from 'react';
import API from '../API';
import Card from '../components/common/Card';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
const api = new API();
const Category = () => {
    const [categoryAction, setCategoryAction] = useState(null);
    const [categoryComedy, setCategoryComedy] = useState(null);
    const [categoryDrama, setCategoryDrama] = useState(null);
    const [categoryHorror, setCategoryHorror] = useState(null);
    useEffect(() => {
        api.getMovies({ category_id: '1' })
            .then(movies => {
                setCategoryAction(movies);
            })
            .catch(error => {
                alert('Failed to connect API: /movies/');
            });
        api.getMovies({ category_id: '2' })
            .then(movies => {
                setCategoryComedy(movies);
            })
            .catch(error => {
                alert('Failed to connect API: /movies/');
            });
        api.getMovies({ category_id: '3' })
            .then(movies => {
                setCategoryDrama(movies);
            })
            .catch(error => {
                alert('Failed to connect API: /movies/');
            });
        api.getMovies({ category_id: '4' })
            .then(movies => {
                setCategoryHorror(movies);
            })
            .catch(error => {
                alert('Failed to connect API: /movies/');
            });
    }, []);
    return (
        <>
            <Header />
            <section class="content">
                <div class="pt">
                    <h1 id="actions" class="section-heading m-20 p-10">
                        Actions
                    </h1>
                </div>
                {categoryAction && categoryAction.results.length > 0 ? (
                    <div class="grid">
                        {categoryAction.results.map(movie => (
                            <Card movie={movie} />
                        ))}
                    </div>
                ) : (
                    <div class="no-post">
                        <p>No movies here yet...</p>
                    </div>
                )}
                <hr class="divider" />
                <h1 id="comedy" class="section-heading m-20">
                    Comedy
                </h1>
                {categoryComedy && categoryComedy.results.length > 0 ? (
                    <div class="grid">
                        {categoryComedy.results.map(movie => (
                            <Card movie={movie} />
                        ))}
                    </div>
                ) : (
                    <div class="no-post">
                        <p>No movies here yet...</p>
                    </div>
                )}
                <hr class="divider" />
                <h1 id="drama" class="section-heading m-20">
                    Drama
                </h1>
                {categoryDrama && categoryDrama.results.length > 0 ? (
                    <div class="grid">
                        {categoryDrama.results.map(movie => (
                            <Card movie={movie} />
                        ))}
                    </div>
                ) : (
                    <div class="no-post">
                        <p>No movies here yet...</p>
                    </div>
                )}

                <hr class="divider" />
                <h1 id="horror" class="section-heading m-20">
                    Horror
                </h1>

                {categoryHorror && categoryHorror.results.length > 0 ? (
                    <div class="grid">
                        {categoryHorror.results.map(movie => (
                            <Card movie={movie} />
                        ))}
                    </div>
                ) : (
                    <div class="no-post">
                        <p>No movies here yet...</p>
                    </div>
                )}
            </section>
            <Footer />
        </>
    );
};

export default Category;
