import logo from './logo.svg';
import './App.css';
import Coupon from "./Coupon.js";

function App() {

  let coupons = [
    {
      productName: "Product1",
      imgUrl: "https://i.imgur.com/SUeDv6E.jpg",
      price: "300",
      originPrice: "400"
    },
    {
      productName: "Product2",
      imgUrl: "https://i.imgur.com/aHvd1l0.jpg",
      price: "300",
      originPrice: "400"
    },  
    {
      productName: "Product3",
      imgUrl: "https://i.imgur.com/RWJpWJ7.jpg",
      price: "300",
      originPrice: "400"
    }
  ]

  return (
    <div className="App">
      {/* <div className="test">
        <div className="coupon-div"></div>
        <div className="test"></div>
      </div> */}
      <svg xmlns="http://www.w3.org/2000/svg" width="320" height="85" viewBox="0 0 320 85" fill="none" style={{position: "absolute", display: "flex", flexDirection: "row", top: "0", left: "0", width: "100%", height: "100%"}}>
      <defs>
        <clipPath id="myPath" clipPathUnits="objectBoundingBox">
            <path fillRule="evenodd" clipRule="evenodd" d="M192.272 0H198.719H205.166H320V4.5C318.343 4.5 317 5.84315 317 7.5C317 9.15685 318.343 10.5 320 10.5V14.5C318.343 14.5 317 15.8431 317 17.5C317 19.1569 318.343 20.5 320 20.5V24.5C318.343 24.5 317 25.8431 317 27.5C317 29.1569 318.343 30.5 320 30.5V34.5C318.343 34.5 317 35.8431 317 37.5C317 39.1569 318.343 40.5 320 40.5V44.5C318.343 44.5 317 45.8431 317 47.5C317 49.1569 318.343 50.5 320 50.5V54.5C318.343 54.5 317 55.8431 317 57.5C317 59.1569 318.343 60.5 320 60.5V64.5C318.343 64.5 317 65.8431 317 67.5C317 69.1569 318.343 70.5 320 70.5V74.5C318.343 74.5 317 75.8431 317 77.5C317 79.1569 318.343 80.5 320 80.5V85H205.166H198.719H192.272H0V80.5C1.65685 80.5 3 79.1569 3 77.5C3 75.8431 1.65685 74.5 0 74.5V70.5C1.65685 70.5 3 69.1569 3 67.5C3 65.8431 1.65685 64.5 0 64.5V60.5C1.65685 60.5 3 59.1569 3 57.5C3 55.8431 1.65685 54.5 0 54.5V50.5C1.65685 50.5 3 49.1569 3 47.5C3 45.8431 1.65685 44.5 0 44.5V40.5C1.65685 40.5 3 39.1569 3 37.5C3 35.8431 1.65685 34.5 0 34.5V30.5C1.65685 30.5 3 29.1569 3 27.5C3 25.8431 1.65685 24.5 0 24.5V20.5C1.65685 20.5 3 19.1569 3 17.5C3 15.8431 1.65685 14.5 0 14.5V10.5C1.65685 10.5 3 9.15685 3 7.5C3 5.84315 1.65685 4.5 0 4.5V0H192.272Z" fill="orange" />
        </clipPath>
        </defs>
      </svg>
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
