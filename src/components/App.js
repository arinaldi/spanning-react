import React, { Component } from 'react';
import { BUTTONS, STATUS, API_URL } from '../constants';
import Sign from './Sign';
import Machine from './Machine';

class App extends Component {
  state = {
    status: STATUS.MAKE_CHOICE,
    pinMode: false,
    ccActive: false
  }

  handleFetch() {
    this.setState({
      status: STATUS.LOADING,
      pinMode: false,
      ccActive: false
    }, () => {
      fetch(API_URL)
        .then(res => res.json())
        .then(data => {
          const randomValue = data.results[0].dob.age;
          this.setState({ status: `You transacted $${randomValue}.00` });
        })
        .catch(err => {
          this.setState({ status: STATUS.ERROR })
        })
    });
  }

  handleClick = option => {
    if (!option) {
      this.setState({
        status: STATUS.SELECT_AGAIN,
        pinMode: false,
        ccActive: false
      });
    } else if (option === BUTTONS.PIN) {
      this.setState({
        status: STATUS.PIN,
        pinMode: true,
        ccActive: false
      });
    } else {
      this.handleFetch();
    }
  }

  handleKeyDown = e => {
    let { status, pinMode, ccActive } = this.state;

    if (pinMode) {
      if (status === STATUS.PIN) {
        status = '*';
      } else {
        status += '*';
      }

      if (status.length === 4) {
        pinMode = false;
        ccActive = true;
      }

      this.setState({ status, pinMode, ccActive });
    }
  }

  render() {
    const { status, ccActive } = this.state;

    return (
      <div className="container" onKeyDown={this.handleKeyDown} tabIndex="0">
        <Sign />
        <Machine
          status={status}
          ccActive={ccActive}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}

export default App;
