import React from 'react';
import './checkout.css'; 

const MaternityMuse = () => {
    return (
        <div className="container">
            <div className="header">
                <div className="title">Maternity Muse</div>
                <div className="images">
                    <img
                        src=""
                        alt="image1"
                        className="image-small"
                    />
                    <img
                        src=""
                        alt="image2"
                        className="image-small"
                    />
                    <img
                        src=""
                        alt="image3"
                        className="image-small"
                    />
                </div>
            </div>
            <div className="sub-header">
                <div className="sub-header-item">
                    <img
                        src=""
                        alt="shopping-icon"
                        className="shopping-icon"
                    />
                    <div className="shopping-text">Continue Shopping</div>
                </div>
                <div className="checkout-title">Secure Checkout</div>
            </div>
            <div className="express-checkout">Express Checkout</div>
            <div className="or">OR</div>
            <div className="review-delivery-payment">
                <div className="review">Review</div>
                <img
                    src=""
                    alt="icon"
                    className="icon"
                />
                <div className="delivery">Delivery</div>
                <div className="payment">Payment</div>
            </div>
            <div className="email">Email</div>
            <div className="item-details">
                <div className="item-info">
                    Item Name
                    <br /><br />
                    Quality:
                    <br /><br />
                    Price
                </div>
                <div className="item-name">Name</div>
            </div>
            <div className="additional-details">
                <div className="telephone">
                    Telephone Number
                    <div className="gift">
                        <div className="gift-checkbox"></div>
                        <div>Is this a gift?</div>
                    </div>
                    <div className="delivery-address">Delivery Address</div>
                </div>
                <img
                    src=""
                    alt="image4"
                    className="image4"
                />
            </div>
            <div className="order-summary">
                <div className="summary-title">ORDER SUMMARY</div>
                <div className="summary-details">
                    <div className="summary-item">
                        Item:
                        <br /><br />
                        Subtotal:
                        <br /><br />
                        Shipping:
                        <br /><br />
                        Tax:
                        <br /><br />
                        Order Total:
                        <span className="total-amount"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MaternityMuse;
