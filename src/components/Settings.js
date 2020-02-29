import React from "react";
import { connect } from "react-redux";
import { setGap, setClosingTime } from "../redux/actions/settingsActions";
import "../styles/settingStyles.scss";

class Settings extends React.Component {
  state = { gap: "", closingTime: "", isOpen: false };

  componentDidMount = async () => {
    if (!window.localStorage.getItem("breakGap")) {
      await this.props.setGap("3600000");
    } else {
      await this.props.setGap(window.localStorage.getItem("breakGap"));
      this.setState({ gap: parseInt(this.props.gap) / 1000 / 60 });
    }

    if (!window.localStorage.getItem("closingTime")) {
      await this.props.setClosingTime("17:00");
    } else {
      await this.props.setClosingTime(
        window.localStorage.getItem("closingTime")
      );
      this.setState({
        closingTime: this.props.closingTime
      });
    }
  };

  handleGapChange = event => {
    this.setState({ gap: event.target.value });
  };

  handleClosingTimeChange = event => {
    this.setState({ closingTime: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.setGap(parseInt(this.state.gap) * 1000 * 60);
    window.localStorage.setItem(
      "breakGap",
      parseInt(this.state.gap) * 1000 * 60
    );
    this.props.setClosingTime(this.state.closingTime);
    window.localStorage.setItem("closingTime", this.state.closingTime);
    this.setState({ isOpen: true });
  };

  saveResponse() {
    if (this.state.isOpen) {
      return (
        <div
          className="save-success"
          onClick={() => this.setState({ isOpen: false })}
        >
          Saved (Click to close!)
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.saveResponse()}
          <input
            className="input"
            type="text"
            name="gap"
            placeholder={`saved value: ${this.props.gap}`}
            value={this.state.gap}
            onChange={this.handleGapChange}
          />
          <label className="label">Gap (min)</label>
          <input
            className="input"
            type="text"
            placeholder={`saved value: ${this.props.closingTime}`}
            value={this.state.closingTime}
            onChange={this.handleClosingTimeChange}
          />
          <label className="label">Closing Time</label>
          <input className="saveSettings" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    gap: state.settings.gap,
    closingTime: state.settings.closingTime
  };
};

export default connect(mapStateToProps, { setGap, setClosingTime })(Settings);
