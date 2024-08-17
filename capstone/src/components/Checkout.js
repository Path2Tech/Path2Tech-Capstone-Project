// import React from 'react';
// import './checkout.css'; 

// const Checkout = () => {
//     return (
//         <div className="container">
//             <header className="header">
//                 <div className="title">Maternity Muse</div>
//                 <div className="images">
//                     <img
//                         src=""
//                         alt="image1"
//                         className="image-small"
//                     />
//                     <img
//                         src=""
//                         alt="image2"
//                         className="image-small"
//                     />
//                     <img
//                         src="./assets/shoppingcart.png"
//                         alt="Shopping Cart"
//                         className="image-small"
//                     />
//                 </div>
//             </header>

//             <section className="sub-header">
//                 <div className="sub-header-item">
//                     <img
//                         src=""
//                         alt="shopping-icon"
//                         className="shopping-icon"
//                     />
//                     <div className="shopping-text">Continue Shopping</div>
//                 </div>
//                 <div className="checkout-title">Secure Checkout</div>
//             </section>

//             <section className="checkout-options">
//                 <div className="express-checkout">Express Checkout</div>
//                 <div className="or">OR</div>
//                 <div className="review-delivery-payment">
//                     <div className="review">Review</div>
//                     <img
//                         src=""
//                         alt="icon"
//                         className="icon"
//                     />
//                     <div className="delivery">Delivery</div>
//                     <div className="payment">Payment</div>
//                 </div>
//             </section>

//             <section className="contact-info">
//                 <div className="email">Email</div>
//             </section>

//             <section className="item-details">
//                 <div className="item-info">
//                     <div>Item Name</div>
//                     <div>Quality:</div>
//                     <div>Price</div>
//                 </div>
//                 <div className="item-name">Name</div>
//             </section>

//             <section className="additional-details">
//                 <div className="telephone">Telephone Number</div>
//                 <div className="gift">
//                     <div className="gift-checkbox"></div>
//                     <div>Is this a gift?</div>
//                 </div>
//                 <div className="delivery-address">Delivery Address</div>
//                 <img
//                     src=""
//                     alt="Additional Image"
//                     className="image4"
//                 />
//             </section>

//             <section className="order-summary">
//                 <div className="summary-title">ORDER SUMMARY</div>
//                 <div className="summary-details">
//                     <div className="summary-item">
//                         <div>Item:</div>
//                         <div>Subtotal:</div>
//                         <div>Shipping:</div>
//                         <div>Tax:</div>
//                         <div>Order Total: <span className="total-amount"></span></div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default Checkout;

import React from 'react';
import './checkout.css'; 

const Checkout = () => {
    return (
        <div className="container">
        <h1 className="title"></h1>
        <div className="checkout-form">
  
          <div className="section">
            <h2>Shipping Information</h2>
            <div className="form-group">
              <label htmlFor="full-name">Full Name</label>
              <input type="text" id="full-name" name="full-name" placeholder="Jane Doe" />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input type="text" id="address" name="address" placeholder="1234 Main St" />
            </div>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input type="text" id="city" name="city" placeholder="City" />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="state">State</label>
                <input type="text" id="state" name="state" placeholder="State" />
              </div>
              <div className="form-group">
                <label htmlFor="zip">Zip Code</label>
                <input type="text" id="zip" name="zip" placeholder="12345" />
              </div>
            </div>
          </div>
  
          <div className="section">
            <h2>Payment Information</h2>
            <div className="form-group">
              <label htmlFor="card-name">Name on Card</label>
              <input type="text" id="card-name" name="card-name" placeholder="Jane Doe" />
            </div>
            <div className="form-group">
              <label htmlFor="card-number">Card Number</label>
              <input type="text" id="card-number" name="card-number" placeholder="1234 5678 9012 3456" />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="expiry-date">Expiry Date</label>
                <input type="text" id="expiry-date" name="expiry-date" placeholder="MM/YY" />
              </div>
              <div className="form-group">
                <label htmlFor="cvc">CVC</label>
                <input type="text" id="cvc" name="cvc" placeholder="123" />
              </div>
            </div>
          </div>
  
          <div className="section order-summary">
            <h2>Order Summary</h2>
            <div className="summary-item">
              <span>Item 1</span>
              <span>$29.99</span>
            </div>
            <div className="summary-item">
              <span>Item 2</span>
              <span>$39.99</span>
            </div>
            <div className="summary-item">
              <span>Shipping</span>
              <span>$5.00</span>
            </div>
            <div className="summary-item total">
              <span>Total</span>
              <span>$74.99</span>
            </div>
          </div>
          
          <button className="checkout-button">Place Order</button>
        </div>
      </div>
    );
  };
 export default Checkout;