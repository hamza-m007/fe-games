import './App.css';
import { useSate } from "react"
import { Routes, Route } from "react-router-dom"
import Header from './components/Header';
import Nav from './components/Nav';
import ReviewList from './components/ReviewList';


function App() {


  return (
    <div className="App">
      <Nav />
      <Header />
      <ReviewList />
      {/* <Routes>
        <route path="/" element={<ReviewList />} />
      </Routes> */}
    </div>
  );
}

export default App;
