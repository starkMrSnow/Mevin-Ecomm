import { useState } from "react";
import "./OrderConfirmation.css"; // Import the CSS file for styles

const OrderConfirmation = () => {
  const [quantity, setQuantity] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleQuantityChange = (type) => {
    setQuantity((prev) => (type === "increase" ? prev + 1 : prev > 1 ? prev - 1 : prev));
  };

  const handlePaymentChange = (method) => {
    setPaymentMethod(method);
  };

  return (
    <div className="order-container">
      {/* Address Section */}
      <div className="top-section">
        <div>
            <button className="chevron-button">
              <img id = "chevron" src="src\assets\chevron-left.png" alt="back"/>
            </button>
          </div>
        <div>
          <h2>Order Confirmation</h2>
          </div>
      </div>

      <div className="address-details">
        <div>
          <img className="location-icon" src="src\assets\location.png" alt="loction" />
        </div>
          <div>
            <p className="name">Riele Downs +254789076634</p>
            <p className="address">Egerton 700, Egerton University</p>
            <p className="address">Nakuru, Njoro, Kenya</p>
          </div>
          <button className="edit-button"><img src="src\assets\edit-square.png" alt="edit" /></button>
        </div>

      {/* Product Section */}
      <div className="product-section">
      <h4>Brown store</h4>
        <div className="product-details">
          <img
            src="src\assets\pendant-necklace.png"
            alt="pendant"
            className="product-image"
          />
          <div>
            <p className="product-name">2 in 1 pendant gold women necklace</p>
            <p className="product-price">KES 250</p>
          </div>
          <div className="quantity-controls">
            <button onClick={() => handleQuantityChange("decrease")}>-</button>
            <span>{quantity}</span>
            <button onClick={() => handleQuantityChange("increase")}>+</button>
          </div>
        </div>
      </div>

      {/* Payment Method Section */}
      <div className="payment-section">
        <h4>Payment Method</h4>
        <div className="payment-options">
          <label>
            <input
              type="radio"
              name="payment"
              value="mpesa"
              checked={paymentMethod === "mpesa"}
              onChange={() => handlePaymentChange("mpesa")}
            />
            <img src="src\assets\mpesa.png" alt="mpesa-logo" className="mpesa" />
            <span>MPESA</span>
          </label>
          <label>
            <input
              type="radio"
              name="payment"
              value="airtel"
              checked={paymentMethod === "airtel"}
              onChange={() => handlePaymentChange("airtel")}
            />
            <img src="src\assets\airtel.png" alt="airtel-logo" className="airtel" />
            <span>Airtel Money</span>
          </label>
          <label>
            <input
              type="radio"
              name="payment"
              value="visa"
              checked={paymentMethod === "visa"}
              onChange={() => handlePaymentChange("visa")}
            />
            <img src="src\assets\visa.png" alt="visa-logo" className="visa"/>
            <span>Visa ****4567</span>
          </label>
        </div>
      </div>

      {/* Total Price Section */}
      <div className="total-section">
        <h4>Total Price</h4>
        <div className="price-breakdown">
          <p>Price</p>
          <p className="price-value">KES 250</p>
        </div>
        <div className="price-breakdown">
          <p>Shipping Fee</p>
          <p className="shipping-value">Free</p>
        </div>
        <div className="price-breakdown">
          <p>Saved</p>
          <p className="discount-value">-KES 10.00</p>
        </div>
      </div>

      {/* Place Order Button */}
      <div className="place-order-section">
        <div className="price-breakdown-total">
          <p>KES 250.00</p>
        </div>
        <button className="place-order-button">Place Order</button>
      </div>
    </div>
  );
};

export default OrderConfirmation;
