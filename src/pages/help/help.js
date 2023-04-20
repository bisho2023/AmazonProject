import React from "react";
import "./help.css";
import { useAuth } from "../../context/GlobalProvider";
const Help = () => {
  const { user } = useAuth();
  return (
    <div>
      <header id="header">
        <div class="cs-title">
          <a href="#">
            <div>Customer Service</div>
          </a>
        </div>
        <div class="nav-item1">
          <a href="#">
            <div>Home</div>
          </a>
        </div>
        <div class="nav-item">
          <a href="#">
            <div>Digital Services and Device Support</div>
          </a>
        </div>
      </header>
      <div class="page-wrapper hero-banner ">
        <div class="alert-box ">
          <div>
            <img
              src="https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_emergency_icon_blue.png"
              alt=""
            />
          </div>
          <div>
            Our phone lines are open from 8:00 am to 12 midnight Egypt time. You
            can call us directly at 08000262966 to talk to our team. You can
            also track your orders and deliveries, return a product, and manage
            your Prime account by clicking on the help resources below.
          </div>
        </div>
        <h2
          style={{
            color: "white",
          }}
        >
          Welcome to your Amazon Customer Service Center,{" "}
          {user ? `${user.email}` : "Guest"}
        </h2>
        <p class="subtext">
          What would you like help with today? You can quickly take care of most
          things here, or connect with us when needed.
        </p>
        <div class="card-container">
          <div class="card-wrapper">
            <div class="fs-match-card">
              <div class="card-icon">
                <img
                  src="https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_order_v2.png"
                  alt=""
                />
              </div>
              <div class="center card-detail">
                <div class="card-title ">A delivery, order or return</div>
              </div>
            </div>
          </div>
          <div class="card-wrapper">
            <div class="fs-match-card">
              <div class="card-icon">
                <img
                  src="https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_account_v2.png"
                  alt=""
                />
              </div>
              <div class="center card-detail">
                <div class="card-title ">Account Settings and Privacy</div>
              </div>
            </div>
          </div>
          <div class="card-wrapper">
            <div class="fs-match-card" role="button" tabindex="0">
              <div class="card-icon">
                <img
                  src="https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_prime_v2.png"
                  alt=""
                />
              </div>
              <div class="center fs-match-card-detail">
                <div class="fs-match-card-title full">Prime Related</div>
              </div>
            </div>
          </div>
          <div class="card-wrapper">
            <div class="fs-match-card">
              <div class="card-icon">
                <img
                  src="https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_device_v2.png"
                  alt=""
                />
              </div>
              <div class="center card-detail">
                <div class="card-title ">
                  Devices - Tablet, FireTV, Echo etc.
                </div>
              </div>
            </div>
          </div>
          <div class="card-wrapper">
            <div class="fs-match-card">
              <div class="card-icon">
                <img
                  src="https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_dcontent_v3.png"
                  alt=""
                />
              </div>
              <div class="center card-detail">
                <div class="card-title ">eBooks, Prime Videos or Music</div>
              </div>
            </div>
          </div>
          <div class="card-wrapper">
            <div class="fs-match-card" role="button" tabindex="0">
              <div class="card-icon">
                <img
                  style={{ width: "120px" }}
                  src="https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/souq.png"
                  alt=""
                />
              </div>
              <div class="center card-detail">
                <div class="card-title ">Souq order related</div>
              </div>
            </div>
          </div>
          <div class="card-wrapper">
            <div class="fs-match-card">
              <div class="card-icon">
                <img
                  src="https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_somethingelse_v3.png"
                  alt=""
                />
              </div>
              <div class="center card-detail">
                <div class="card-title">Pre-Order Questions</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 style={{ color: "black", fontWeight: "bold", fontSize: "30px" }}>
        All help topics
      </h2>
      <div class="help-container">
        <div class="help-list">
          <ul class="help-topics">
            <li class="help-topics">
              <input type="radio" id="topic-0" name="select-help-topic" />
              <label for="topic-0">Recommended Topics</label>
            </li>
            <li class="help-topics">
              <input type="radio" id="topic-1" name="select-help-topic" />
              <label for="topic-1">Where's my stuff</label>
            </li>
            <li class="help-topics">
              <input type="radio" id="topic-2" name="select-help-topic" />
              <label for="topic-2">Shipping and Delivery</label>
            </li>
            <li class="help-topics">
              <input type="radio" id="topic-3" name="select-help-topic" />
              <label for="topic-3">Returns and Refunds</label>
            </li>
            <li class="help-topics">
              <input type="radio" id="topic-4" name="select-help-topic" />
              <label for="topic-4">Ordering</label>
            </li>
            <li class="help-topics">
              <input type="radio" id="topic-5" name="select-help-topic" />
              <label for="topic-5">Managing Your Account</label>
            </li>
            <li class="help-topics">
              <input type="radio" id="topic-6" name="select-help-topic" />
              <label for="topic-6">Security & Privacy</label>
            </li>
            <li class="help-topics">
              <input type="radio" id="topic-7" name="select-help-topic" />
              <label for="topic-7">Payment, Pricing and Promotions</label>
            </li>
            <li class="help-topics">
              <input type="radio" id="topic-8" name="select-help-topic" />
              <label for="topic-8">Devices & Digital Solutions</label>
            </li>
            <li class="help-topics">
              <input type="radio" id="topic-9" name="select-help-topic" />
              <label for="topic-9">Other topics & Help sites</label>
            </li>
          </ul>
        </div>
        <div class="help-content-wrapper">
          <div class="help-card-wrapper">
            <div class="fs-match-card">
              <div class="fs-match-card-detail">
                <div class="fs-match-card-title">
                  Check the Status of Your Refund
                </div>
                <div class="fs-match-card-desc">
                  You can check the status of your refund in Your Account.
                </div>
              </div>
            </div>
          </div>
          <div class="help-card-wrapper">
            <div class="fs-match-card" role="button" tabindex="0">
              <div class="fs-match-card-detail">
                <div class="fs-match-card-title">
                  Find a missing package that shows As delivered
                </div>
                <div class="fs-match-card-desc">
                  If your tracking information shows that your package was
                  delivered, but you haven't yet received it, wait until the end
                  of the day. Some couriers may deliver until 10pm.
                </div>
              </div>
            </div>
          </div>
          <div class="help-card-wrapper">
            <div class="fs-match-card">
              <div class="fs-match-card-detail">
                <div class="fs-match-card-title">Track your package</div>
                <div class="fs-match-card-desc">
                  You can find tracking information in your order details. If an
                  order includes multiple items, each may have separate delivery
                  dates and tracking information.
                </div>
              </div>
            </div>
          </div>
          <div class="help-card-wrapper">
            <div class="fs-match-card" role="button" tabindex="0">
              <div class="fs-match-card-detail">
                <div class="fs-match-card-title">Cash on Delivery</div>
                <div class="fs-match-card-desc">
                  You can pay for Cash on Delivery orders using cash at the time
                  of delivery.
                </div>
              </div>
            </div>
          </div>
          <div class="help-card-wrapper">
            <div class="fs-match-card" role="button" tabindex="0">
              <div class="fs-match-card-detail">
                <div class="fs-match-card-title">Return Items You Ordered</div>
                <div class="fs-match-card-desc">
                  You can return many items sold on Amazon. When you return an
                  item, you may see different return options depending on the
                  seller, item, or reason for return.
                </div>
              </div>
            </div>
          </div>
          <div class="help-card-wrapper">
            <div class="fs-match-card" role="button" tabindex="0">
              <div class="fs-match-card-detail">
                <div class="fs-match-card-title">
                  About Free Shipping by Amazon
                </div>
                <div class="fs-match-card-desc">
                  FREE Shipping is available if you're ordering eligible items
                  for delivery within Egypt.
                </div>
              </div>
            </div>
          </div>
          <div class="help-card-wrapper">
            <div class="fs-match-card" role="button" tabindex="0">
              <div class="fs-match-card-detail">
                <div class="fs-match-card-title">Replace an item</div>
                <div class="fs-match-card-desc">
                  If you received a damaged, defective, or incorrect item sold
                  by Amazon, you can request a replacement for a small number of
                  eligible items through <b> Your Orders </b>.
                </div>
              </div>
            </div>
          </div>
          <div class="help-card-wrapper">
            <div class="fs-match-card" role="button" tabindex="0">
              <div class="fs-match-card-detail">
                <div class="fs-match-card-title">Print an Invoice</div>
                <div class="fs-match-card-desc">
                  You can print a copy of your order summary for any order sold
                  on Amazon.eg. The Amazon.eg order summary is not a tax
                  invoice.
                </div>
              </div>
            </div>
          </div>
          <div class="help-card-wrapper">
            <div class="fs-match-card" role="button" tabindex="0">
              <div class="fs-match-card-detail">
                <div class="fs-match-card-title">
                  Redeem Your Gift Card Balance
                </div>
                <div class="fs-match-card-desc">
                  If you returned an item with the payment method as Cash on
                  Delivery, the refund will be applied into your Amazon.eg
                  account towards your Gift Card balance. Your Gift Card balance
                  will automatically apply to eligible orders during the
                  checkout. If you prefer to save your Gift Card balance for
                  another occasion, you can deselect it as a payment method at
                  checkout.
                </div>
              </div>
            </div>
          </div>
          <div class="help-card-wrapper">
            <div class="fs-match-card" role="button" tabindex="0">
              <div class="fs-match-card-detail">
                <div class="fs-match-card-title">Placing orders</div>
                <div class="fs-match-card-desc">Placing orders</div>
              </div>
            </div>
          </div>
          <div class="help-card-wrapper">
            <div class="fs-match-card" role="button" tabindex="0">
              <div class="fs-match-card-detail">
                <div class="fs-match-card-title">
                  Report Something Suspicious
                </div>
                <div class="fs-match-card-desc">
                  We take fraud, scam, phishing and spoofing attempts seriously.
                  If you receive correspondence you think may not be from
                  Amazon, please report it immediately.
                </div>
              </div>
            </div>
          </div>
          <div class="help-card-wrapper">
            <div class="fs-match-card" role="button" tabindex="0">
              <div class="fs-match-card-detail">
                <div class="fs-match-card-title">Cancel Items or Orders</div>
                <div class="fs-match-card-desc">
                  You can cancel items or orders that haven't entered the
                  shipping process yet.
                </div>
              </div>
            </div>
          </div>
          <div class="new-row-break"></div>
        </div>
      </div>
    </div>
  );
};

export default Help;
