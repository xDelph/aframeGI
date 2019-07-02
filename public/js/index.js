const scene = document.querySelector('a-scene')
const origin = document.location.origin

const addNewImage = function (id, img) {
  let customImage = document.createElement('a-customimage')

  customImage.setAttribute('custom-image', { width: img.width, height: img.height, num: id })
  customImage.setAttribute('radius', 10)
  customImage.setAttribute('src', `${origin}/api/image?url=${img.src}`)

  scene.appendChild(customImage)
}

const search = async function (query) {
  window.axios.post(`${origin}/api/google`, { query }).then(({ data: images }) => {
    for (let i = 0; i < images.length; i++) addNewImage(i, images[i])
  })
}

search('mock')
