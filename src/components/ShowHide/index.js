// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {showFirstName: false, showLastName: false}

  onLastName = () => {
    this.setState(prevState => ({showLastName: !prevState.showLastName}))
  }

  onFirstName = () => {
    this.setState(prevState => ({showFirstName: !prevState.showFirstName}))
  }

  render() {
    const {showFirstName, showLastName} = this.state
    return (
      <div className="container">
        <h1 className="heading">Show/Hide</h1>
        <div className="ShowHide-container">
          <div className="name-container">
            <button
              type="button"
              onClick={this.onFirstName}
              className="show-hide-button"
            >
              Show/Hide Firstname
            </button>
            {showFirstName && <p className="name">Joe</p>}
          </div>
          <div className="name-container">
            <button
              type="button"
              onClick={this.onLastName}
              className="show-hide-button"
            >
              Show/Hide Lastname
            </button>
            {showLastName && <p className="name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
