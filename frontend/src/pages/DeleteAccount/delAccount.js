import React from "react"
import "./delAccount.scss"

class DelAccount extends React.Component {
    handleClick = () => {
        this.props.toggle()
        var elements = document.getElementsByClassName("account")
        var i;
        for (i=0; i < elements.length; i++) {
            elements[i].style.filter = "blur(0px)"
        }
        window.location.reload()
      }

     handleDelClick = async () => {
        await fetch("/api/account/delete", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({id: this.props.id})
        })
        this.props.toggle()
        let elements = document.getElementsByClassName("account")
        let i;
        for (i=0; i < elements.length; i++) {
            elements[i].style.filter = "blur(0px)"
        }
        window.location.reload()
    }

    render() {
        return (
            <div className="popup del-acc">
                <div className="inner del-acc">
                    <button className="submit del-acc-submit delete-acc" onClick={this.handleDelClick}>DELETE!</button>
                    <button className="submit del-acc-submit" onClick={this.handleClick}>CANCEL!</button>
                </div>
            </div>
        )
    }

}

export default DelAccount;