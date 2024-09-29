import React, { useState, useEffect } from "react";
import Badge from "@mui/material/Badge";
import { NavLink } from "react-router-dom";
import Menu from '@mui/material/Menu';
import { useSelector, useDispatch } from "react-redux";
import { Table } from "react-bootstrap";
import { INCREASE, DECREASE, DELETE } from '../redux/actions/action';

const Header = () => {
  const getdata = useSelector((state) => state.cartreducer.carts);
  const dispatch = useDispatch();
  const totalItems = getdata.reduce((total, item) => total + item.qnty, 0);


  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();

  useEffect(() => {
    navigate('/cards');
  }, [navigate]);

  const totalPrice = getdata.reduce((acc, item) => acc + (item.price * item.qnty), 0);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            React-redux cart
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            
          </div>
        </div>
        <Badge
          badgeContent={totalItems}
          color="primary"
          style={{ marginRight: "20px" }}
          id="demo-positioned-button"
          aria-controls={open ? 'demo-positioned-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <i
            className="fa-solid fa-cart-shopping"
            style={{ fontSize: 20, cursor: "pointer" }}
          ></i>
        </Badge>
      </nav>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        {getdata.length ? (
          <div className="card-details" style={{ width: "24rem", padding: 10 }}>
            <Table>
              <thead>
                <tr>
                  <th>Photo</th>
                  <th>Restaurant Name</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {getdata.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <img src={item.imgdata} style={{ width: "5rem", height: "5rem" }} alt={item.rname} />
                    </td>
                    <td>
                      <p>{item.rname}</p>
                      <p>Price: ₹{item.price * item.qnty}</p> 
                      <p>Quantity: {item.qnty}</p> 
                    </td>
                    <td>
                      <button onClick={() => dispatch(DECREASE(item.id))}>-</button>
                      <button onClick={() => dispatch(INCREASE(item.id))}>+</button>
                      <button onClick={() => dispatch(DELETE(item.id))}>Remove</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>

            <div className="text-center">
              <h4>Total Price: ₹{totalPrice}</h4>
            </div>
          </div>
        ) : (
          <div style={{ padding: '20px', position: 'relative', width: '250px' }}>
  
            <i
              className="fas fa-times"
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                cursor: 'pointer',
              }}
              onClick={handleClose}
            ></i>

            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <h4>Your cart is empty</h4>
            </div>
          </div>
        )}
      </Menu>
    </>
  );
};

export default Header;
