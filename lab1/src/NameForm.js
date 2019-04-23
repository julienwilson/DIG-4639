import React, { Component } from 'react';
class NameForm extends React.Component {
      constructor(props) {
        super(props);
        this.state = {value: '', nameAvailable:false, isValid:true};


        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }


      handleChange(event) {
        this.setState({value: event.target.value});

      }


      handleSubmit(event) {
        var hello = 'Hello, ' + this.state.value + '!';
        this.setState({name:hello});
        //alert('Hello, ' + this.state.value);
        if (!/[^A-Za-z]+/.test (this.state.value)) {
          this.setState ({nameAvailable:true});

        }
        else {
            this.setState({isValid:false});
          }

        //this.validateForm();

        event.preventDefault();
      }

      render() {
        return (
          <div>{(!this.state.nameAvailable) ?

          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>

            <input type="submit" value="Submit"/>
            {(!this.state.isValid) ? <p> <text style={{color: 'red', fontWeight: 'bold'}}> Must be a valid name </text> </p> : null }
          </form>

          : <p><text style={{color: 'green',fontWeight: 'bold'}}> Good Morning {this.state.value} </text> </p>}
          </div>
          );
    }
  }
     export default NameForm;
