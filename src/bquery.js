var xx = function (name) {
  switch (true) {
    case (/^#/.test(name)):
      document.getElementById(name);
      break;
    case (/^[.]/.test(name)):
      return 'class';
      break;
    case (/^<.*\>$/.test(name)):
      return 'tag';
      break;
    default:
      return('No element was found on the page');
  }
}
module.exports = xx;
