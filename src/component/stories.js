import React from 'react';
import Story from "./story";

const Stories = () => {
    return (
        <div className="grid-container">
            <div className="grid-item main">
                <div className="items">
                    <Story />
                </div>
            </div>
        </div>
    );
};

export default Stories;