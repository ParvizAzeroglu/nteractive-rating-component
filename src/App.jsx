import { useState } from "react";

const App = () => {
  const [showDiv, setShowDiv] = useState(false);
  const [selected, setSelected] = useState(0);
  return (
    <div className="container">
      {showDiv ? (
        <ThankState selected={selected} />
      ) : (
        <Rating
          setShowDiv={setShowDiv}
          selected={selected}
          setSelected={setSelected}
        />
      )}
    </div>
  );
};

function Rating({ setShowDiv, selected, setSelected }) {
  return (
    <div className="rating-container">
      <div className="rating-header">
        <img src="icon-star.svg" alt="star icon" />
      </div>
      <div className="rating-text">
        <h2>How did we do?</h2>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>
      <div className="rating">
        <Stars setSelected={setSelected} selected={selected} />

        <input type="submit" onClick={() => setShowDiv((e) => !e)} />
      </div>
    </div>
  );
}

function Stars({ star = 5, setSelected, selected }) {
  function handleClick(e) {
    setSelected((val) => (val = e.target.value));
  }

  return (
    <div className="star-container">
      {Array.from({ length: star }, (_, i) => (
        <button
          key={i + 1}
          className={`star ${selected >= i + 1 && "starred"}`}
          value={i + 1}
          onClick={handleClick}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}

function ThankState({ selected }) {
  return (
    <div className="rating-container thank">
      <img src="illustration-thank-you.svg" alt="thank you svg" />
      <span>You Selected {selected} out of 5</span>
      <h2>Thank You!</h2>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}

export default App;
