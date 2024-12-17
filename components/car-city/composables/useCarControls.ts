import { useRaf60Fps } from '../../../composables/use-raf-60-fps'
import type { Object3D } from 'three'

const ROAD_WDITH = 9
const CAR_SIZE = 3
const MAX_MOVEMENT = ROAD_WDITH - CAR_SIZE

class SmoothNumber extends Number {
  private v = 0
  static step = 0.05

  get value() { return this.v }

  set value(to) {
    const step = this.getStep(this.v, to)
    const from = this.v

    if (Math.abs(step) > Math.abs(to - from)) {
      this.v = to
    }

    const interval = setInterval(() => {
      this.v += step
      if (this.v * Math.sign(to - from) >= Math.abs(to)) {
        this.v = to
        clearInterval(interval)
      }
    }, 16)
  }

  force(v: number) { this.v = v }

  private getStep(from: number, to: number) {
    const sign = Math.sign(to - from)
    return SmoothNumber.step * sign
  }
}

export const useCarControls = (car: Object3D) => {
  const initControls = () => {
    let velocity = 0
    const rotation = {
      left: new SmoothNumber(),
      right: new SmoothNumber()
    }

    const enabledButtons = {
      left: true, right: true
    }

    useRaf60Fps(() => {
      car.position.x += velocity

      if ((car.position.x) >= MAX_MOVEMENT) {
        car.position.x = MAX_MOVEMENT
        rotation.right.force(0)
        rotation.left.force(0)
        enabledButtons.right = false
      } else {
        enabledButtons.right = true
      }

      if ((car.position.x) <= -MAX_MOVEMENT) {
        car.position.x = -MAX_MOVEMENT
        rotation.right.force(0)
        rotation.left.force(0)
        enabledButtons.left = false
      } else {
        enabledButtons.left = true
      }

      const r = rotation.left.value + rotation.right.value

      car.rotation.set(0, Math.PI - r, 0)
    })

    const pressed = {} as { [key: string]: boolean }

    const VELOCITY = 0.5

    window.addEventListener('keydown', (e) => {
      if (e.code === 'KeyA' || e.code === 'LeftArrow' && enabledButtons.left) {
        rotation.left.value = -0.1
        velocity = -VELOCITY
      } 
      if (e.code === 'KeyD' || e.code === 'RightArrow' && enabledButtons.right) {
        rotation.right.value = 0.1
        velocity = VELOCITY
      }

      pressed[e.code] = true
    })

    window.addEventListener('keyup', (e) => {
      if (e.code === 'KeyA' || e.code === 'LeftArrow' && enabledButtons.left) {
        rotation.left.value = 0
        velocity = 0
      } 
      if (e.code === 'KeyD' || e.code === 'RightArrow' && enabledButtons.right) {
        rotation.right.value = 0
        velocity = 0
      }

      pressed[e.code] = false
    })
  }

  initControls()

  // return isMoving
}