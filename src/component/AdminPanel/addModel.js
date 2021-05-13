import React, { useState, useEffect} from "react";
import axios from "axios";


const AddModal=(props)=>{

    const [products,setProducts] = useState(props.data)

    const onHandler=(evt)=>{
        const value = evt.target.value;
        setProducts({
            ...products,
            [evt.target.name]: value
        });
    }

    useEffect(()=>{
        setProducts(props.data);
    }, [props.data])

    const postData= async (product)=>{
     await  axios.post("http://localhost:3000/api/products",product);
        window.location.reload(false);
    }


    const upgardePost = async (product)=>{
        await axios.put(`http://localhost:3000/api/products/${product._id}`, product);
        window.location.reload(false);
    }


    return(
        <form style={props.closed?{display:"block"}:{display:"none"}} className="form modals">
            <span id="close"  onClick={()=>props.open(false)}>X</span>
            <h3><span className="text-primary">NEW</span>Product </h3>
            <div className="form-group">
                <input value={products.compony_name} name="compony_name"  onChange={(e)=>onHandler(e)}  placeholder="CompanyName" className="form-control mb-3" />
                <input value={products.product_catogory} name="product_catogory"  onChange={(e)=>onHandler(e)}  placeholder="ProductCatogory" className="form-control mb-3" />
                <input value={products.product_name} name="product_name"  onChange={(e)=>onHandler(e)}  placeholder="ProductName" className="form-control mb-3" />
                <input value={products.product_img} name="product_img" onChange={(e)=>onHandler(e)}   placeholder="ProductImage" className="form-control mb-3" />
                <input value={products.product_real_link} name="product_real_link"  onChange={(e)=>onHandler(e)}  placeholder="ProductRealLink" className="form-control mb-3" />
                <textarea value={products.product_description} name="product_description"  onChange={(e)=>onHandler(e)} placeholder="ProductDescription" className="form-control mb-3" />
                <input value={products.product_price} name="product_price" placeholder="ProductPrice" onChange={(e)=>onHandler(e)}  className="form-control mb-3" />
                {
                    props.upgrade ? <button type="button" onClick={() => upgardePost(products)} className='btn btn-outline-primary'>UPGRADE</button>
                    :
                    <button type="button" onClick={() => postData(products)} className='btn btn-outline-primary'>ADD</button>                    
                }

            </div>
        </form>
    )
}

export default AddModal ;