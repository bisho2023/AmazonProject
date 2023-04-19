import React from 'react';
import "./help.css";
import { useAuth } from '../../context/GlobalProvider';
const Help = () => {
  const { user} = useAuth();
  return (
    <div >
    
        
      
    <header id='header'>
      <div class="cs-title" >
      <a href="#"><div>Customer Service</div></a>
                  
      </div>
      <div class="nav-item1" >
      <a href="#"><div>Home</div></a>
                  
      </div>
      <div class='nav-item'> 
      <a href="#"><div>Digital Services and Device Support</div></a>
                  
      </div>
    </header>
    <div class='page-wrapper hero-banner '>
    <div class="alert-box ">
             <div>
          <img  src="https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_emergency_icon_blue.png" alt=""/>
         </div>
          <div >Our phone lines are open from 8:00 am to 12 midnight Egypt time. You can call us directly at 08000262966  to talk to our team. You can also track your orders and deliveries, return a product, and manage your Prime account by clicking on the help resources below.</div>
          </div>
          <h2   style={{
                  color:'white'
                  }}>Welcome to your Amazon Customer Service Center, {user ? `${user.email}` : "Guest"}</h2>
                  <p class="subtext">What would you like help with today? You can quickly take care of most things here, or connect with us when needed.</p>
                  <div class="card-container">
                  <div class="card-wrapper">
                  <div class="fs-match-card" role="button" tabindex="0">
                  <div class="card-icon">
                  <img src="https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_order_v2.png" alt=""/>
                  </div><div class="center card-detail">
                    <div class="card-title ">A delivery, order or return</div></div></div></div>
                    <div class="card-wrapper"><div class="fs-match-card" role="button" tabindex="0">
                      <div class="card-icon">
                        <img src="https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_account_v2.png" alt=""/>
                        </div><div class="center card-detail">
                          <div class="card-title ">Account Settings and Privacy</div>
                          </div></div></div><div class="card-wrapper"><div class="fs-match-card" role="button" tabindex="0">
                            <div class="card-icon"><img src="https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_prime_v2.png" alt=""/></div><
                              div class="center fs-match-card-detail"><div class="fs-match-card-title full">Prime Related</div>
                              </div></div></div><div class="card-wrapper">
                                <div class="fs-match-card" role="button" tabindex="0">
                                  <div class="card-icon"><img src="https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_device_v2.png" alt=""/>
                                  </div><div class="center card-detail">
                                    <div class="card-title ">Devices - Tablet, FireTV, Echo etc.</div></div></div></div>
                                    <div class="card-wrapper">
                                      <div class="fs-match-card" role="button" tabindex="0">
                                      <div class="card-icon"><img src="https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_dcontent_v3.png" alt=""/>
                                      </div><div class="center card-detail">
                                        <div class="card-title ">eBooks, Prime Videos or Music</div></div></div></div>
                                        <div class="card-wrapper"><div class="fs-match-card" role="button" tabindex="0">
                                          <div class="card-icon">
                                            <img  style={{width:"120px",}} src="https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/souq.png" alt=""/>
                                          </div><div class="center card-detail"><div class="card-title ">Souq order related</div>
                                          </div></div></div>
                                          <div class="card-wrapper">
                                            <div class="fs-match-card" role="button" tabindex="0"
                                            ><div class="card-icon">
                                              <img src="https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_somethingelse_v3.png" alt=""/>
                                              </div><div class="center card-detail">
                                                <div class="card-title">Pre-Order Questions</div>
                                                </div></div></div></div>


          </div>
    </div>


    
  );
}

export default Help;
{/* 

                                                                                                <div >
                                                      <img src="https://images-eu.ssl-images-amazon.com/images/I/51pqD28a2WL._AC_UL254_SR254,254_.jpg" />
                                                      </div>
                                                      <span class="a-size-small">
                                                        <div >Generic Kitchen Digital Scale - 10 Kg</div></span>
                                                       
                                                          <div class="a-icon-row">
                                                          <i class="fa-regular fa-star">
                                                              </i>
                                                              <span class="a-size-small">480</span>
                                                          </div>
                                                            
                                                                
                                                                   
                                              <span >EGP&nbsp;98.00</span>
                                                                      <div class="a-row"><span class="a-size-mini a-color-base" dir="auto">Get it as soon as 
                                                <b>Thursday, April 27</b>
                                                </span></div> */}