import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {
    isFeedback: false,
  }

  onClickBtn = () => {
    this.setState({isFeedback: true})
  }

  renderFeedbackQuestion = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="mini-container">
        <hi className="heading">
          How satisfied are you with our costumer support performence
        </hi>
        <li className="emoji-container">
          {emojis.map(eachEmoji => (
            <li key={eachEmoji.id} className="emoji">
              <button
                type="button"
                className="button"
                onClick={this.onClickBtn}
              >
                <img
                  className="image"
                  src={eachEmoji.imageUrl}
                  alt={eachEmoji.name}
                />
                <p className="emoji-name">{eachEmoji.name}</p>
              </button>
            </li>
          ))}
        </li>
      </div>
    )
  }

  renderThankYouScreen = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="thank-you-container">
        <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
        <h1 className="thank-you-text">Thank You!</h1>
        <p className="description">
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {isFeedback} = this.state

    return (
      <div className="app-container">
        <div className="home-container">
          {isFeedback
            ? this.renderThankYouScreen()
            : this.renderFeedbackQuestion()}
        </div>
      </div>
    )
  }
}
export default Feedback
