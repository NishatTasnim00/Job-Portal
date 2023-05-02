import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import toast, { Toaster } from 'react-hot-toast';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './component/Home/Home';
import Statistics from './component/Statistics/Statistics';
import JobApplied from './component/JobApplied/JobApplied';
import Blog from './component/Blog/Blog';
import ErrorPage from './component/ErrorPage';
import FeaturedJob from './component/FeaturedJob/FeaturedJob';
import JobDetails from './component/JobDetails/JobDetails';
import { fetchItemData, jobsAndAppliedJobs } from './loader/Jobs&AppliedJobs';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App></App>,
		errorElement: <ErrorPage></ErrorPage>,
		loader: jobsAndAppliedJobs,
		children: [
			{
				path: '/',
				element: <Home></Home>,
			},
			{
				path: 'job/:id',
				element: <JobDetails></JobDetails>,
				loader:({params}) => (params.id)  
				
			},

			{
				path: '/statistics',
				element: <Statistics></Statistics>,
			},
			{
				path: '/appliedJob',
				element: <JobApplied></JobApplied>,
			},
			{
				path: '/blog',
				element: <Blog></Blog>,
			},
		],
	},
]);


ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
		<Toaster></Toaster>
	</React.StrictMode>
);
