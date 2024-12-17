import EngineImage from '@/assets/projects/engine.png'
import CheckersImage from '@/assets/projects/checkers.png'
import TestsImage from '@/assets/projects/tests.png'
import NapasProjectImage from '@/assets/projects/napasproject.png'
import VueNodes from '@/assets/projects/vue-nodes.png'

export const projects = [
  {
    name: 'BronzeEngine',
    description: 'WebGL game engine',
    link: {
      text: 'Check repository',
      url: 'https://github.com/m0ksem/Bronze-Engine#-bronze-engine-',
    },
    image: EngineImage,
  },
  {
    name: 'GameCheckersBot',
    description: 'Telegram bot',
    link: {
      text: 'Check repository',
      url: 'https://github.com/m0ksem/GameCheckersBot',
    },
    image: CheckersImage,
  },
  {
    name: 'ImproveTests',
    description: 'Android app',
    link: {
      text: 'Last release',
      url: 'https://github.com/m0ksem/Tests/releases',
    },
    image: TestsImage,
  },
  {
    name: 'NapasProject',
    description: 'Website',
    link: {
      text: 'Visit',
      url: 'https://napas-project.com/',
    },
    image: NapasProjectImage,
  },
  {
    name: 'VueNodes',
    description: 'Library',
    link: {
      text: 'Check repository',
      url: 'https://github.com/m0ksem/vue-nodes'
    },
    image: VueNodes,
  }
]