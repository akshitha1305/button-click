// Write your code here
import './index.css'
import {Component} from 'react'

class ClickCounter extends Component {
  state = {count: 0}

  onClickingButton = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">
            The Button has been clicked <span className="span-el">{count}</span>{' '}
            times
          </h1>
          <p className="para">Click the button to increase the count</p>
          <div className="but-container">
            <button
              type="button"
              onClick={this.onClickingButton}
              className="button"
            >
              Click Me!
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ClickCounter
