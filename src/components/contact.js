import React, { Component } from "react";
import "../css/contact.css";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      senderEmail: "",
      message: "",
      mailSent: false,
      error: null
    };

    this.handleFormSubmit.bind(this);
  }

  handleFormSubmit = event => {
    event.preventDefault();

    const receiverEmail = "merekrissy@gmail.com";
    const template = "template_ddz3ZhfC";

    // const {
    //     REACT_APP_EMAILJS_RECEIVER: receiverEmail,
    //     REACT_APP_EMAILJS_TEMPLATEID: template
    // } = this.props.env;

    this.sendMessage(
      template,
      this.state.senderEmail,
      this.state.name,
      this.state.phone,
      receiverEmail,
      this.state.message
    );
  };

  sendMessage(templateId, senderEmail, name, phone, receiverEmail, message) {
    window.emailjs
      .send("mailgun", templateId, {
        senderEmail,
        receiverEmail,
        name,
        phone,
        message
      })
      .then(res => {
        // console.log('message result', res)
        this.setState({
          name: "",
          phone: "",
          senderEmail: "",
          message: "",
          error: true
        });
        if (res.status === 200) {
          this.setState({
            mailSent: true,
            error: null
          });
        } else {
          this.setState({
            error: true
          });
        }
      });

    // Handle errors here however you like
    // .catch(
    // 	err => console.error("Failed to send message. Error: ", err);
    // 	this.setState({
    //     error: true
    //   })
    // );
  }

  render() {
    return (
      <div className="hero-contact-container">
        <div className="contact container">
          <div className="header animated fadeInDownBig">
            <h1 className="contact-header">Send Me a Message</h1>
          </div>
          <form id="contact-form" onSubmit={e => this.handleFormSubmit(e)}>
            <div className="messages" />

            <div className="controls">
              <div className="row">
                <div className="col-md-6 animated fadeInLeftBig">
                  <div className="form-group">
                    {/* <label htmlFor="form_name">Firstname *</label> */}
                    <input
                      id="form_name"
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Name *"
                      required="required"
                      data-error="Name is required."
                      value={this.state.name}
                      onChange={e => this.setState({ name: e.target.value })}
                    />
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="col-md-6 animated fadeInRightBig">
                  <div className="form-group">
                    {/* <label htmlFor="form_lastname">Lastname *</label> */}
                    <input
                      id="form_phone"
                      type="text"
                      name="phone"
                      className="form-control"
                      placeholder="Phone"
                      value={this.state.phone}
                      onChange={e => this.setState({ phone: e.target.value })}
                    />
                    <div className="help-block with-errors" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 animated zoomIn">
                  <div className="form-group">
                    {/* <label htmlFor="form_email">Email *</label> */}
                    <input
                      id="form_email"
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Email *"
                      required="required"
                      data-error="Valid email is required."
                      value={this.state.senderEmail}
                      onChange={e =>
                        this.setState({ senderEmail: e.target.value })
                      }
                    />
                    <div className="help-block with-errors" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 animated fadeInUp">
                  <div className="form-group message-form">
                    {/* <label htmlFor="form_message">Message *</label> */}
                    <textarea
                      id="form_message"
                      name="message"
                      className="form-control"
                      placeholder="Write your message here. *"
                      rows="4"
                      required="required"
                      data-error="Please, leave me a message."
                      value={this.state.message}
                      onChange={e => this.setState({ message: e.target.value })}
                    />
                    <div className="help-block with-errors" />
                  </div>
                </div>
              </div>
              {/* Submit button */}
              <div className="row required-text animated fadeInUp">
                <div className="col-md-12 required-text">
                  <p className="required-text required">
                    <strong>*</strong> These fields are required.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 send-button animated fadeInUp">
                  <input
                    type="submit"
                    className="btn btn-lg btn-secondary btn-send"
                    value="Send message"
                  />
                </div>
              </div>
            </div>
            <div className="submit-response">
              {this.state.mailSent && (
                <div className="success animated tada">
                  Thank you for contacting me.
                </div>
              )}
              {this.state.error && (
                <div className="error animated bounceInLeft">
                  Sorry we had some problems.
                </div>
              )}
            </div>
          </form>
          <div className="row contact-info-row animated fadeInUpBig">
            <div className="col-md-4 contact-info-col">
              <i className="fas fa-envelope-square contact-icon" />
              <p className="contact-info">mereksmith@hotmail.com</p>
            </div>
            <div className="col-md-4 contact-info-col">
              <i className="fas fa-phone-square contact-icon" />
              <p className="contact-info">801-856-3735</p>
            </div>
            <div className="col-md-4 contact-info-col">
              <i className="fas fa-map-marker-alt contact-icon" />
              <p className="contact-info">Salt Lake City, Utah, USA</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
