var extendDeep = window.AFRAME.utils.extendDeep

// The mesh mixin provides common material properties for creating mesh-based primitives.
// This makes the material component a default component and maps all the base material properties.
var meshMixin = window.AFRAME.primitives.getMeshMixin()

window.AFRAME.registerPrimitive(
  'a-customimage',
  extendDeep({}, meshMixin, {
    // Preset default components. These components and component properties will be attached to the entity out-of-the-box.
    defaultComponents: {
      'custom-image': {},
      geometry: { primitive: 'sphere' },
      material: { side: 'back', shader: 'flat', repeat: '-1' }
    },

    // Defined mappings from HTML attributes to component properties (using dots as delimiters).
    // If we set `depth="5"` in HTML, then the primitive will automatically set `geometry="depth: 5"`.
    mappings: {
      radius: 'geometry.radius'
    }
  })
)
