import { ShopItem } from "./Components";

import "./App.css";

function App() {
  const item = {
    brand: "Tiger of Sweden",
    title: "Leonard coat",
    description: "Minimalistic coat in cotton-blend",
    price: 399,
    currency: "£",
  };
  return (
    <div className="container">
      <div className="background-element"></div>
      <div className="highlight-window">
        <div className="highlight-overlay"></div>
      </div>
      <div className="window">
        <ShopItem item={item} />
      </div>
    </div>
  );
}

export default App;
