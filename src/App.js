import './App.css';
import { useSate } from "react"
import { Routes, Route } from "react-router-dom"
import Header from './components/Header';
import Nav from './components/Nav';
import ReviewList from './components/ReviewList';
import Review from './components/Review';



function App() {


  return (
    <div className="App">
      <Nav />
      <Header />
      {/* <ReviewList /> */}
      <Routes>
        <Route path="/" element={<ReviewList />} />
        <Route path="/reviews/:review_id" element={<Review/>} />
      </Routes>
    </div>
  );
}

export default App;
