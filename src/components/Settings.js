import React from "react";
import { connect } from "react-redux";
import {
  setGap,
  setClosingTime,
  setLastBreak,
  setBreakNotificationHeader,
  setBreakNotificationText,
  setEndNotificationHeader,
  setEndNotificationText
} from "../redux/actions/settingsActions";
import { IoMdSettings } from "react-icons/io";
import "../styles/Settings.scss";

class Settings extends React.Component {
  state = {
    gap: "",
    closingTime: "",
    isOpen: false,
    isSettings: true,
    breakNotifHeader: "",
    breakNotifText: "",
    endNotifHeader: "",
    endNotifText: ""
  };

  componentDidMount = async () => {
    if (!window.localStorage.getItem("breakGap")) {
      await this.props.setGap("3600000");
    } else {
      await this.props.setGap(window.localStorage.getItem("breakGap"));
      this.setState({ gap: parseInt(this.props.gap) / 1000 / 60 });
    }

    if (!window.localStorage.getItem("lastBreaktTime")) {
      await this.props.setLastBreak();
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

    if (!window.localStorage.getItem("breakNotificationHeader")) {
      this.setState({ breakNotifHeader: "It's Break Time!" });
    } else {
      await this.props.setBreakNotificationHeader(
        window.localStorage.getItem("breakNotificationHeader")
      );
      this.setState({
        breakNotifHeader: window.localStorage.getItem("breakNotificationHeader")
      });
    }

    if (!window.localStorage.getItem("breakNotificationText")) {
      this.setState({ breakNotifText: "Lets have a break and get some air!" });
    } else {
      await this.props.setBreakNotificationText(
        window.localStorage.getItem("breakNotificationText")
      );
      this.setState({
        breakNotifText: window.localStorage.getItem("breakNotificationText")
      });
    }
    if (!window.localStorage.getItem("endNotificationHeader")) {
      this.setState({ endNotifHeader: "IT'S GO TIME!" });
    } else {
      await this.props.setEndNotificationHeader(
        window.localStorage.getItem("endNotificationHeader")
      );
      this.setState({
        endNotifHeader: window.localStorage.getItem("endNotificationHeader")
      });
    }
    if (!window.localStorage.getItem("endNotificationText")) {
      this.setState({ endNotifText: "Go home and get some rest!" });
    } else {
      await this.props.setEndNotificationText(
        window.localStorage.getItem("endNotificationText")
      );
      this.setState({
        endNotifText: window.localStorage.getItem("endNotificationText")
      });
    }
  };

  handleGapChange = event => {
    this.setState({ gap: event.target.value });
  };

  handleClosingTimeChange = event => {
    this.setState({ closingTime: event.target.value });
  };

  handleBreakNotifHeaderChange = event => {
    this.setState({ breakNotifHeader: event.target.value });
  };

  handleBreakNotifTextChange = event => {
    this.setState({ breakNotifText: event.target.value });
  };

  handleEndNotifHeaderChange = event => {
    this.setState({ endNotifHeader: event.target.value });
  };

  handleEndNotifTextChange = event => {
    this.setState({ endNotifText: event.target.value });
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

    this.props.setBreakNotificationHeader(this.state.breakNotifHeader);
    this.props.setBreakNotificationText(this.state.breakNotifText);
    this.props.setEndNotificationHeader(this.state.endNotifHeader);
    this.props.setEndNotificationText(this.state.endNotifText);
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

  renderSettings() {
    return (
      <div
        className="settings"
        onClick={() => this.setState({ isSettings: !this.state.isSettings })}
      >
        <IoMdSettings className="settings-icon" />
        <span className="settings-text">Settings</span>
      </div>
    );
  }

  render() {
    if (!this.state.isSettings) {
      return (
        <div>
          {this.renderSettings()}
          <form onSubmit={this.handleSubmit}>
            {this.saveResponse()}
            <input
              className="input"
              type="text"
              name="gap"
              placeholder={`saved value: ${this.props.gap / 1000 / 60}`}
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
            <input
              className="input"
              type="text"
              placeholder={`saved value: ${this.state.breakNotifHeader}`}
              value={this.state.breakNotifHeader}
              onChange={this.handleBreakNotifHeaderChange}
            />
            <label className="label">Break Notification Hader</label>
            <input
              className="input"
              type="text"
              placeholder={`saved value: ${this.state.breakNotifText}`}
              value={this.state.breakNotifText}
              onChange={this.handleBreakNotifTextChange}
            />
            <label className="label">Break Notification Text</label>
            <input
              className="input"
              type="text"
              placeholder={`saved value: ${this.state.endNotifHeader}`}
              value={this.state.endNotifHeader}
              onChange={this.handleEndNotifHeaderChange}
            />
            <label className="label">End Notification Header</label>
            <input
              className="input"
              type="text"
              placeholder={`saved value: ${this.state.endNotifText}`}
              value={this.state.endNotifText}
              onChange={this.handleEndNotifTextChange}
            />
            <label className="label">End Notification Text</label>
            <input className="saveSettings" type="submit" value="Submit" />
          </form>
        </div>
      );
    }
    return <>{this.renderSettings()}</>;
  }
}

const mapStateToProps = state => {
  return {
    gap: state.settings.gap,
    closingTime: state.settings.closingTime
  };
};

export default connect(mapStateToProps, {
  setGap,
  setClosingTime,
  setLastBreak,
  setBreakNotificationHeader,
  setBreakNotificationText,
  setEndNotificationHeader,
  setEndNotificationText
})(Settings);
