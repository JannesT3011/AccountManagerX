import React from "react"

class UpdateAccount extends React.Component {
    handleClick = () => {
        this.props.toggle()
        let elements = document.getElementsByClassName("account")
        let i;
        for (i=0; i < elements.length; i++) {
            elements[i].style.filter = "blur(0px)"
        }
        window.location.reload()
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const data = new FormData(event.target)
        const body = {name: data.get("uname"), username: data.get("uusername"), password: data.get("upassword"), email: data.get("uemail"), link: data.get("ulink"), id: this.props.data.id}
        
        await fetch("/api/account/update", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        })
        this.handleClick()
    }

    render() {
        return(
            <div className="popup">
                <div className="inner">
                    <form onSubmit={this.handleSubmit} className="add-account-form">
                        <input type="text" id="aname" name="uname" defaultValue={this.props.data.name} placeholder="name"></input>
                        <input type="text" id="ausername" name="uusername" defaultValue={this.props.data.username} placeholder="username"></input>
                        <input type="text" id="apassword" name="upassword" defaultValue={this.props.data.password} placeholder="password"></input>
                        <input type="text" id="aemail" name="uemail" defaultValue={this.props.data.email} placeholder="email"></input>
                        <input type="text" id="alink" name="ulink" defaultValue={this.props.data.link} placeholder="link"></input>
                        <input type="submit" value="UPDATE!" className="submit"></input>
                    </form>
                    <button onClick={this.handleClick}>CLOSE!</button>
                </div>
            </div>
        )
    }

}

export default UpdateAccount;