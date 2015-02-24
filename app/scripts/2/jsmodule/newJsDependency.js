function sayIt(what) {
  console.log("(2) newJsDependency : sayIt called.");
  console.log("(2) Someone said: " + what);
}
module.exports = {
  sayIt: sayIt
};