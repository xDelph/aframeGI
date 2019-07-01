window.loadJson = function (filename) {
  return new Promise((resolve, reject) => {
    var xobj = new window.XMLHttpRequest()
    xobj.overrideMimeType('application/json')
    xobj.open('GET', `/static/${filename}.json`, true)

    xobj.onreadystatechange = function () {
      if (xobj.readyState === 4 && xobj.status === 200) {
        resolve(JSON.parse(xobj.responseText))
      }
    }

    xobj.send(null)
  })
}
