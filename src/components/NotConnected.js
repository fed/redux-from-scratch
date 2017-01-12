import React from 'react';
import './NotConnected.css';

const NotConnected = (props, context) => {
  console.log('NotConnected also has access to the store', context.store);

  return (
    <p className="NotConnected">
      This component is a presentational component which is not connected to the Redux Store using the <code>connect</code> helper method. However, it also gets the <code>store</code> passed in through its <code>context</code>. Remember the <code>context</code> is opt-in, you need to declare what you want to get passed in on the component's <code>contextTypes</code> declaration at the very end.
    </p>
  );
};

NotConnected.contextTypes = {
  store: React.PropTypes.object
};

export default NotConnected;
