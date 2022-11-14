import React from 'react'
import ArtItem from '../ArtItem'
import { useArtStore } from '../../stores/artStore'
import styles from './index.module.css'
import AddArtItem from '../AddArtItem'

export default function Arts() {
	const { snap: { arts } } = useArtStore()

	return <>
		<h1>Art Rater</h1>
		<AddArtItem />
		<section className={styles.artsContainer}>
			{arts.map(({ id, disabled }) => {
				return !disabled ? <div className={styles.artItem} key={id}>
					<ArtItem id={id} />
				</div> : null
			})}
		</section>
	</>
}

