import { Outlet, useLoaderData } from 'react-router-dom';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import { createContext } from 'react';

export	const JobContext = createContext([]);


function App() {
	const jobs = useLoaderData()
	console.log(jobs);
	return (
		<div>
			<JobContext.Provider value={jobs}>
				<Header></Header>
				<div className="px-4 py-5 sm:max-w-xl md:max-w-full lg:max-w-screen-full md:px-24 lg:px-0">
					<Outlet></Outlet>
				</div>
				<Footer></Footer>
			</JobContext.Provider>
		</div>
	);
}

export default App;
