import React, { Component } from 'react';
import data from '../messages.json';
import MessageList from './MessageList';
import AddMessageForm from './AddMessageForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: null
    };
    this.addMessage = this.addMessage.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ messages: data });
    }, 2000);
  }

  addMessage(message) {
    const id = this.state.messages.length.toString();
    const newMessage = Object.assign({ id }, message);
    this.setState({ messages: [...this.state.messages, newMessage] });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <h1 className="display-1">Messages</h1>
        </div>
        <AddMessageForm addMessage={this.addMessage} />
        <MessageList messages={this.state.messages} />
      </div>
    );
  }
}

export default App;
