import { Component } from "react";class LoadingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      progress: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      if (this.state.progress < 100) {
        this.setState((prevState) => ({ progress: prevState.progress + 5 }));
      }
    }, 100);

    setTimeout(() => {
      this.setState({ loading: false });
      clearInterval(this.interval);
    }, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    if (this.state.loading) {
      return (
        <div className="loading-container">
          <img src="/images/brand-lg.svg" alt="Brand Logo" className="logo" />

          <div className="progress-bar">
            <div
              className="progress"
              style={{ width: `${this.state.progress}%` }}
            ></div>
          </div>
        </div>
      );
    }
  }
}

export default LoadingPage;
