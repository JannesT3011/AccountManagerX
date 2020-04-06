import React from 'react';

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
    this.state.accounts.map((data) => {el.push(<div><h1><a href={data.link}>{data.name}</a></h1><h2>{data.username}</h2><h2>{data.email}</h2><h2>{data.password}</h2></div>)})
        this.setState({elements: el})
    }

    render() {
        return (
        <div>
            {this.state.elements}
        </div>
        )
    } 
}

export default Home;