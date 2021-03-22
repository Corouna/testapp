import React from 'react';
import { ConversationList } from './app/page';
import { ConversationProvider } from './app/context';

const Demo = () => {
  return (
    <ConversationProvider>
      <ConversationList />
    </ConversationProvider>
  );
}

export default Demo;
