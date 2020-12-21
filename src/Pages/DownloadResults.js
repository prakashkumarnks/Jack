import React from 'react'
import './../assets/css/base.min.css'
import './../assets/css/style.css'
import './../assets/css/animate-min.css'
import './../assets/css/responsive.css'
import Header from '../component/Header'
import Footer from '../component/Footer'

import * as common from './../Common/Common'

class DownloadResults extends React.Component {

    constructor(props) {
        super(props)
        this.state = { displayData: [] }
    }

    searchTimeBy = (data, active) => {
        console.log("searchTimeBy")
        this.setState({ timeBy: data, active: active })
    }

    componentDidMount() {
        common.httpverbsget('DownloadResults', null).then(data => {
            console.log("Result", data)
            this.setState({ displayData: data.displayData });
        })
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
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="section-title mt-3 mb-4 w-100 d-flex align-items-center justify-content-between">
                                                    <h5 className="">Download Results</h5>
                                                    <form method="post">
                                                        <input type="submit" name="generate_pdf" className="btn btn-green" value="Download PDF" />
                                                    </form>

                                                </div>
                                            </div>
                                            <form name="search_form" action="http://assambumperlot.com/download-results.php" method="GET">
                                                <div className=" d-flex mb-3">
                                                    <div className="row">
                                                        <div className="form-group col-md-4 col-6">
                                                            <input readonly className="datePicker form-control mr-2" placeholder="From Date" name="from_date" value="" />
                                                        </div>
                                                        <div className="form-group col-md-4 col-6">
                                                            <input readonly className="datePicker form-control mr-2" placeholder="To Date" name="to_date" value="" />
                                                        </div>
                                                        <div className="form-group col-md-2 col-6">
                                                            <button name="search" value="searchSubmit" type="submit" className="btn btn-green mr-2 d-block w-100">Search</button>

                                                        </div>
                                                        <div className="form-group col-md-2 col-6">
                                                            <a className="btn btn-red mr-2 d-block w-100" href="download-results.html">Reset</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                            <div className="table-responsive">
                                                <table className='table'>
                                                    <thead>
                                                        <tr>
                                                            <th>DRAW DATE ON</th>
                                                            <th>11:00 AM</th>
                                                            <th>01:00 PM</th>
                                                            <th>06:00 PM</th>
                                                            <th>07:15 PM</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>

                                                        {this.state.displayData.map((data, index) => (
                                                            <tr>
                                                                <td>{data.InsertedDateTime}</td>
                                                                <td> 557</td>
                                                                <td> 681</td>
                                                                <td> 779</td>
                                                                <td> 461</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                            <ul className='pagination'><li className='page-item'><a className='page-link active' href='download-results2679.html?page=1'>1</a></li><li className='page-item'><a className='page-link ' href='download-results4658.html?page=2'>2</a></li><li className='page-item'><a className='page-link ' href='download-results9ba9.html?page=3'>3</a></li><li className='page-item'><a className='page-link ' href='download-resultsfdb0.html?page=4'>4</a></li><li className='page-item'><a className='page-link ' href='download-resultsaf4d.html?page=5'>5</a></li><li className='page-item'><a className='page-link ' href='download-resultsc575.html?page=6'>6</a></li><li className='page-item'><a className='page-link ' href='download-results235c.html?page=7'>7</a></li><li className='page-item'><a className='page-link ' href='download-resultsfdfa.html?page=8'>8</a></li><li className='page-item'><a className='page-link ' href='download-results0b08.html?page=9'>9</a></li><li className='page-item'><a className='page-link ' href='download-results1448.html?page=10'>10</a></li><li className='page-item'><a className='page-link ' href='download-results1c8b.html?page=11'>11</a></li><li className='page-item'><a className='page-link ' href='download-resultsce37.html?page=12'>12</a></li><li className='page-item'><a className='page-link ' href='download-results8c93.html?page=13'>13</a></li><li className='page-item'><a className='page-link ' href='download-resultsa7f1.html?page=14'>14</a></li><li className='page-item'><a className='page-link ' href='download-results5760.html?page=15'>15</a></li><li className='page-item'><a className='page-link ' href='download-results42a7.html?page=16'>16</a></li><li className='page-item'><a className='page-link ' href='download-results5c43.html?page=17'>17</a></li><li className='page-item'><a className='page-link ' href='download-results9683.html?page=18'>18</a></li><li className='page-item'><a className='page-link ' href='download-results7537.html?page=19'>19</a></li><li className='page-item'><a className='page-link ' href='download-resultsf62c.html?page=20'>20</a></li><li className='page-item'><a className='page-link ' href='download-resultse4a7.html?page=21'>21</a></li><li className='page-item'><a className='page-link ' href='download-results3c09.html?page=22'>22</a></li><li className='page-item'><a className='page-link ' href='download-results89ae.html?page=23'>23</a></li><li className='page-item'><a className='page-link ' href='download-results1d82.html?page=24'>24</a></li><li className='page-item'><a className='page-link ' href='download-results8c06.html?page=25'>25</a></li><li className='page-item'><a className='page-link ' href='download-results19d2.html?page=26'>26</a></li><li className='page-item'><a className='page-link ' href='download-results2459.html?page=27'>27</a></li><li className='page-item'><a className='page-link ' href='download-resultse459.html?page=28'>28</a></li><li className='page-item'><a className='page-link ' href='download-results219f.html?page=29'>29</a></li><li className='page-item'><a className='page-link ' href='download-resultsb385.html?page=30'>30</a></li><li className='page-item'><a className='page-link ' href='download-resultsdcf3.html?page=31'>31</a></li><li className='page-item'><a className='page-link ' href='download-resultsfa9c.html?page=32'>32</a></li><li className='page-item'><a className='page-link ' href='download-resultsbd1b.html?page=33'>33</a></li><li className='page-item'><a className='page-link ' href='download-resultse51f.html?page=34'>34</a></li><li className='page-item'><a className='page-link ' href='download-resultse24e.html?page=35'>35</a></li><li className='page-item'><a className='page-link ' href='download-results09f5.html?page=36'>36</a></li><li className='page-item'><a className='page-link ' href='download-resultsf497.html?page=37'>37</a></li><li className='page-item'><a className='page-link ' href='download-results763c.html?page=38'>38</a></li><li className='page-item'><a className='page-link ' href='download-results8b08.html?page=39'>39</a></li><li className='page-item'><a className='page-link ' href='download-resultsce8a.html?page=40'>40</a></li><li className='page-item'><a className='page-link ' href='download-results6c2f.html?page=41'>41</a></li>
                                            </ul>
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
export default DownloadResults