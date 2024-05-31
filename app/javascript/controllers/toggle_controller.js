import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "form", "checkboxContainer", "purpleBox", "aquaBox" ]

  toggleForm() {
    this.formTarget.classList.toggle('hidden')
  }

  toggleColor() {
    this.checkboxContainerTargets.forEach(container => {
      let className = `${container.firstElementChild.value}-border`
      if (container.firstElementChild.checked) {
        container.classList.add(className)
      } else {
        container.classList.remove(className);
      }
    })
  }

  switchBox() {
    this.purpleBoxTarget.classList.toggle('transparent')
    this.aquaBoxTarget.classList.toggle('transparent')
  }
}