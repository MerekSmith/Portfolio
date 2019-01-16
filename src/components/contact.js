import React, { Component } from "react";
// import axios from 'axios';
import "../css/contact.css";
import PropTypes from 'prop-types';


export default class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            lname: '',
            senderEmail: '',
            message: '',
            mailSent: false,
            error: null
        }

        this.handleFormSubmit.bind(this);

    }





    handleFormSubmit = event => {
        event.preventDefault();

        const receiverEmail = 'merekrissy@gmail.com'
        const template = 'template_ddz3ZhfC';

        // const {
        //     REACT_APP_EMAILJS_RECEIVER: receiverEmail,
        //     REACT_APP_EMAILJS_TEMPLATEID: template
        // } = this.props.env;

        this.sendMessage(
            template,
            this.state.senderEmail,
            this.state.fname,
            this.state.lname,
            receiverEmail,
            this.state.message
        );

        this.setState({
            mailSent: true
        });
    };

    sendMessage(templateId, senderEmail, fname, lname, receiverEmail, message) {
        window.emailjs
            .send('mailgun', templateId, {
                senderEmail,
                receiverEmail,
                fname,
                lname,
                message
            })
            .then(res => {
                this.setState({
                    formEmailSent: true,
                    fname: '',
                    lname: '',
                    senderEmail: '',
                    message: ''
                });
            })
            // Handle errors here however you like
            .catch(err => console.error('Failed to send message. Error: ', err));
    }


    render() {
        return (
            <div className="contact container">
                <form id="contact-form" onSubmit={e => this.handleFormSubmit(e)}>

                    <div className="messages"></div>

                    <div className="controls">

                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="form_name">Firstname *</label>
                                    <input
                                        id="form_name"
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        placeholder="Please enter your firstname *"
                                        required="required"
                                        data-error="Firstname is required."
                                        value={this.state.fname}
                                        onChange={e => this.setState({ fname: e.target.value })}
                                    />
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="form_lastname">Lastname *</label>
                                    <input
                                        id="form_lastname"
                                        type="text"
                                        name="surname"
                                        className="form-control"
                                        placeholder="Please enter your lastname *"
                                        required="required"
                                        data-error="Lastname is required."
                                        value={this.state.lname}
                                        onChange={e => this.setState({ lname: e.target.value })}
                                    />
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label htmlFor="form_email">Email *</label>
                                    <input
                                        id="form_email"
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        placeholder="Please enter your email *"
                                        required="required"
                                        data-error="Valid email is required."
                                        value={this.state.senderEmail}
                                        onChange={e => this.setState({ senderEmail: e.target.value })}
                                    />
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label htmlFor="form_message">Message *</label>
                                    <textarea
                                        id="form_message"
                                        name="message"
                                        className="form-control"
                                        placeholder="Message for me *"
                                        rows="4" required="required"
                                        data-error="Please, leave us a message."
                                        value={this.state.message}
                                        onChange={e => this.setState({ message: e.target.value })}
                                    ></textarea>
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <input
                                    type="submit"
                                    className="btn btn-success btn-send"
                                    value="Send message"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <p className="text-muted">
                                    <strong>*</strong> These fields are required.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        {this.state.mailSent &&
                            <div className="sucsess">Thank you for contacting me.</div>
                        }
                        {this.state.error &&
                            <div className="error">Sorry we had some problems.</div>
                        }
                    </div>
                </form>
            </div>
        );
    }
}

// Contact.propTypes = {
//     env: PropTypes.object.isRequired
//   };

