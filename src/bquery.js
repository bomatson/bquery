function bQuery(name, context) {

  results = [];
  results.context = setupContext(context);

  if (!name) {
    results.selector = "";

  } else {
    var selector = name.replace('#', '').replace('.','');
    var elements = findElementsFor(name, selector);

    results = elements;
    results.selector = name;
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

var xx = bQuery;
