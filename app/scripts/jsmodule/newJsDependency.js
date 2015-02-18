function sayIt(what) {
  console.log("newJsDependency : sayIt called.");
  console.log("Someone said: " + what);
}
module.exports = {
  sayIt: sayIt
};