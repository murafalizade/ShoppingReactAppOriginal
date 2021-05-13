import React from 'react';
import CardImg from './card-img';
import CardImgRight from './card-img-right';
import { useState } from "react";

const BigBoard = () => {
    const [data] = useState(["https://statickfc.cdnvideo.ru/products/medium/product_1688_1060593226.png", "https://content.sbuxtr.com/images/f9bee255-ff95-4546-8f03-31e0e703f1aa.png", "https://www.pizzahut.com.tr/CMSFiles/Product/LittleImage/tek-menu_637483921380856622.jpg", "https://www.papajohns.az/uploads/images/banners/Su%20%C3%87%C9%99r%C5%9F%C9%99nb%C9%99si/banner--su-chershenbe%20sayt.jpg"])
    const [gifs] = useState(["https://media1.tenor.com/images/e91d33212ff2012f9377cfd08ab8faa0/tenor.gif", "https://media1.tenor.com/images/3ea3958910c9668282e05ea595601b9a/tenor.gif", "https://media.tenor.com/images/6401eacd151b4c66e33a132404f6fea8/tenor.gif","https://media1.tenor.com/images/ee4e305ae15172523828711b2f590a2b/tenor.gif"])
    return (
        <>
            <div className="col-xl-7 col-12">
                {
                    data.map(img => (
                        <a href="https://kfc-az.com/menu/1688"><CardImg imgsrc={img} /></a>
                    ))
                }
            </div>
            <div className="col-xl-5 col-6">
                {
                    gifs.map(img => (
                        <CardImgRight  imgsrc={img}/>
                    ))
                }
            </div>
        </>
    );
};

export default BigBoard;