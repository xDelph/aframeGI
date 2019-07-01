const ip = require('ip')
const fs = require('fs')

fs.writeFileSync(
  './public/static/internalIp.json',
  JSON.stringify({
    ip: ip.address()
  }),
  undefined,
  4
)
