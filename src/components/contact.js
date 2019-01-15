import React, { Component } from "react";
import axios from 'axios';
import "../css/contact.css";

const API_PATH = 'http://localhost/react-contact-form/api/contact/index.php';

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            lname: '',
            email: '',
            message: '',
            mailSent: false,
            error: null
        }

        this.handleFormSubmit.bind(this);
    }

    handleFormSubmit = e => {
        e.preventDefault();
        axios({
            method: 'post',
            url: `${API_PATH}`,
            headers: { 'content-type': 'application/json' },
            data: this.state
        })
            .then(result => {
                this.setState({
                    mailSent: result.data.sent
                })
            })
            .catch(error => this.setState({ error: error.message }));
    };



    render() {
        return (
            <div className="contact container">
                <form id="contact-form" action="#">

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
                                        value={this.state.email}
                                        onChange={e => this.setState({ email: e.target.value })}
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
                                    onClick={e => this.handleFormSubmit(e)}
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
                            <div className="sucsess">Thank you for contcting me.</div>
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

export default Contact;