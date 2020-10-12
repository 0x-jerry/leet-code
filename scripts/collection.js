const fs = require('fs')
const path = require('path')

function getJSFileCount() {
  const dir = path.join(__dirname, '..')
  return fs.readdirSync(dir).filter((v) => v.endsWith('.js')).length
}

console.log(getJSFileCount())
