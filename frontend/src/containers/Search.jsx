import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import queryString from 'query-string';
import { getMovies } from '../reducks/movies/selectors';
import { fetchMovies } from '../reducks/movies/operations';
import Card from '../components/common/Card';

const Search = () => {
    const parsed = queryString.parse(window.location.search);
    const [search, setSearch] = useState(null);
    const [category, setCategory] = useState(null);
    const [release_type, setRelease_type] = useState(null);
    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    const movies = getMovies(selector);
    useEffect(() => {
        if (parsed.search !== undefined) {
            setSearch(parsed.search);
        }
        if (parsed.category !== undefined) {
            setCategory(parsed.category);
        }
        if (parsed.release_type !== undefined) {
            setCategory(parsed.release_type);
        }
        if (search != null || category != null || release_type != null) {
            let params = { search: search, category: category, release_type: release_type };
            dispatch(fetchMovies(params));
        }
    }, [search, category]);
    return (
        <>
            <Header />
            <section class="content">
                <div class="pt">
                    <h1 class="section-heading m-20 p-10">Search</h1>
                </div>
                {console.log(movies)}
                <div class="grid">
                    {movies.results.map(movie => (
                        <Card movie={movie} />
                    ))}
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Search;
