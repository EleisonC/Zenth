import React, { useState } from 'react';
import './NavigationBar.css';

function NavigationBar() {
  const [onHover, setHover] = useState(false);
  const [onHoverValue, setHoverValue] = useState('newRelease');
  const fakeMenudata = {
    newRelease: {
      Clothes: ['Clothes' , 'Clothes','Clothes','Clothes'],
      Shoes: ['Clothes' , 'Clothes','Clothes','Clothes'],
      Accessories: ['Clothes' , 'Clothes','Clothes','Clothes'],
      pJackets: ['Clothes' , 'Clothes','Clothes','Clothes'],
      Jaackets: ['Clothes' , 'Clothes','Clothes','Clothes'],
      Jaqckets: ['Clothes' , 'Clothes','Clothes','Clothes']
    },
    men: { 
      Clothes: ['Clothes' , 'Clothes','Clothes','Clothes'],
      Shoes: ['Clothes' , 'Clothes','Clothes','Clothes'],
      Accessories: ['Clothes' , 'Clothes','Clothes','Clothes'],
      Jackets: ['Clothes' , 'Clothes','Clothes','Clothes'],
    },
    women: { 
      Clothes: ['Clothes' , 'Clothes','Clothes','Clothes'],
      Shoes: ['Clothes' , 'Clothes','Clothes','Clothes'],
      Accessories: ['Clothes' , 'Clothes','Clothes','Clothes'],
      Jackets: ['Clothes' , 'Clothes','Clothes','Clothes'],
    },
    kids: { 
      Clothes: ['Clothes' , 'Clothes','Clothes','Clothes'],
      Shoes: ['Clothes' , 'Clothes','Clothes','Clothes'],
      Accessories: ['Clothes' , 'Clothes','Clothes','Clothes'],
      Jackets: ['Clothes' , 'Clothes','Clothes','Clothes'],
    },
    customize: { 
      Clothes: ['Clothes' , 'Clothes','Clothes','Clothes'],
      Shoes: ['Clothes' , 'Clothes','Clothes','Clothes'],
      Accessories: ['Clothes' , 'Clothes','Clothes','Clothes'],
      Jackets: ['Clothes' , 'Clothes','Clothes','Clothes'],
    },
    sale: { 
      Clothes: ['Clothes' , 'Clothes','Clothes','Clothes'],
      Shoes: ['Clothes' , 'Clothes','Clothes','Clothes'],
      Accessories: ['Clothes' , 'Clothes','Clothes','Clothes'],
      Jackets: ['Clothes' , 'Clothes','Clothes','Clothes'],
    }
  }
  return (
    <React.Fragment>
    <nav>
      <ul className="mainNav">
        <li
        onMouseEnter={() =>{ setHover(true) 
        setHoverValue("newRelease")}}
        onMouseLeave={() => setHover(false)}
        >
          NEW RELEASES
        </li>
        <li
          onMouseEnter={() =>{ setHover(true) 
          setHoverValue("men")}}
          onMouseLeave={() => setHover(false)}
        >
        MEN</li>
        <li
          onMouseEnter={() =>{ setHover(true) 
          setHoverValue("women")}}
          onMouseLeave={() => setHover(false)}
        >
        WOMEN
        </li>
        <li
          onMouseEnter={() =>{ setHover(true) 
          setHoverValue("kids")}}
          onMouseLeave={() => setHover(false)}
        >KIDS</li>
        
        <li
          onMouseEnter={() =>{ setHover(true) 
          setHoverValue("sale")}}
          onMouseLeave={() => setHover(false)}
        >SALES</li>
        <li
          onMouseEnter={() =>{ setHover(true) 
          setHoverValue("customize")}}
          onMouseLeave={() => setHover(false)}
        >COLLECTIONS</li>
      </ul>
      <div className="search">
        <input className="searchInput" placeholder="Seach Items" type="text"/>
      </div>
    </nav>
      {onHover &&
        <div className="nav-menu"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          >
          {fakeMenudata[onHoverValue] &&
            Object.keys(fakeMenudata[onHoverValue]).map( key => {
              return (
                <div className="nav-menu-items">
                  <p className="nav-p-items">{key}</p>
                  {fakeMenudata[onHoverValue][key].map(item => <p key={fakeMenudata[onHoverValue][key].indexOf(item)}>{item}</p>)}
                </div>
              )})
          }
        </div>}
    </React.Fragment>
  );
}

export default NavigationBar;
