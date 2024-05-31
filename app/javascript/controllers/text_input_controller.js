import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets =  [ "input", "warning" ]

  limit() {
    if (this.inputTarget.value.length > 200) {
      this.warningTarget.textContent = `${280 - this.inputTarget.value.length} characters remaining`
      this.warningTarget.classList.remove('hidden')
    } else {
      this.warningTarget.classList.add('hidden');
    }
  }
}