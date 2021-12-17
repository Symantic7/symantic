import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import ImgSearch from '../../assets/img/search.svg';

const SearchBox = () => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState();
    const inputSearch = event => {
        setSearch(event.target.value);
    };
    const submitAction = () => {
        dispatch(push('/search/?search=' + search));
    };
    return (
        <>
            <form onSubmit={submitAction} class="searchbox">
                <div class="searchbox m-15 searchpopup">
                    <input type="text" onChange={inputSearch} name="search" />
                    <img src={ImgSearch} alt="" />
                </div>
            </form>
        </>
    );
};

export default SearchBox;
