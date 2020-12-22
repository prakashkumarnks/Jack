import React from 'react'
import './../assets/css/base.min.css'
import './../assets/css/style.css'
import './../assets/css/animate-min.css'
import './../assets/css/responsive.css'
import Header from '../component/Header'
import Footer from '../component/Footer'

import * as common from './../Common/Common'

class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            sess: ""
        };
    }

    validateForm() {
        return this.state.username.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }


    handleSubmit = event => {

        if (this.state.username === 'admin' && this.state.password === "12345") {
            localStorage.setItem("loggoed", this.state.username);
            alert("sucess");
        }
        else {
            alert("fail");
        }

        event.preventDefault();

    }


    render() {
        return (<div>
            <Header />

            <main>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="page-inner">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="section-title mt-3 mb-4 w-100 d-flex align-items-center justify-content-between">
                                                    <h5 className="">Sign In</h5>


                                                </div>
                                            </div>
                                            <form onSubmit={this.handleSubmit} method="POST">
                                                <div className=" d-flex mb-3">
                                                    <div className="row">
                                                        <div className="form-group col-md-4 col-6">
                                                            <input type="text" name="username" id="username" className="form-control"
                                                                value={this.state.username} onChange={this.handleChange} placeholder="User Name"></input>
                                                        </div>
                                                        <div className="form-group col-md-4 col-6">
                                                            <input type="text" name="password" id="password" className="form-control"
                                                                value={this.state.password} onChange={this.handleChange} placeholder="Password" ></input>
                                                        </div>
                                                        <div className="form-group col-md-2 col-6">
                                                            <input type="submit" name="submit" className="btn btn-info btn-md" value="Login"
                                                                block disabled={!this.validateForm()}   ></input>
                                                        </div>

                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
        );
    }
}
export default Login