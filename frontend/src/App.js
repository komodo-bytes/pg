import React from 'react';
import UserProfile from './components/UserProfile';
import PetProfile from './components/PetProfile';
import GodParentSearch from './components/GodParentSearch';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Pet Godparent Platform</h1>
      </header>
      <main>
        <UserProfile />
        <PetProfile />
        <GodParentSearch />
      </main>
    </div>
  );
}

export default App;