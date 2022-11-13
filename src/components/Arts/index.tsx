import React from 'react'
import ArtItem from '../ArtItem'
import { useSnapshot } from 'valtio'
import { state } from '../../store/artStore'
import styles from './index.module.css'
import AddArtItem from '../AddArtItem'

export default function Arts() {
	const { arts } = useSnapshot(state)
	return <>
		<h1>Art Rater</h1>
		<AddArtItem />
		<section className={styles.artsContainer}>
			{arts.map(({ id, disabled }) => <div className={styles.artItem} key={id}>
				<ArtItem {...{ id, disabled }} />
			</div>)}
		</section>
	</>
}

