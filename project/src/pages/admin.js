import './admin.css';
import React, { Component } from 'react';
import Navbar from './components/navbar';
import {CheckAdmin} from './components/dbHelper';

class AdminPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: 1, // Default selected option
      inputText: '',
      message: '',
    };
  }

  componentDidMount() {
    CheckAdmin();
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
                <h1>Admin Team Management</h1>
                <div className="dropdown-container">
                <select
                    value={this.state.selectedOption}
                    onChange={this.handleDropdownChange}
                >
                    <option value={1}>Samahang Modern</option>
                    <option value={2}>ACA All Day</option>
                    <option value={3}>VSU Modern</option>
                    <option value={4}>Foundations Choreography</option>
                    <option value={5}>KBM Dance</option>
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