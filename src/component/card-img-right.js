import React from 'react';

const CardImgRight = ({imgsrc}) => {
    return (
        <div className="img-card right">
            <img style={{width:"270px",height:"270px",borderRadius:"0.8rem"}} src={imgsrc} alt="gif" />
        </div>
    );
};

export default CardImgRight;