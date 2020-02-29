import React from "react";
import { connect } from "react-redux";
import Settings from "./Settings";
import Countdown from "./Countdown";

import { fetchLastBreak, setLastBreak } from "../redux/actions/settingsActions";
import "../styles/App.scss";

class App extends React.Component {
  state = {
    ignore: true,
    title: "",
    fireNotif: false,
    lastBreakState: null
  };

  componentDidMount() {
    this.props.fetchLastBreak();
  }
  handleServedMyTime = async () => {
    await this.props.setLastBreak();
    await this.props.fetchLastBreak();
  };

  render() {
    return (
      <div className="center">
        <Settings />
        <h1 className="title">Countdown to Break:</h1>
        <Countdown
          gap={parseInt(this.props.gap)}
          lastBreak={parseInt(this.props.lastBreakTime)}
        />
        <button
          className="servedMyTime"
          onClick={() => this.handleServedMyTime()}
        >
          Molaya Çıktım
        </button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    gap: state.settings.gap,
    lastBreakTime: state.settings.lastBreakTime
  };
};

export default connect(mapStateToProps, { fetchLastBreak, setLastBreak })(App);
