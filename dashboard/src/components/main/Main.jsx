import React from 'react'
import './main.css'
import '../../style.css'

function Main() {

    return (
        <main>
            <h1>Dashboard</h1>

            <div className="date">
                <input type="date"/>
            </div>

            <div className="insights">
                <div className="sales">
                    <span className="material-symbols-outlined">
                        local_mall
                    </span>
                    <div className="middle">
                        <div className="left">
                            <h3>Total Sales</h3>
                            <small className="text-muted">Last 24 Hours</small>
                            <h1>$32.564</h1>
                        </div>
                    
                        <div className="progress">
                            <div className="percent-sales">
                                <svg>
                                    <circle cy="38" cx="38" r="36" className="bgcircle"></circle>
                                    <circle cy="38" cx="38" r="36" className="circle"> </circle>
                                </svg>
                            </div>
                            <div className="number">
                                <p>81%</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="expenses">
                    <span className="material-icons">
                        money_off
                    </span>
                    <div className="middle">
                        <div className="left">
                            <h3>Total Expenses</h3>
                            <small className="text-muted">Last 24 Hours</small>
                            <h1>$18.230</h1>
                        </div>
                    
                        <div className="progress">
                            <svg>
                                <circle cy="38" cx="38" r="36" className="bgcircle"></circle>
                                <circle cy="38" cx="38" r="36" className="circle"> </circle>
                                
                            </svg> 
                            <div className="number">
                                <p>64%</p>
                            </div>
                        </div>
 
                    </div>
                </div>

                <div className="income">
                    <span className="material-icons">
                        add_chart
                    </span>
                    <div className="middle">
                        <div className="left">
                            <h3>Total Income</h3>
                            <small className="text-muted">Last 24 Hours</small>
                            <h1>$14.334</h1>
                        </div>
                    
                        <div className="progress">
                            <div className="percent-income">
                                <svg>
                                    <circle cy="38" cx="38" r="36" className="bgcircle"></circle>
                                    <circle cy="38" cx="38" r="36" className="circle"> </circle>
                                    
                                </svg>
                            </div>
                            <div className="number">
                                <p>46%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="recent-orders">
                <h2>Recent Orders</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Product Number</th>
                            <th>Payment</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Smart Watch</td>
                            <td>48639</td>
                            <td>Due</td>
                            <td className="warning">Pending</td>
                            <td className="primary">Details</td>
                        </tr>
                        <tr>
                            <td>Smart Watch</td>
                            <td>48639</td>
                            <td>Due</td>
                            <td className="warning">Pending</td>
                            <td className="primary">Details</td>
                        </tr>
                        <tr>
                            <td>Smart Watch</td>
                            <td>48639</td>
                            <td>Due</td>
                            <td className="warning">Pending</td>
                            <td className="primary">Details</td>
                        </tr>
                        <tr>
                            <td>Smart Watch</td>
                            <td>48639</td>
                            <td>Due</td>
                            <td className="warning">Pending</td>
                            <td className="primary">Details</td>
                        </tr>
                        <tr>
                            <td>Smart Watch</td>
                            <td>48639</td>
                            <td>Due</td>
                            <td className="warning">Pending</td>
                            <td className="primary">Details</td>
                        </tr>
                    </tbody>
                </table>

                <a href="#">Show All</a>
            </div>
        </main>
    )
    }

export default Main