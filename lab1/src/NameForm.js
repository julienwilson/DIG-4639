import React, { Component } from 'react';
class NameForm extends React.Component {
      constructor(props) {
        super(props);
        this.state = {value: ''};
                   
  

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
        this.validateForm();

        event.preventDefault();
      }

      render() {
        if (this.state.name) {
          return (
            <p>{this.state.name}</p>
            );
          } else
        return (
          <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>

            <input type="submit" value="Submit"/>
          </form>
          <p>{this.state.error}</p>

          </div>
        );
      }
    }
     export default NameForm;
