import { proxy } from 'valtio'
import { Art } from '../types'

interface ArtState {
  arts: Art[]
}

export const state = proxy<ArtState>({
	arts: [
		{ id: 27992, disabled: false },
		{ id: 27998, disabled: false },
		{ id: 27999, disabled: false },
		{ id: 27997, disabled: false },
		{ id: 27993, disabled: false },
	]
})

export const actions = {
	addArt: (id: number) => {
		state.arts.unshift({ id, disabled: false })
	},
	removeArt: (id: number) => {
		const foundAt = state.arts.findIndex(a => a.id === id)
		foundAt >= 0 && state.arts.splice(foundAt, 1)
	},
}