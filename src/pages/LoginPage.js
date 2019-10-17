import React from "react";
import LoginForm from "../components/login";
import Particles from "react-particles-js";


class LoginPage extends React.Component {
  render() {
    return (
      <>
        <Particles
          params={{
            "particles": {
              "line_linked": {
                "color": "#FFFFFF"
              },
              "number": {
                "value": 150
              },
              "size": {
                "value": 5
              }
            },
            "interactivity": {
              "events": {
                "onhover": {
                  "enable": true,
                  "mode": "repulse"
                }
              }
            }
          }}
          style={{
            width: '100%',
            background: `#132A5B`,
          }}
        />
          <LoginForm/>
      </>
    );
  }
}

export default LoginPage;
