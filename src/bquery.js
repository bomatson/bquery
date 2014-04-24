var bQuery = function(element, selector) {
  this.length = element.length;
  this.selector = selector;
  this.elem = element;
};

function query(name) {
  if (name === undefined) {
    return new bQuery([], null)
  }

  switch (true) {
    case (/^#/.test(name)):
      var selector = name.replace('#', '');
      var element = document.getElementById(selector);
      return formatOur(element, selector);
      break;

    case (/^[.]/.test(name)):
      var selector = name.replace('.', '');
      var element = document.getElementsByClassName(selector);
      return formatOur(element, selector);
      break;

    default:
      var selector = name;
      var element = document.getElementsByTagName(name);
      return formatOur(element, selector);
  }
}

function formatOur(element, selector) {
  element = new Array(element).filter(function(val) { return (val !== null) });
  return new bQuery(element, selector);
}

var xx = query;
