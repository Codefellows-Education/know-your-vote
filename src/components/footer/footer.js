import React from 'react';
import './footer.scss';

class Footer extends React.Component{
  render(){
    return(
      <footer>
          <ul>
            <li>&copy; 2019 <a href="http://lenaeivy.com">Lena Eivy</a></li>
          </ul>
      </footer>
    );
  }
}

export default Footer;