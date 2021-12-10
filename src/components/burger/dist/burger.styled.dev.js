"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledBurger = exports.BurgerWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  width: 2rem;\n  height: 2rem;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  z-index: 10! important;\n  position:sticky;\n\n  &:focus {\n    outline: none;\n  }\n\n  div {\n    width: 2rem;\n    height: 0.25rem;\n    background: ", ";\n    border-radius: 10px;\n    transition: all 0.3s linear;\n    position: relative;\n    transform-origin: 1px;\n\n    :first-child {\n      transform: ", ";\n    }\n\n    :nth-child(2) {\n      opacity: ", ";\n      transform: ", ";\n    }\n\n    :nth-child(3) {\n      transform: ", ";\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  position: sticky;\n  justify-content: flex-end;\n  top: 2rem;\n  margin-right: 30px;\n  z-index: 2;\n\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BurgerWrapper = _styledComponents["default"].div(_templateObject());

exports.BurgerWrapper = BurgerWrapper;

var StyledBurger = _styledComponents["default"].button(_templateObject2(), function (_ref) {
  var open = _ref.open;
  return open ? 'hsl(234, 12%, 34%)' : 'hsl(234, 12%, 34%)';
}, function (_ref2) {
  var open = _ref2.open;
  return open ? 'rotate(45deg)' : 'rotate(0)';
}, function (_ref3) {
  var open = _ref3.open;
  return open ? '0' : '1';
}, function (_ref4) {
  var open = _ref4.open;
  return open ? 'translateX(20px)' : 'translateX(0)';
}, function (_ref5) {
  var open = _ref5.open;
  return open ? 'rotate(-45deg)' : 'rotate(0)';
});

exports.StyledBurger = StyledBurger;