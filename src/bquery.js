var bQuery = function (name, context) {
  var results = [];
  results.context = setupContext(context);

  if (!name) {
    results.selector = "";

  } else {
    var selector = name.replace('#', '').replace('.','');
    var elements = findElementsFor(name, selector);

    results = elements;
    results.selector = name;
  }

  var clickEvent = function (callback) {

    for (result in results) {
      result.addEventListener('click', callback);
    }
    return this;
  }

  return {
    click: clickEvent;
  }

  return results
}



function formatId(element) {
  return new Array(element).filter(function(val) { return (val !== null) });
}

function setupContext(context) {
  if (!context) {
    return document;
  } else {
    return context;
  }
}

function findElementsFor(name, selector) {
  switch (true) {
    case (/^#/.test(name)):
      return formatId(document.getElementById(selector));
      break;

    case (/^[.]/.test(name)):
      return document.getElementsByClassName(selector);
      break;

    default:
      return document.getElementsByTagName(name);
  }
}

bQuery.click = clickEvent;

var xx = bQuery;
