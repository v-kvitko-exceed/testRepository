import React from 'react';
import './App.css';
import 'react-toastify/dist/ReactToastify.min.css'; 






function FilterButtons({ mode, setFilter, deleteCompleted }) {
  return (
    <div className="bt">

      <button
        className={`${mode === 1 ? "active" : ""}`}
        onClick={() => setFilter(1)}
      >All</button>

      <button
        className={` ${mode === 2 ? "active" : ""}`}
        onClick={() => setFilter(2)}
      >Active</button>

      <button
        className={` ${mode === 3 ? "active" : ""}`}
        onClick={() => setFilter(3)}
      >Completed</button>

      <button className=" clcompl"
        onClick={deleteCompleted}
      >Clear Completed </button>
    </div>

  );
}




export default FilterButtons;
