import React from 'react';
import "./home.scss"
import AddAccount from "../AddAccount/addAccount"

class Home extends React.Component {  
 
    state = {
        loading: true,
        seen: false,
        accounts: null,
        elements: null,
    }

    async componentDidMount() {
        const url = "/api/accounts"
        const response = await fetch(url);
        const data = await response.json();
        this.setState({
            accounts: data,
        });
        let el = []
        this.state.accounts.map((data) => {el.push(<div className="account"><h1><a href={data.link}>{data.name}</a></h1><hr></hr><h2>{data.username}</h2><h2>{data.email}</h2><h2>{data.password}</h2></div>)})
            this.setState({elements: el})
            setInterval(response, 5000) // TODO AUTO REFRESH AKTIVIEREN
    }

    togglePop = () => {
        this.setState({seen: !this.state.seen})
        var elements = document.getElementsByClassName("account")
        var i;
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
            </div>
        </div>
        ) 
    } 
}

export default Home;