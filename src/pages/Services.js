import React from 'react';
import "../App.css"

function Services() {
  return (
    <>
        <div className="section">
        <div className="container">
            <div className="flex-container">
                <div className="section-left">
                    <h3>Subscribe To Our Newsletter</h3>
                </div>

                <div className="section-right">
                    <input type="text" placeholder="Enter Email..." />
                    <input type="button" value="Subscribe" id="button" />
                </div>
            </div>
        </div>
        </div>

        <div className="services-main">
        <div className="container">
            <div className="flex-container">
                <div className="services-left">
                    <h1>Services</h1>
                    <ul className="services-ul">
                        <li>
                            <h3>Website Design</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente amet tempora
                                consequuntur ab architecto? Ipsa nemo delectus ratione, beatae quas nihil!</p>
                            <p>Pricing:$1.000 - $3.000</p>
                        </li>
                        <li>
                            <h3>Website Maintance</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente amet tempora
                                consequuntur ab architecto? Ipsa nemo delectus ratione, beatae quas nihil!</p>
                            <p>Pricing:$250 per month</p>
                        </li>
                        <li>
                            <h3>Website Hosting</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente amet tempora
                                consequuntur ab architecto? Ipsa nemo delectus ratione, beatae quas nihil!</p>
                            <p>Pricing:$25 per month</p>
                        </li>
                    </ul>
                </div>
                <div className="services-right">
                    <form action="">
                        <h2>Get A Quote</h2>
                        <div className="input">
                            <label for="name">Name</label>
                            < br />
                            <input type="text" placeholder="Name"/>
                        </div>
                        <div className="input">
                            <label for="email">Email</label>
                            <br />
                            <input type="text" placeholder="Email Adress"/>
                        </div>
                        <div class="input">
                            <label for="message">Message</label>
                            <br />
                            <input type="text" placeholder="Message" />
                            <br /> <br />
                            <button>Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default Services