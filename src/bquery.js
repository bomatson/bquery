var BQuery = function (name) {

  switch (true) {
    case (/^#/.test(name)):
      var name = name.replace('#', '');
      return document.getElementById(name);
      break;

    case (/^[.]/.test(name)):
      var name = name.replace('.', '');
      return document.getElementsByClassName(name);
      break;

    case (/^<.*\>$/.test(name)):
      var name = name.replace('<', '').replace('>', '');
      return document.getElementsByTagName(name);
      break;

    default:
      return('No element was found on the page');
  }
}

window.xx = BQuery;
