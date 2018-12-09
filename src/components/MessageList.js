import React from 'react';
import MessageListHeader from './MessageListHeader';
import Message from './Message';

const MessageList = ({ messages }) => {
  const margin = {
    marginTop: 20,
    marginBottom: 50
  };


  if (!messages) {
    return <div className="lead" style={margin}>Loading Messages...</div>;
  }

  return (
    <div style={margin}>
      <MessageListHeader messageCount={messages.length} />
      {
        messages.length > 0 &&
          <ul className="list-group">
            {messages.map((message) => <Message key={message.id} message={message} />)}
          </ul>
      }
    </div>
  );
};

export default MessageList;
