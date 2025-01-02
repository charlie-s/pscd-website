/**
 * Show a lightbox for the given HTMLImageElement.
 *
 * @param {HTMLImageElement} el
 */
function showLightbox(src) {
  var wrapper = document.createElement('div')
  wrapper.style.cssText = 'position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center; transition: opacity 200ms ease-in-out; opacity: 0; cursor: pointer;'
  document.body.appendChild(wrapper)

  var backdrop = document.createElement('div')
  backdrop.style.cssText = 'position: absolute; z-index: 0; top: 0; left: 0; background: rgba(0, 0, 0, .4); width: 100vw; height: 100vh;'
  wrapper.appendChild(backdrop)

  var img = document.createElement('img')
  img.src = src
  img.style.cssText = 'z-index: 1; max-height: 60vh; max-width: 90vw; box-shadow: 0 .2rem 2rem #00000044;'
  wrapper.appendChild(img)

  // Fade in wrapper.
  setTimeout(function () { wrapper.style.opacity = 1 })

  // Fade out and remove onclick.
  var removing = false
  wrapper.onclick = function () {
    if (removing) return
    removing = true
    wrapper.style.opacity = 0
    setTimeout(function () { document.body.removeChild(wrapper) }, 200)
  }
}
