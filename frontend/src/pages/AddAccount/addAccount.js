import React from 'react';
import "./addAccount.scss"

class AddAccount extends React.Component {

    handleClick = () => {
      this.props.toggle()
      let elements = document.getElementsByClassName("account")
      let i;
      for (i=0; i < elements.length; i++) {
          elements[i].style.filter = "blur(0px)"
      }
      window.location.reload()
    }

    async handleSubmit(event) {
      event.preventDefault()
      const data = new FormData(event.target)
      const body = {name: data.get("aname"), username: data.get("ausername"), password: data.get("apassword"), email: data.get("aemail"), link: data.get("alink")}
  
      await fetch("/api/account/create", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body),
      });
      document.getElementsByClassName("add-account-form")[0].reset()
    }

    render() { 
        return (
            
            <div className='popup'>
              <div className="inner">
                <form  onSubmit={this.handleSubmit} className="add-account-form"> 
                  <input type="text" id="aname" name="aname" placeholder="Name" required/>

                  <input type="text" id="ausername" name="ausername" placeholder="Username" required/>

                  <input type="text" id="apassword" name="apassword" placeholder="Password" required/>

                  <input type="email" id="aemail" name="aemail" placeholder="E-Mail" required/>

                  <input type="text" id="alink" name="alink" placeholder="Link to Website"/>

                  <input type="submit" value="ADD!" className="submit"></input>
                </form>
                <button onClick={this.handleClick}>CLOSE!</button>
              </div>
            </div>
          );
    }
}

export default AddAccount;