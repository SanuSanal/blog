import { useState } from "react";

function ContactPage() {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked);
    };
    
    return (
        <section className="contact">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="contact-information">
                            <h2>Contact Me</h2>
                            <p>Let’s Connect! ✉️ Have a burning question, an idea to share, or just feel like saying hello? 
                                I’d love to hear from you! Whether you want to discuss the latest tech trends or send me your 
                                favorite cat video, this is the place to do it. Fill out the form below, and I promise to 
                                respond faster than your Wi-Fi speed (well, almost)! Your message is like a little gift that 
                                brightens my day—so let’s unwrap it together!</p>
                            <ul>
                                <li><i className="fa fa-map-marker" aria-hidden="true"></i>
                                    <p>Address: Dublin, Ireland</p>
                                </li>
                                <li><i className="fa fa-phone" aria-hidden="true"></i><a href="tel:+353-089 XXX XXXX">Phone: +353 - 089 XXX XXXX</a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="contact-form">
                            <h2>Contact Form</h2>
                            <form className="row" action="https://getform.io/f/anledowa" method="post">
                                <div className="col-md-6">
                                    <input type="text" className="form-control" name="name" id="exampleFormControlInput1" placeholder="Your Name" required/>
                                </div>
                                <div className="col-md-6">
                                    <input type="email" className="form-control" name="email" id="validationCustom02"  placeholder="Your Email" required/>
                                </div>
                                <div className="col-md-12">
                                    <textarea className="form-control" id="exampleFormControlTextarea1" 
                                        placeholder="Message here…" required></textarea>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="gridCheck" onChange={handleCheckboxChange}/>
                                        <label className="form-check-label" >
                                            I agree that my submitted data is being collected and stored.
                                        </label>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <button type="submit" className="btn btn-primary" disabled={!isChecked}>Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div id="map">
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactPage;