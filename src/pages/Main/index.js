import React from 'react';

import styles from './styles.css';
import logo from '../../assets/logo-in8-dev.svg';

function Main() {
  return (
    <div className={styles.Container}>
    	<img src={logo} className={styles.logo}/>
      <h1 className="styles.titulo">Main</h1>
    </div>
  );
}

export default Main;