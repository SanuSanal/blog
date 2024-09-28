function ContactPage() {
    return (
        <section className="contact">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="contact-information">
                            <h2>Contact Me</h2>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
                                et dolore magna aliquyam erat, sed diam voluptua. At vero eos accusam et justo duo dolores ea rebum Stet
                                clita.</p>
                            <ul>
                                <li><i className="fa fa-map-marker" aria-hidden="true"></i>
                                    <p>Address: Lorem 142 Str., 2352, Ipsum, State, USA</p>
                                </li>
                                <li><i className="fa fa-phone" aria-hidden="true"></i><a href="tel:+33-257634 534">Phone: +33-257634 534</a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="contact-form">
                            <h2>Contact Form</h2>
                            <form className="row" action="https://fabform.io/f/9APkcbe" method="post">
                                <div className="col-md-6">
                                    <input type="text" className="form-control" name="name" id="exampleFormControlInput1" placeholder="Your Name" />
                                </div>
                                <div className="col-md-6">
                                    <input type="email" className="form-control" name="email" id="validationCustom02"  placeholder="Your Email" />
                                </div>
                                <div className="col-md-12">
                                    <textarea className="form-control" id="exampleFormControlTextarea1" 
                                        placeholder="Message here…"></textarea>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                                        <label className="form-check-label" >
                                            I agree that my submitted data is being collected and stored.
                                        </label>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <button type="submit" className="btn btn-primary">Send Message</button>
                                </div>
                            </form>
                            <p className="contact-form-generator">
                                <strong>** </strong> <a href="https://fabform.io/" target="_blank">Static website forms</a>
                            </p>
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