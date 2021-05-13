import React from 'react';
import { connect } from "react-redux";
import { filterProductForBrend, getAll, filterForPrice } from "../redux/actions";
import { useParams } from "react-router-dom";


const brends = [{
    _id: 0,
    name: "McDonald's",
    value: true
}, {
    _id: 1,
    name: "PizzaHuts",
    value: true

}, {
    _id: 2,
    name: "StarBukcs",
    value: true
}, {
    _id: 3,
    name: "YushiSushi",
    value: true

}, {
    _id: 4,
    name: "KFC",
    value: true

}, {
    _id: 5,
    name: "papajohns",
    value: true
},{
    _id:6,
    name:"All",
    value:true
}];

const prices = [{
    _id: 0,
    title: "From High",
    option: "higher",
    value: true
}, {
    _id: 1,
    title: "From Low",
    option: "lower",
    value: true
}
]


const FilterPanel = (props) => {

    const {brend} = useParams();

    const filt = (id) => {
        let value = brends[id].value;
        let names = brends[id].name;
        if (value === true) {
            props.filterProductForBrend(props.data,names);
            brends[id].value = false;
        }
        else {
            props.getAll(brend);
            brends[id].value = true;
        }
    }

    const filterForPrice = (id) => {
        let value = prices[id].value;
        if (value === true) {
            console.log(prices[id]);
            props.filterForPrice(props.data, "lower");
            prices[id].value = false;
        }
        else {
            props.getAll(brend);
            prices[id].value = true;
        }
    }

console.log(props.data)
    return (
        <div className="col-md-2 d-md-block d-none">
            <h3>{props.data.length} Results</h3>
            <article>
                <hr />
                <h3>
                    Brend
                </h3>
                {
                    brends.map(brend => (
                        <div key={brend._id}>
                            <label>
                                <input onChange={() => { filt(brend._id) }} style={{ display: "none" }} type="checkbox" />
                                <span className="src-filter">{brend.name}</span>
                            </label>
                        </div>
                    ))
                }
            </article>
            <hr />
            <article>
                <h3>
                    Prices
                </h3>
                {
                    prices.map(price => (
                        <div key={price._id}>
                            <label >
                                <input onChange={() => { filterForPrice(price._id) }} style={{ display: "none" }} type="checkbox" />
                                <span className="src-filter">{price.title}</span>
                            </label>
                        </div>
                    ))
                }
            </article>
            <hr />
        </div>
    );
};



const mapStateToProps = (state) => {
    return {
        data: state.Productive.fs
    }
}

export default connect(
    mapStateToProps,
    { filterProductForBrend, getAll, filterForPrice })
    (FilterPanel);