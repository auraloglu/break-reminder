import React, { useState, useEffect } from "react";
import Notification from "react-web-notification";

const Notifiaction = props => {
  const [ignore, setIgnore] = useState(true);
  const [title, setTitle] = useState("");
  const [options, setOptions] = useState(null);
  const [fireNotification, setFireNotification] = useState(
    props.fireNotification
  );

  const handlePermissionGranted = () => {
    setIgnore(false);
  };
  const handlePermissionDenied = () => {
    setIgnore(true);
  };
  const handleNotSupported = () => {
    setIgnore(true);
  };

  useEffect(() => {
    if (props.fireNotification !== fireNotification) {
      setFireNotification(props.fireNotification);
    }
  }, [props.fireNotification]);

  const fireNotificationHandle = () => {
    if (fireNotification) {
      console.log("fired");
      const now = Date.now();

      const title = "MOLA VAKTİ";
      const body = "Çıkıp hava alma zamanın geldi!";
      const tag = now;
      const icon =
        "https://www.newlifea2.org/wp-content/uploads/2015/07/Sermon_Breathe.jpg";

      const options = {
        tag: tag,
        body: body,
        icon: icon
      };
      setTitle(title);
      setOptions(options);
      setFireNotification(false);
    }
  };

  fireNotificationHandle();

  return (
    <Notification
      ignore={ignore && title !== ""}
      notSupported={handleNotSupported.bind(this)}
      onPermissionGranted={handlePermissionGranted.bind(this)}
      onPermissionDenied={handlePermissionDenied.bind(this)}
      timeout={5000}
      title={title}
      options={options}
    />
  );
};

export default Notifiaction;
