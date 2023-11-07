import React from 'react'
import './aside.css'
import '../../style.css'
import DashLogo from '../../assets/dashlogo.png'

function Aside(props) {

  return (
    <aside>
        <div className="top">
            <div className="logo">
                <img style={{borderRadius: '0 0.6rem'}} src={DashLogo} alt="Logo"/>
                <h1 style={{margin: "auto"}}>DASH<span style={{color: "#FF5437"}}>YOU</span></h1>
            </div>
            <div>
                <div className="close" id="close-btn" onClick={props.closeMenu}>
                    <span className="material-symbols-outlined">
                        cancel
                    </span>
                </div>                   
            </div>
        </div>
        <div className="sidebar">
            <a href="#"  className="active">
                <span className="material-symbols-outlined">
                    empty_dashboard
                </span>
                <h3>Dashboard</h3>
            </a>

            <a href="#">
                <span className="material-symbols-outlined">
                    person
                </span>
                <h3>Customers</h3>
            </a>

            <a href="#">
                <span className="material-symbols-outlined">
                    receipt_long
                </span>
                <h3>Orders</h3>
            </a>

            <a href="#">
                <span className="material-symbols-outlined">
                    monitoring
                </span>
                <h3>Analytics</h3>
            </a>

            <a href="#">
                <span className="material-symbols-outlined">
                    mail
                </span>
                <h3>Messages</h3>
                <span className="message-count">26</span>
            </a>

            <a href="#">
                <span className="material-symbols-outlined">
                    inventory
                </span>
                <h3>Products</h3>
            </a>

            <a href="#">
                <span className="material-symbols-outlined">
                    report
                </span>
                <h3>Reports</h3>
            </a>

            <a href="#">
                <span className="material-symbols-outlined">
                    settings
                </span>
                <h3>Settings</h3>
            </a>

            <a href="#">
                <span className="material-symbols-outlined">
                    add
                </span>
                <h3>Add Product</h3>
            </a>

            <a href="#">
                <span className="material-symbols-outlined">
                    logout
                </span>
                <h3>Logout</h3>
            </a>
        </div>
    </aside>
  )
}

export default Aside