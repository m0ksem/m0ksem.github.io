import type { Camera } from 'three'
import { Euler } from 'three'

const euler = new Euler(0, 0, 0, 'YXZ')

export class GalleryControls {
  camera: Camera
  element: HTMLElement

  pointerSpeed = 1

  horizontal = true
  vertical = false

  private isFocused = false

  constructor(camera: Camera, element: HTMLElement) {
    this.camera = camera
    this.element = element

    element.tabIndex = 1

    if (!element) {
      return
    }

    element.addEventListener('mousemove', this.onMouseMove.bind(this))
    element.addEventListener('mousedown', this.onMouseDown.bind(this))
    element.addEventListener('mouseup', this.onMouseUp.bind(this))
    element.addEventListener('blur', this.onMouseUp.bind(this))
    element.addEventListener('keydown', this.onKeyPress.bind(this))
    element.addEventListener('touchmove', this.onTouchMove.bind(this))
  }

  private onUpdateHanlders: (() => void)[] = []
  onUpdate(cb: () => void) {
    this.onUpdateHanlders.push(cb)
  }

  move({ x = 0, y = 0 }: { x?: number, y?: number }) {
    euler.setFromQuaternion(this.camera.quaternion)

    if (this.horizontal) {
      euler.y += x * 0.002 * this.pointerSpeed
    }

    if (this.vertical) {
      euler.x += y * 0.002 * this.pointerSpeed
    }

    this.camera.quaternion.setFromEuler(euler)
    this.onUpdateHanlders.forEach((cb) => cb())
  }

  onMouseMove(event: { movementX?: number, movementY?: number }) {
    if (!this.isFocused) { return }
    this.move({ x: event.movementX, y: event.movementY })
  }

  onMouseDown() { this.isFocused = true; this.element.style.setProperty('cursor', 'grab') }
  onMouseUp() { this.isFocused = false; this.element.style.setProperty('cursor', '') }

  onKeyPress(event: KeyboardEvent) {
    if (event.key === 'ArrowRight' || event.key === 'd') { this.onKeyRight() }
    if (event.key === 'ArrowLeft' || event.key === 'a') { this.onKeyLeft() }
  }

  onKeyRight() {
    this.move({ x: -10 })
  }

  onKeyLeft() {
    this.move({ x: 10 })
  }

  onTouchMove(e: TouchEvent) {
    console.log(e.touches[0].clientX, e.touches[0].clientY)
  }
}