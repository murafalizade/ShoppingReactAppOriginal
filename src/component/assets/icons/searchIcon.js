import React from 'react';

const SearchIcon = () => {
    return (
        <svg style={{position:"absolute",top:"15px",left:"35px"}} width="24" id="searchicon" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.5">
                <path 
                    d="M5.1905 16.5C3.83275 15.0663 3 13.1304 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11C19 15.4183 15.4183 19 11 19C9.9391 19 8.92643 18.7935 8 18.4185"
                    stroke="#0C0D1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                </path>
                <path d="M21 21L16.65 16.65" stroke="#0C0D1E" strokeWidth="2" strokeLinecap="round"
                    strokeLinejoin="round"></path>
            </g>
        </svg>
    );
};

export default SearchIcon;