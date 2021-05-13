import React, { PureComponent } from 'react'
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import AddModal from "./addModel";

export class DashBoard extends PureComponent {

    constructor(props) {
        super(props)

        this.state = {
            offset: 0,
            tableData: [],
            orgtableData: [],
            perPage: 11,
            currentPage: 0,
            close:false,
            currentData: {
                compony_name: "",
                product_catogory: "",
                product_name: "",
                product_img: "",
                product_real_link: "",
                product_alt: "",
                product_description: "",
                product_price: 0
            },
            upgrade:false
        }
        this.handlePageClick = this.handlePageClick.bind(this);
    }

    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.loadMoreData()
        });

    };

    loadMoreData() {
        const data = this.state.orgtableData;

        const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
        this.setState({
            pageCount: Math.ceil(data.length / this.state.perPage),
            tableData: slice
        })

    }

    componentDidMount() {
        this.getData();
    }

    dataDelete = async (id)=>{
        await axios.delete(`/api/v1/products:${id}`);
        window.location.reload(false);
    }

    getData() {
        axios
            .get(`/api/v1/products`)
            .then(res => {

                var data = res.data;
                var slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
                this.setState({
                    pageCount: Math.ceil(data.length / this.state.perPage),
                    orgtableData: res.data,
                    tableData: slice
                })
            });
    }


    closeModal=(value)=>{
        this.setState({close:value});
        if(!value){
            this.setState({ upgrade: false });
            this.setState({currentData: {
                    compony_name: "",
                    product_catogory: "",
                    product_name: "",
                    product_img: "",
                    product_real_link: "",
                    product_alt: "",
                    product_description: "",
                    product_price: 0
                }})
        }
    }

    render() {
        return (
            <div className="mains">
                <AddModal upgrade={this.state.upgrade} data={this.state.currentData} closed={this.state.close} open={this.closeModal} />
                <table border="1" className="table">
                    <thead>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>IMAGE</th>
                        <th>COMPANY</th>
                        <th>CATEGORY</th>
                        <th>DESCRIPTION</th>
                        <th></th>
                        <th></th>
                    </thead>
                    <tbody>
                        {
                            this.state.tableData.map((item, i) => (
                                <tr key={item._id}> 
                                    <td>{item._id}</td>
                                    <td>{item.product_name}</td>
                                    <td>
                                        <img style={{width:"90px",height:"90px"}} src={item.product_img} alt={item.product_name} />
                                    </td>
                                    <td>{item.compony_name}</td>
                                    <td>{item.product_catogory}</td>
                                    <td>{item.product_description}</td>
                                    <td>
                                        <button onClick={() => this.dataDelete(item._id)} className="btn text-dark ">DELETE</button>
                                    </td>
                                    <td>
                                        <button className="btn text-dark" onClick={() => { this.setState({ currentData: item }); this.closeModal(true);this.setState({upgrade:true})}}>EDIT</button>
                                    </td>
                                </tr>

                            ))
                        }
                    </tbody>
                </table>
                <button  onClick={() => this.closeModal(true)} className="btn btn-dark btn-lg">NEW</button>
                <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"} />
            </div>
        )
    }
}

export default DashBoard;