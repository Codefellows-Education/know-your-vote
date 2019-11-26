import React from 'react';
import './header.scss';
import flag from '../../img/flag.jpg';

class Header extends React.Component{
  render(){
    return(
      <header>
        <h1>Every Vote Matters</h1>
          <img src={flag} alt="flag" />
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
            </ul>
          </nav>
      </header>
    );
  }
}

export default Header;