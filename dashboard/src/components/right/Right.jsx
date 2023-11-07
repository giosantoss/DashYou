import React,{useState} from 'react'
import './right.css'
import '../../style.css'
import User from '../../assets/user.jpg'

function Right(props) {

  return (
  <div className="right">
    <div className="top">
        <button onClick={props.showMenu} id="menu-btn">
            <span className="material-symbols-outlined">
                menu
            </span>
        </button>
        <div onClick={props.onToggleTheme} className="theme-toggler">
            <span  className={`material-symbols-outlined ${props.theme === false ? 'active' : ''}`}>
                light_mode
            </span>
            <span className={`material-symbols-outlined ${props.theme ? 'active' : ''}`}>
                nightlight
            </span>
        </div>
        <div className="profile">
            <div className="info">
                <div className="user">
                    <p>Hey, <strong>User</strong></p>
                    <small className="text-muted">Admin</small>
                </div>
                <div className="profile-photo">
                    <img src={User}/>
                </div>
            </div>
        </div>
    </div>

    <div className="recent-updates">
        <h2>Recent Updates</h2>
        <div className="updates">
            <div className="update">
                <div className="profile-photo">
                    <img src={User}/>
                </div>
                <div className="message">
                    <p><strong>User</strong> receivede his order</p>
                    <small className="text-muted">10 minutes ago</small>
                </div>
            </div>
            <div className="update">
                <div className="profile-photo">
                    <img src={User}/>
                </div>
                <div className="message">
                    <p><strong>User</strong> receivede his order</p>
                    <small className="text-muted">25 minutes ago</small>
                </div>
            </div>
            <div className="update">
                <div className="profile-photo">
                    <img src={User}/>
                </div>
                <div className="message">
                    <p><strong>User</strong> receivede his order</p>
                    <small className="text-muted">1 hour ago</small>
                </div>
            </div>
        </div>
    </div>

    <div className="analytics-title">
        <h2>Sales Analytics</h2>
        <small className="text-muted">Last 24 hours</small>
    </div>
    <div className="sales-analytics">
        <div className="online-orders analytics">
            <span className="material-icons">
                shopping_cart_checkout
            </span>
            <h3>ONLINE ORDERS</h3>
            <span className="success"><strong>+39%</strong></span>
            <h3>3945</h3>
        </div>
        <div className="offline-orders analytics">
            <span className="material-icons">
                production_quantity_limits
            </span>
            <h3>OFFLINE ORDERS</h3>
            <span className="danger"><strong>-14%</strong></span>
            <h3>1048</h3>
        </div>
        <div className="new-customers analytics">
            <span className="material-icons">
                group_add
            </span>
            <h3>NEW CUSTOMERS</h3>
            <span className="success">+27%</span>
            <h3>921</h3>
        </div>
    </div>
    <div className="add-product">
        <span className="material-symbols-outlined">
            new_label
        </span>
        <h3>Add Product</h3>
    </div>
</div>
  )
}

export default Right