import { getContext, setContext } from 'svelte'

export function setDesign(d) {
  setContext('theme', d)
}

export function getDesign() {
  getContext('theme')
}