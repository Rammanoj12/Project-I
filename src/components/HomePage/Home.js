import HomeObjects from "./HomeObjects";
import "./Home.css";
import { useState, useEffect } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { VscAccount } from "react-icons/vsc";
import { FaShoppingCart } from "react-icons/fa";


const Home = () => {
  const [count, setCount] = useState([
    { id: 1, count: 0, name: "Necklace" },
    { id: 2, count: 0, name: "Bangles" },
    { id: 3, count: 0, name: "Bangles" },
    { id: 4, count: 0, name: "Necklace" },
    { id: 5, count: 0, name: "Necklace" },
    { id: 6, count: 0, name: "Necklace" },
    { id: 7, count: 0, name: "Necklace" },
    { id: 8, count: 0, name: "Bangles" },
  ]);

  const [quantity, setQuantity] = useState([
    { id: 1, quantity: 10, initialQuantity: 10 },
    { id: 2, quantity: 20, initialQuantity: 20 },
    { id: 3, quantity: 5, initialQuantity: 5 },
    { id: 4, quantity: 2, initialQuantity: 2 },
    { id: 5, quantity: 50, initialQuantity: 50 },
    { id: 6, quantity: 6, initialQuantity: 6 },
    { id: 7, quantity: 100, initialQuantity: 100 },
    { id: 8, quantity: 7, initialQuantity: 7 },
  ]);

  const [display, setDisplay] = useState([
    { id: 1, count: 0, name: "Necklace" },
    { id: 2, count: 0, name: "Bangles" },
    { id: 3, count: 0, name: "Bangles" },
    { id: 4, count: 0, name: "Necklace" },
    { id: 5, count: 0, name: "Necklace" },
    { id: 6, count: 0, name: "Necklace" },
    { id: 7, count: 0, name: "Necklace" },
    { id: 8, count: 0, name: "Bangles" },
  ]);

  const [cartCount, setCartCount] = useState(0);
  const [fix, setFix] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const items = HomeObjects();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setFix(true);
      } else {
        setFix(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const increment = (id) => {
    const itemQuantity = quantity.find((e) => e.id === id)?.quantity;
    if (itemQuantity && itemQuantity > 0) {
      const updatedCount = count.map((element) => {
        if (element.id === id) {
          return { ...element, count: element.count + 1 };
        }
        return element;
      });

      const updatedQuantity = quantity.map((e) => {
        if (e.id === id) {
          return { ...e, quantity: e.quantity - 1 };
        }
        return e;
      });

      setCount(updatedCount);
      setQuantity(updatedQuantity);
    }
  };

  const decrement = (id) => {
    const countItem = count.find((c) => c.id === id);
    if (countItem && countItem.count > 0) {
      const updatedCount = count.map((element) => {
        if (element.id === id) {
          return { ...element, count: element.count - 1 };
        }
        return element;
      });

      const updatedQuantity = quantity.map((e) => {
        if (e.id === id) {
          return { ...e, quantity: e.quantity + 1 };
        }
        return e;
      });

      setCount(updatedCount);
      setQuantity(updatedQuantity);
    }
  };

  const displayBangles = () => {
    const banglesItems = count.filter((item) => item.name === "Bangles");
    setDisplay(banglesItems);
  };

  const displayNecklace = () => {
    const necklaceItems = count.filter((item) => item.name === "Necklace");
    setDisplay(necklaceItems);
  };

  const displayAll = () => {
    setDisplay(count);
  };

  const addToCart = (id) => {
    const countItem = count.find((c) => c.id === id);
    if (countItem && countItem.count > 0) {
      setCartCount(cartCount + countItem.count);
      const updatedCount = count.map((element) => {
        if (element.id === id) {
          return { ...element, count: 0 };
        }
        return element;
      });
      setCount(updatedCount);
    }
  };

  const resetToCart = (id) => {
    const itemQuantity = quantity.find((c) => c.id === id)?.initialQuantity;
    const updatedQuantity = quantity.map((element) => {
      if (element.id === id) {
        return { ...element, quantity: itemQuantity };
      }
      return element;
    });

    const updatedCount = count.map((element) => {
      if (element.id === id) {
        return { ...element, count: 0 };
      }
      return element;
    });

    setQuantity(updatedQuantity);
    setCount(updatedCount);
    setCartCount(0);
  };

  return (
    <>
      <nav className={fix ? 'navbar-container fixed' : 'navbar-container'}>
        <div className="navbar-left">
          <img
            src='https://th.bing.com/th?id=OIP.unBf0CFmwfB8TfJQ3OHGgQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'
            className="beauty-image"
            alt="No pic"
          />
          <input
            type="search"
            placeholder="Search for Bangles,Necklace..."
            className="searchBox"
            onChange={(e) => {
              if (e.target.value === 'Bangles') {
                displayBangles();
              } else if (e.target.value === 'Necklace') {
                displayNecklace();
              } else {
                displayAll();
              }
            }}
          ></input>
        </div>
        <div className="navbar-right">
          <ol className={menuOpen ? 'menu open' : 'menu'}>
            <li className="animated-underline" onClick={() => displayBangles()}>Bangles</li>
            <li className="animated-underline" onClick={() => displayNecklace()}>Necklace</li>
            <li className="animated-underline" onClick={() => displayAll()}>All</li>
          </ol>
          <div className="navbar-icons">
             <FaShoppingCart 
             className="item-image"
              alt="No pic"
              title="Shopping Cart"
            /> 
            <p id="cartitems">{cartCount}</p>
            <VscAccount
              className="item-image"
              alt="No pic"
              title="Profile"
            />
         
          </div>
          <FiAlignJustify className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} />
      
        </div>
      </nav>

      <div className="cardContainer">
        {display.map((ele) => {
          const item = items.find((item) => ele.id === item.id);
          return (
            <div className="itemContainer" key={ele.id}>
              <img src={item.image_url} className="image1" alt={`Item ${ele.id}`} title="Jewellery" />
              <div className="description">
                <p className="passage1">Price: {item.price}/-</p>
                <p id="reduce">
                  Quantity: {quantity.find((c) => c.id === ele.id)?.quantity > 0
                    ? quantity.find((c) => c.id === ele.id)?.quantity
                    : <span className="error">*Items are out of stock</span>}
                </p>
                <button
                  className="quantityBtn"
                  onClick={() => increment(ele.id)}
                  disabled={quantity.find((c) => c.id === ele.id)?.quantity <= 0}
                >+</button>
                <p id="quantity">{count.find((c) => c.id === ele.id)?.count || 0}</p>
                <button
                  className="quantityBtn"
                  onClick={() => decrement(ele.id)}
                >-</button>
                <button className="cartBtn" onClick={() => addToCart(ele.id)}>Add To cart</button>
                <button className="cartBtn" onClick={() => resetToCart(ele.id)}>Clear</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
