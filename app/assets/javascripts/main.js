import { projectShowView } from './projectShowView'
import { updateNavbarColor } from './updateNavbarColor'

const hasProjectIdInPath = /\/projects\/\d+/.test(location.pathname)

if (hasProjectIdInPath) {
  projectShowView.initialize()
}

updateNavbarColor()
