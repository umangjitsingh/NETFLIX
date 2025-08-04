import BrowseHeader from "../COMPONENTS/BrowseHeader.jsx";
import MainContainer from "../COMPONENTS/MainContainer.jsx";
import SecondaryContainer from "../COMPONENTS/SecondaryContainer.jsx";
import useMovies from "../HOOKS/useMovies.js";
import GPT from '../COMPONENTS/GPT.jsx';
import { useSelector } from 'react-redux';


function Browse() {
	useMovies('now_playing')
	const toggleGpt = useSelector(store => store.gpt.toggleGptUI);

	return (
		<div className="w-full  relative scroll-smooth">
			<BrowseHeader/>

			{toggleGpt ? <div>
				<GPT/>
				<div className="relative border-t-[70px] border-zinc-900">
					<MainContainer/>
				</div>

				<div className=" w-full min-h-screen  bg-gradient-to-br from-zinc-950 to-zinc-800  ">
					<SecondaryContainer/>
				</div>
			</div> : <>
				<div>
					<MainContainer/>
				</div>

				<div className=" w-full min-h-screen  bg-gradient-to-br from-zinc-950 to-zinc-800 ">
					<SecondaryContainer/>
				</div>
			</>}

		</div>);
}

export default Browse;