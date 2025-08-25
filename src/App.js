import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <section className="hero">
        <h1>Welcome to Static Project</h1>
        <p>This is a simple static React project.</p>
        <button>Get Started</button>
      </section>

      <section className="cards">
        <div className="card">
          <img src="https://picsum.photos/200/300.jpg" alt="Card 1" />
          <div className="card-content">
            <h3>Card One</h3>
            <p>Static content example.</p>
          </div>
        </div>

        <div className="card">
          <img src="https://picsum.photos/id/57/2448/326" alt="Card 2" />
          <div className="card-content">
            <h3>Card Two</h3>
            <p>Another static card.</p>
          </div>
        </div>

        <div className="card">
          <img src="https://picsum.photos/200/300/?blur.jpg" alt="Card 3" />
          <div className="card-content">
            <h3>Card Three</h3>
            <p>Yet another static card.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
