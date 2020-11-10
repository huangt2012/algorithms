function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var Utils = /*#__PURE__*/function () {
  function Utils() {
    _classCallCheck(this, Utils);
  }

  _createClass(Utils, null, [{
    key: "getClassName",
    // private __data: any
    value: function getClassName() {
      return 'classname';
    }
  }, {
    key: "getData",
    value: function getData() {
      var className = this.getClassName();
      this.__data = [{
        id: 2,
        name: 'test2',
        score: 333
      }];
      return this.__data;
    }
  }, {
    key: "getTestData",
    value: function getTestData() {
      return {
        id: 1,
        name: 'string',
        score: 12
      };
    }
  }]);

  return Utils;
}();

var sum = function sum(a, b) {
  return a + b;
};

console.log(sum(1, 2));

window.Utils = Utils;
