import React from 'react';

class Header extends React.Component{
  render(){
    return(
      <header>
        <h1>Know Your Vote</h1>
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