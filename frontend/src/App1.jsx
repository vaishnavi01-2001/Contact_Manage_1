import React from 'react';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

function App1() {
  return (
    <div>
      <div class="d-flex justify-content-center align-items-center">
  <h1>Contact Manager</h1>
</div>
      <SignUp />
      <SignIn />
    </div>
  );
}

export default App1;