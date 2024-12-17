import { useRgbBreathingObject } from '../../../composables/use-rgb-breathing'
import { BoxGeometry, Group, Mesh, MeshBasicMaterial, Object3D } from 'three'
import { useCarControls } from './useCarControls'

const JUNK_SIZE = 2
const JUNK_GAP = 150
const junkMaterial = new MeshBasicMaterial()

export const useGame = (car: Object3D, chunks: Mesh[], chunkLength: number) => {
  const isLose = ref(false)
  const isStarted = ref(false)
  const isStarting = ref(false)
  const points = ref(0)
  useCarControls(car)

  const rgb = useRgbBreathingObject()
  let speed = 3
  let pointsInterval: any

  const ROAD_WIDTH = 18
  const CAR_SIZE = 3
  const getJunkPosition = () => {
    const v = Math.random() * ROAD_WIDTH - ROAD_WIDTH / 2
    if (Math.abs(v) < CAR_SIZE / 2) {
      return v + 1 * v / Math.abs(v)
    }
    return v
  }
  const junkGroup = new Group()
  const junks = new Array(8).fill(0).map((_, i) => {
    const j = new Mesh(new BoxGeometry(JUNK_SIZE, JUNK_SIZE, JUNK_SIZE), junkMaterial)
    j.position.y = 0
    j.position.z = -JUNK_GAP * i - 100
    j.position.x = getJunkPosition()
    j.visible = false
    junkGroup.add(j)
    return j
  })

  const placeJunks = () => {
    junks.forEach((j, i) => {
      j.position.z = -JUNK_GAP * i - 300
      j.position.x = getJunkPosition()
    })
  }

  const BREAK_DISTANCE_OFFSET = CAR_SIZE / 2 + JUNK_SIZE / 2

  const lose = () => {
    isLose.value = true
    clearInterval(pointsInterval)
    junks.forEach((j) => j.visible = false)
    speed = 5
  }

  const update = () => {
    chunks.forEach((chunk) => {
      chunk.position.z += speed
      if (chunk.position.z > chunkLength + 20) {
        chunk.position.z = -chunkLength + 20
      }
    }) 

    const color = rgb.value
    junkMaterial.color.setRGB(color.r, color.g, color.b)

    if (!isStarted.value || isLose.value) { return }

    junks.forEach((junk) => {
      junk.position.z += speed
      if (junk.position.z > 20) {
        junk.position.z = -JUNK_GAP * junks.length
        junk.position.x = getJunkPosition()
        junk.userData.behindCar = false
      }

      if (junk.position.z >= -CAR_SIZE && !junk.userData.behindCar) {
        junk.userData.behindCar = true

        const distance = Math.sqrt(Math.pow(junk.position.x - car.position.x, 2)) - BREAK_DISTANCE_OFFSET

        if (distance < 1) {
          lose()
        }
        speed += 0.1
        points.value += 100
      }
    })
  }

  const start = () => {
    isStarting.value = true
    requestIdleCallback(placeJunks)
    setTimeout(() => {
      requestIdleCallback(() => {
        isStarting.value = false
        isStarted.value = true
        junks.forEach((j) => j.visible = true)
        isLose.value = false
        points.value = 0
      })
    }, 3000)
  }


  return { startGame: start, update, isStarted, isStarting, isLose, points, junkGroup }
}