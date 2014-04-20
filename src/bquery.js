var BQuery = function (name) {

  switch (true) {
    case (/^#/.test(name)):
      name = name.replace('#', '');
      var element = document.getElementById(name);

      if (element) {
        return new Array(element);
      }
      else {
        return null;
      }

      break;

    case (/^[.]/.test(name)):
      name = name.replace('.', '');
      return document.getElementsByClassName(name);
      break;

    default:
      return document.getElementsByTagName(name);
  }
}

window.xx = BQuery;
