import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  const [showTotalModal, setShowTotalModal] = React.useState(false);

  const handleTotalOpen = () => setShowTotalModal(true);

  return (
    <div className="App">
      <header className="App-header">
        <Header handleTotalOpen={handleTotalOpen} />
        <Main showTotalModal={showTotalModal} setShowTotalModal={setShowTotalModal} />
      </header>
    </div>
  );
}

export default App;
