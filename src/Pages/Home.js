import React from 'react'
import './../assets/css/base.min.css'
import './../assets/css/style.css'
import './../assets/css/animate-min.css'
import './../assets/css/responsive.css'
import Header from '../component/Header'
import Footer from '../component/Footer'



class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = { timeingResult: ["11:00 AM", "01:00 PM", "06:00 PM", "07:10 PM"], timeBy: "",active : 0 }
    }

    searchTimeBy = (data,active) => {
        console.log("searchTimeBy")
        this.setState({ timeBy: data,active : active })
    }

    searchReaderBy = () => {
        return (<div className="tab-content mt-3 pb-3" id="nav-tabContent">
            <div className="tab-pane fade show active" id="nav-profile0" role="tabpanel" aria-labelledby="nav-profile-tab">
                <div className="list-group">
                    <li className="list-group-item"><b>JACKPOT {this.state.timeBy}</b></li>
                    <li className="list-group-item"><b>DRAW DATE ON. 2020-11-23</b></li>
                    <li className="list-group-item"><b>DRAW NO:</b> <strong></strong></li>
                    <li className="list-group-item"><b>1st Prize Rs 10,000 :</b> <span style={{ fontSize: "18px", color: "#388505", fontWeight: "bold" }}></span></li>
                    <li className="list-group-item"><b>2nd Prize Rs 1,000 :</b> <span style={{ fontSize: "18px", color: "#388505", fontWeight: "bold" }}></span></li>
                    <li className="list-group-item"><b>3rd Prize Rs 100 :</b> <span style={{ fontSize: "18px", color: "#388505", fontWeight: "bold" }}></span></li>
                </div>
            </div>
        </div>)
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
                                            <div className="section-title mt-3 mb-4 w-100 d-flex align-items-center justify-content-between">
                                                <h5 className="">Today Results</h5>
                                            </div>
                                            <nav>
                                                <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                                                    {this.state.timeingResult.map((data, index) => (
                                                        <span key={`-timeDisplay-${data}`}
                                                            className={`nav-item nav-link show  ${this.state.active === index ? `active` : null }` }
                                                            id="nav-profile-tab"
                                                            data-toggle="tab"
                                                            onClick={() => this.searchTimeBy(data,index)}
                                                        >
                                                            {data}
                                                        </span>
                                                    ))}

                                                </div>
                                            </nav>
                                            {this.searchReaderBy()}
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
export default Home;