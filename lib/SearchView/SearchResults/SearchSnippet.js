'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SearchSnippet = function SearchSnippet(_ref) {
  var match = _ref.match;

  var matchSpans = match['match-text'].map(function (text, index) {
    return _react2.default.createElement(
      'em',
      { className: text.highlight !== undefined ? 'mark' : '', key: index },
      text.highlight !== undefined ? text.highlight : text
    );
  });

  return _react2.default.createElement(
    'div',
    { className: 'ml-search-result-match' },
    matchSpans
  );
};

exports.default = SearchSnippet;
module.exports = exports['default'];