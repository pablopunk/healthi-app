import { describe, it, expect } from 'vitest'
import health from '../src/health.js'

const {
  BAD,
  GOOD,
  MID,
  formatHealthPercentage,
  getHealthBand,
  getHealthGradient,
  getHealthMessage,
  normalizeHealth,
  parseBatteryStatus
} = health

describe('health helpers', () => {
  it('formats numeric health values as a percentage', () => {
    expect(formatHealthPercentage(87)).toBe('87%')
  })

  it('formats string health values as a percentage', () => {
    expect(formatHealthPercentage('92')).toBe('92%')
  })

  it('clamps health values above 100 to 100', () => {
    expect(normalizeHealth(145)).toBe(100)
  })

  it('maps low health values to the bad band', () => {
    expect(getHealthBand(49)).toBe(BAD)
    expect(getHealthMessage(49)).toBe('Poor condition')
    expect(getHealthGradient(49)).toEqual({ from: '#a10705', to: '#7a0000' })
  })

  it('maps middle health values to the mid band', () => {
    expect(getHealthBand(79)).toBe(MID)
    expect(getHealthMessage(79)).toBe('It could be better')
    expect(getHealthGradient(79)).toEqual({ from: '#f37329', to: '#cc3b02' })
  })

  it('maps healthy values to the good band', () => {
    expect(getHealthBand(80)).toBe(GOOD)
    expect(getHealthMessage(80)).toBe('Looking good')
    expect(getHealthGradient(80)).toEqual({ from: '#452981', to: '#7239b3' })
  })

  it('parses battery status payloads into ui state', () => {
    expect(parseBatteryStatus({ health: '64', status: 'Discharging' })).toEqual({
      health: 64,
      percentage: '64%',
      band: MID,
      message: 'It could be better',
      gradient: { from: '#f37329', to: '#cc3b02' },
      status: 'Discharging'
    })
  })

  it('falls back to unknown status when the battery payload omits it', () => {
    expect(parseBatteryStatus({ health: 100 })).toMatchObject({
      health: 100,
      percentage: '100%',
      band: GOOD,
      status: 'unknown'
    })
  })
})
