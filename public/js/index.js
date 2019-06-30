const scene = document.querySelector('a-scene')

window.axios.post(`http://localhost:3000/api/google`, { query: 'mock' }).then(async ({ data: images }) => {
  for (let i = 0; i < images.length; i++) {
    let customImage = document.createElement('a-customimage')
    customImage.setAttribute('custom-image', { width: images[i].width, height: images[i].height, num: i })
    customImage.setAttribute('radius', 10)

    const src = (await window.axios.get(`http://localhost:3000/api/image?url=${images[i].src}`)).data
    customImage.setAttribute('src', src)

    scene.appendChild(customImage)
  }
})
