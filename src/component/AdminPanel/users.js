import React, { PureComponent } from 'react'
import axios from 'axios';
import ReactPaginate from 'react-paginate';

export class Users extends PureComponent {

    constructor(props) {
        super(props)

        this.state = {
            offset: 0,
            tableData: [],
            orgtableData: [],
            perPage: 11,
            currentPage: 0
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


    getData() {
        axios
            .get(`/api/v1/users`)
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

    deleteUser = async (id) => {
        await axios.delete(`/api/v1/users/${id}`);
        window.location.reload(false);
    }

    render() {
        return (
            <div className="mains">
                <table border="1" className="table">
                    <thead>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>CREATE DATA</th>
                        <th>ROLE</th>
                        <th></th>
                    </thead>
                    <tbody>
                        {
                            this.state.tableData.map((item, i) => (
                                <tr key={item._id}>
                                    <td>{item._id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.date}</td>
                                    <td>{item.isAdmin?"ADMIN":"CUSTOMER"}</td>
                                    <td>
                                        <button onClick={() => this.deleteUser(item._id)} className="btn text-dark ">DELETE</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

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

export default Users;