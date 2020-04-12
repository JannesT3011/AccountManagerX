import React from 'react';
import "./home.scss"
import AddAccount from "../AddAccount/addAccount"
import DelAccount from "../DeleteAccount/delAccount"
import UpdateAccount from "../UpdateAccount/updateAccount"

class Home extends React.Component {  
 
    state = {
        loading: true,
        seen: false,
        del_seen: false,
        upd_seen: false,
        accounts: null,
        elements: null,
        del_item_id: "",
        upd_item_data: null
    }

    async componentDidMount() {
        const url = "/api/accounts"
        const response = await fetch(url);
        const data = await response.json();
        this.setState({
            accounts: data,
        });
        let el = []
    this.state.accounts.map((data) => {el.push(
        <div className="account" key={data}>
        <h1><a href={data.link}>{data.name}</a></h1>
        <hr></hr>
        <h2>{data.username}</h2>
        <h2>{data.email}</h2>
        <h2>{data.password}</h2>
        <img src="https://img.icons8.com/material-sharp/48/000000/delete-sign.png" className="delete-icon" onClick={() => this.deleteAcc(data.id)}/>
        <img src="https://img.icons8.com/material/24/000000/edit--v1.png" className="update-icon" onClick={() => {this.updateAcc(data)}}/>
        </div>
    )})
            this.setState({elements: el})
            setInterval(response, 5000) 
    }

    togglePop = () => {
        this.setState({seen: !this.state.seen})
        var elements = document.getElementsByClassName("account")
        var i;
        for (i=0; i < elements.length; i++) {
            elements[i].style.filter = "blur(5px)"
        }
    }

    deleteAcc = (id) => {
        this.del_item_id = id
        this.setState({del_seen: !this.state.del_seen, del_item_id: id})
        let elements = document.getElementsByClassName("account")
        let i;
        for (i=0; i < elements.length; i++) {
            elements[i].style.filter = "blur(5px)"
        }
    }

    updateAcc = (data) => {
        this.setState({upd_seen: !this.state.upd_seen, upd_item_data: data})
        let elements = document.getElementsByClassName("account")
        let i;
        for (i=0; i < elements.length; i++) {
            elements[i].style.filter = "blur(5px)"
        }
    }

    render() {
        return (
        <div className="Main">
            <div className="accounts">
                {this.state.elements}
                <div className="account add-new" onClick={this.togglePop}>
                    <button>Add new account</button>  
                </div>
                {this.state.seen ? <AddAccount toggle={this.togglePop}/> : null}
                {this.state.del_seen ? <DelAccount toggle={this.deleteAcc} id={this.state.del_item_id}/> : null} 
                {this.state.upd_seen ? <UpdateAccount toggle={this.updateAcc} data={this.state.upd_item_data}/> : null}
            </div>
        </div>
        ) 
    } 
}

export default Home;