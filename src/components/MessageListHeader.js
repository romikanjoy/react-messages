import React from 'react';

const MessageListHeader = ({ messageCount }) => {
  if (messageCount > 0) {
    return (
      <p className="lead">
        You have {messageCount} messages in your inbox.
      </p>
    );
  } else {
    return (
      <p className="lead">
        You do not have any messages in your inbox.
      </p>
    );
  }
};

export default MessageListHeader;
