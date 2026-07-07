const GOOD = 100
const MID = 80
const BAD = 50

const messages = {
  [GOOD]: 'Looking good',
  [MID]: 'It could be better',
  [BAD]: 'Poor condition'
}

const gradients = {
  [GOOD]: { from: '#452981', to: '#7239b3' },
  [MID]: { from: '#f37329', to: '#cc3b02' },
  [BAD]: { from: '#a10705', to: '#7a0000' }
}

const normalizeHealth = (health) => {
  const value = Number.parseInt(health, 10)

  if (Number.isNaN(value)) {
    throw new TypeError(`Invalid battery health: ${health}`)
  }

  return Math.min(GOOD, Math.max(0, value))
}

const getHealthBand = (health) => {
  const value = normalizeHealth(health)

  if (value < BAD) return BAD
  if (value < MID) return MID
  return GOOD
}

const getHealthMessage = (health) => messages[getHealthBand(health)]

const getHealthGradient = (health) => gradients[getHealthBand(health)]

const formatHealthPercentage = (health) => `${normalizeHealth(health)}%`

const parseBatteryStatus = (battery = {}) => {
  const health = normalizeHealth(battery.health)
  const band = getHealthBand(health)

  return {
    health,
    percentage: formatHealthPercentage(health),
    band,
    message: messages[band],
    gradient: gradients[band],
    status: battery.status || battery.state || 'unknown'
  }
}

module.exports = {
  BAD,
  GOOD,
  MID,
  formatHealthPercentage,
  getHealthBand,
  getHealthGradient,
  getHealthMessage,
  gradients,
  messages,
  normalizeHealth,
  parseBatteryStatus
}
