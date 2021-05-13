import React from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';

const Story = () => {
    return (
        <ScrollContainer activationDistance	={1} className="scroll-container">
            <a className="d-inline" href="/products/McDonald's"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/1170px-McDonald%27s_Golden_Arches.svg.png" alt="mc logo" className="circle" /></a>
            <a className="d-inline" href="/products/papajohns"><img src="https://www.papajohns.az/img/content/pj_logo_web_new.png" alt="mc logo" className="circle" /></a >
            <a className="d-inline" href="/products/KFC"><img src="https://upload.wikimedia.org/wikipedia/az/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png" alt="mc logo" className="circle" /></a >
            <a className="d-inline" href="/products/YushiSushi"><img src="https://menyum.az/uploads/restaurant_img/431377.jpg" alt="mc logo" className="circle" /></a >
            <a className="d-inline" href="/products/mc"><img src="https://upload.wikimedia.org/wikipedia/sco/thumb/d/d2/Pizza_Hut_logo.svg/1200px-Pizza_Hut_logo.svg.png" alt="pizzahutlog" className="circle" /></a >
            <a className="d-inline" href="/products/Starbucks"><img src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png" alt="strabuckslog" className="circle" /></a >
            </ScrollContainer>
    );
};

export default Story;