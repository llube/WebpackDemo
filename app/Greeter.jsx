import React, {Component} from 'react';
import styles from './Greeter.css';
import { Welcome } from './welcome.jsx';

class Greeter extends Component {
  render(){
    return (
      <div>
        <Welcome name="李露" />
        <h1 className={styles.root}>等到海水退去潮起潮落，react编译打包，哈哈啊哈, wakkk,hahah</h1>
      </div>
    )
  }
}

export default Greeter