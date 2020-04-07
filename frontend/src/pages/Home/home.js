import React from 'react';
import "./home.scss"
import AddAccount from "../AddAccount/addAccount"

class Home extends React.Component {  
    state = {
        loading: true,
        show_add:false,
        accounts: null,
        elements: null,
    }

    togglePopup() {
        this.setState({
          showPopup: !this.state.show_add
        });
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
    }

    render() {
        return (
        <div>
            <div className="accounts">
                {this.state.elements}
                <div className="account add-new">
                    <button onClick={this.togglePopup.bind(this)}>Add new account</button>
                </div>
            </div>
        </div>
        )
    } 
}

export default Home;