import logo from './logo.svg';
import './App.css';
import Coupon from "./Coupon.js";

function App() {

  let coupons = [
    {
      productName: "Product1",
      imgUrl: "https://i.imgur.com/SUeDv6E.jpg"
    },
    {
      productName: "Product2",
      imgUrl: "https://i.imgur.com/aHvd1l0.jpg"
    },  
    {
      productName: "Product3",
      imgUrl: "https://i.imgur.com/RWJpWJ7.jpg"
    }
  ]

  return (
    <div className="App">
      {/* <div className="test">
        <div className="coupon-div"></div>
        <div className="test"></div>
      </div> */}
      <div style={{display: "flex", flexDirection: "column", gap: "6px" }}>
        {
          coupons.map((element, idx) => {
            return <Coupon {...element} />
          })
        }
        {/* <Coupon />
        <Coupon />
        <Coupon /> */}
      </div>
    </div>
  );
}

export default App;
