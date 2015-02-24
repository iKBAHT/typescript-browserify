function sayIt(what) {
  console.log("(1) newJsDependency : sayIt called.");
  console.log("(1) Someone said: " + what);
}
module.exports = {
  sayIt: sayIt
};