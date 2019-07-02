const scene = document.querySelector('a-scene')
;(async function () {
  const origin = document.location.origin

  window.axios.post(`http://${origin}/api/google`, { query: 'mock' }).then(({ data: images }) => {
    for (let i = 0; i < images.length; i++) {
      let customImage = document.createElement('a-customimage')

      customImage.setAttribute('custom-image', { width: images[i].width, height: images[i].height, num: i })
      customImage.setAttribute('radius', 10)
      customImage.setAttribute('src', `http://${origin}:3000/api/image?url=${images[i].src}`)

      scene.appendChild(customImage)
    }
  })
})()
