'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _recompose = require('recompose');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable jsx-a11y/img-has-alt */


var ImgFallback = function (_Component) {
  _inherits(ImgFallback, _Component);

  function ImgFallback(props, context) {
    _classCallCheck(this, ImgFallback);

    var _this = _possibleConstructorReturn(this, (ImgFallback.__proto__ || Object.getPrototypeOf(ImgFallback)).call(this, props, context));

    _this.onError = function () {
      _this.setState({
        imgOnError: true
      });
    };

    _this.state = {
      imgOnError: false
    };
    return _this;
  }

  _createClass(ImgFallback, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          className = _props.className,
          src = _props.src,
          alt = _props.alt,
          fallback = _props.fallback,
          onClick = _props.onClick;

      var commonProps = { style: style, className: className, alt: alt, onClick: onClick };
      var imgOnError = this.state.imgOnError;

      if (imgOnError || !src) {
        if (typeof fallback === 'string') {
          return _react2.default.createElement('img', _extends({}, commonProps, {
            src: fallback
          }));
        }
        return _react2.default.cloneElement(fallback, _extends({}, commonProps, fallback.props));
      }

      return _react2.default.createElement('img', _extends({}, commonProps, {
        src: src,
        onError: this.onError
      }));
    }
  }]);

  return ImgFallback;
}(_react.Component);

ImgFallback.propTypes = {
  style: _react.PropTypes.object,
  className: _react.PropTypes.string,
  src: _react.PropTypes.string,
  alt: _react.PropTypes.string,
  fallback: _react.PropTypes.node.isRequired,
  onClick: _react.PropTypes.func
};

ImgFallback.defaultProps = {
  style: {},
  className: '',
  src: undefined,
  alt: '',
  onClick: undefined
};

exports.default = (0, _recompose.onlyUpdateForPropTypes)(ImgFallback);