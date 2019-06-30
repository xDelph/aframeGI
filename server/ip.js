const ip = require('ip')
const fs = require('fs')

fs.writeFileSync(
  './static_assets/internalIp.json',
  JSON.stringify({
    ip: ip.address()
  }),
  undefined,
  4
)
