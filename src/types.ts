export type Transition = {
  property: TransitionValue
  timingFunction: TransitionValue
  duration: number
  delay: number
  id: string
}

export type TransitionValue = {
  name: string
  value?: string
}
