import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userDetails: {},
    };
  }

  componentDidMount() {
    this.fetchUserDetails();
  }

  fetchUserDetails = async function () {
    const data = await fetch("https://api.github.com/users/adj2908");
    const json = await data.json();
    this.setState({ userDetails: json });
  };

  render() {
    const { name, location, avatar_url } = this.state.userDetails;
    return (
      <div className="about-us-container">
        <img src={avatar_url} />
        <h1>About Us</h1>
        <h2>{name}</h2>
        <h3>{location}</h3>
      </div>
    );
  }
}
export default About;
