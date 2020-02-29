import React from "react";
import Notification from "./Notification";
import "../styles/Countdown.scss";

class Countdown extends React.Component {
  state = {
    hours: null,
    min: null,
    sec: null,
    fireNotification: false
  };

  componentDidMount() {
    // update every second
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      const date = this.calculateCountdown();
      date ? this.setState(date) : this.stop();
    }, 1000);
  }

  componentWillUnmount() {
    this.stop();
  }

  calculateCountdown() {
    this.setState({ fireNotification: false });
    let diff = Math.floor(
      (parseInt(this.props.lastBreak) + parseInt(this.props.gap) - Date.now()) /
        1000
    );

    // clear countdown when date is reached
    if (diff <= 0) return false;

    const timeLeft = {
      hours: 0,
      min: 0,
      sec: 0,
      millisec: 0
    };

    // calculate time difference between now and expected date
    if (diff >= 3600) {
      // 60 * 60
      timeLeft.hours = Math.floor(diff / 3600);
      diff -= timeLeft.hours * 3600;
    }
    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60);
      diff -= timeLeft.min * 60;
    }
    timeLeft.sec = diff;

    return timeLeft;
  }

  stop() {
    this.setState({ fireNotification: true });
    // clearInterval(this.interval);
  }

  addLeadingZeros(value) {
    value = String(value);
    while (value.length < 2) {
      value = "0" + value;
    }
    return value;
  }

  render() {
    const countDown = this.state;

    return (
      <div className="Countdown">
        <span className="Countdown-col">
          <span className="Countdown-col-element">
            <strong>
              {countDown.hours ? this.addLeadingZeros(countDown.hours) : "00"}
            </strong>
            <span>Hours</span>
          </span>
        </span>
        <span className="Countdown-col">
          <span className="Countdown-col-element">
            <strong>
              {countDown.min ? this.addLeadingZeros(countDown.min) : "00"}
            </strong>
            <span>Min</span>
          </span>
        </span>
        <span className="Countdown-col">
          <span className="Countdown-col-element">
            <strong>
              {countDown.sec ? this.addLeadingZeros(countDown.sec) : "00"}
            </strong>
            <span>Sec</span>
          </span>
        </span>
        <Notification fireNotification={this.state.fireNotification} />
      </div>
    );
  }
}

export default Countdown;
