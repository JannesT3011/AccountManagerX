import React from 'react';
import "./home.scss"

class Home extends React.Component {  
    state = {
        loading: true,
        accounts: null,
        elements: null
    }

    createDiv() {
        for (let object of this.state.accounts) {
            console.log(object)
        }
    }

    async componentDidMount() {
        const url = "/api/accounts"
        const response = await fetch(url);
        const data = await response.json();
        this.setState({
            accounts: data,
        });
        let el = []
        this.state.accounts.map((data) => {el.push(<div class="account"><h1><a href={data.link}>{data.name}</a></h1><h2>{data.username}</h2><h2>{data.email}</h2><h2>{data.password}</h2></div>)})
            this.setState({elements: el})
    }

    render() {
        return (
        <div>
            <div class="accounts">
                {this.state.elements}
                <div class="account">
                    <a href="/addAccount"><h2>Add new account</h2></a>
                </div>
            </div>
        </div>
        )
    } 
}

export default Home;