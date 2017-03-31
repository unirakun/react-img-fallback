/* eslint-disable jsx-a11y/img-has-alt */
import React, { Component, PropTypes } from 'react'
import { onlyUpdateForPropTypes } from 'recompose'

class ImgFallback extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      imgOnError: false,
    }
  }

  onError = () => {
    this.setState({
      imgOnError: true,
    })
  }

  render() {
    const { style, className, src, alt, fallback, onClick } = this.props
    const commonProps = { style, className, alt, onClick }
    const { imgOnError } = this.state
    if (imgOnError || !src) {
      if (typeof fallback === 'string') {
        return (
          <img
            {...commonProps}
            src={fallback}
          />
        )
      }
      return React.cloneElement(
        fallback,
        { ...commonProps, ...fallback.props },
      )
    }

    return (
      <img
        {...commonProps}
        src={src}
        onError={this.onError}
      />
    )
  }
}

ImgFallback.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  fallback: PropTypes.node.isRequired,
  onClick: PropTypes.func,
}

ImgFallback.defaultProps = {
  style: {},
  className: '',
  src: undefined,
  alt: '',
  onClick: undefined,
}

export default onlyUpdateForPropTypes(ImgFallback)
