import './App.css'
import Arts from './components/Arts'
import AddArtItem from './components/AddArtItem'
import 'react-toastify/dist/ReactToastify.css'

export default function App() {
	return <div className="App">
		<Arts />
		<AddArtItem />
	</div>
}
