import {TransitionValue} from './types'

export const transitionProperties: TransitionValue[] = [
  {name: 'background-color'},
  {name: 'color'},
  {name: 'border'},
  {name: 'border-radius'},
  {name: 'width'},
  {name: 'height'},
  {name: 'opacity'},
  {name: 'font-size'},
  {name: 'font-weight'},
  {name: 'margin'},
  {name: 'padding'},
  {name: 'transform'},
  {name: 'box-shadow'},
  {name: 'text-shadow'},
  {name: 'filter'}
]

export const timingFunctions: TransitionValue[] = [
  {name: 'linear'},
  {name: 'ease-in'},
  {name: 'ease-out'},
  {name: 'ease-in-out'},
  {name: 'sine', value: 'cubic-bezier(0.45, 0.05, 0.55, 0.95)'},
  {name: 'quadratic', value: 'cubic-bezier(0.46, 0.03, 0.52, 0.96)'},
  {name: 'cubic', value: 'cubic-bezier(0.65, 0.05, 0.36, 1)'},
  {name: 'slow in, fast out', value: 'cubic-bezier(0.4, 0, 0.2, 1)'},
  {name: 'bounce', value: 'cubic-bezier(0.68, -0.55, 0.27, 1.55)'}
  // {name: 'custom', value: 'cubic-bezier(0, 0, 1, 1)'} disabled for now, too easy to input invalid values
]

export const verbs = [
  'Formulated',
  'Concocted',
  'Synthesized',
  'Devised',
  'Begat',
  'Initiated',
  'Actualised',
  'Spawned',
  'Shaped',
  'Enkindled',
  'Constituted',
  'Materialized',
  'Pummeled',
  'Knit',
  'Performed',
  'Conjured',
  'Summoned',
  'Evoked',
  'Divined',
  'Encapsulated',
  'Accumulated',
  'Expedited'
]
