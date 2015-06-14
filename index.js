var sel = require('sel')

module.exports = function datum(node){
  return sel(node).datum()
}