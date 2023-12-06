import './admin.css';
import React, { Component } from 'react';
import Navbar from './components/navbar'

class AdminPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: 'One', // Default selected option
      inputText: '',
      message: '',
    };
  }

  handleDropdownChange = (event) => {
    this.setState({ selectedOption: event.target.value });
  };

  handleInputChange = (event) => {
    this.setState({ inputText: event.target.value });
  };

  handleAddMember = () => {
    this.setState({ message: 'Successfully added member' });
  };

  handleDeleteMember = () => {
    this.setState({ message: 'Successfully deleted member' });
  };

  render() {
    return (
        <div className='admin-outer'>
            <div className="admin-page">
                <Navbar></Navbar>
                <h1>Add/Delete Member</h1>
                <div className="dropdown-container">
                <select
                    value={this.state.selectedOption}
                    onChange={this.handleDropdownChange}
                >
                    <option value={1}>Samahang Modern</option>
                    <option value="Two">ACA All Day</option>
                    <option value="Three">VSU Modern</option>
                    <option value="Four">Foundations Choreography</option>
                    <option value="Five">KBM Dance</option>
                </select>
                </div>

                <div className="input-container">
                <input
                    type="text"
                    value={this.state.inputText}
                    onChange={this.handleInputChange}
                    placeholder="Enter member name"
                />
                </div>

                <div className="button-container">
                <button onClick={this.handleAddMember}>Add Member</button>
                <button onClick={this.handleDeleteMember}>Delete Member</button>
                </div>

                <p className="message">{this.state.message}</p>
            </div>
      </div>
    );
  }
}

export default AdminPage;