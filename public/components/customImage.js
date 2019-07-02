window.AFRAME.registerComponent('custom-image', {
  schema: {
    width: { type: 'number', default: 0 },
    height: { type: 'number', default: 0 },
    num: { type: 'number', default: 0 }
  },

  getGeometry: function () {
    const ratio = this.default.width / this.default.height
    const phiLength = this.clicked ? 70 : 20
    const phiStart = this.clicked ? -25 : 0
    const thetaLength = phiLength / ratio
    const radius = this.clicked ? this.default.radius * 0.99 : this.default.radius

    return {
      primitive: 'sphere',
      radius,
      phiStart,
      phiLength,
      thetaLength: phiLength / ratio,
      thetaStart: 70 + (20 - thetaLength) / 2
    }
  },

  init: function () {
    this.default = { width: this.data.width, height: this.data.height, radius: this.el.getAttribute('radius') }
    this.clicked = false

    this.el.setAttribute('rotation', `0 ${260 + this.data.num * 36} 0`)

    this.el.addEventListener('click', e => {
      this.clicked = !this.clicked
      this.el.setAttribute('geometry', this.getGeometry())
    })
  },

  update: function () {
    this.el.setAttribute('geometry', this.getGeometry())
  },

  remove: function () {
    // Do something the component or its entity is detached.
  },

  tick: function (time, timeDelta) {
    // Do something on every scene tick or frame.
  }
})
