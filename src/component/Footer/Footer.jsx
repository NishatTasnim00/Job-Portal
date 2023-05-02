import React from 'react';

const Footer = () => {
	return (
		<div>
			<footer class="bg-[#191919] md:h-96 grid  content-center pb-10 mt-10">
				<section class="w-full max-w-6xl mx-auto text-white space-y-14 md:grid grid-cols-4 gap-7 justify-center p-5">
					<div class="text-center md:text-start pt-10">
						<img
							class="pb-5 h-14 mx-auto md:ml-0"
							src="images/logo.png"
							alt=""
						></img>
						<p class="font-poppins">
							We understand that the job market can be challenging and
							competitive, especially during these uncertain times. However, we
							want to remind you that you have the skills, experience, and
							potential to succeed in your desired career.
						</p>
					</div>
					<div class="text-center md:text-start">
						<h3 class="text-white font-ebgara font-extrabold text-2xl pb-5">
							Usefull Link
						</h3>
						<ul class="list-none font-poppins space-y-2">
							<li>Home</li>
							<li>Statistics</li>
							<li>Applied Job</li>
							<li>Blog</li>
							<li>Contact Us</li>
						</ul>
					</div>
					<div class="space-y-2 text-center md:text-start">
						<h3 class="text-white font-ebgara font-extrabold text-2xl pb-5">
							Contact Now
						</h3>
						<p class="font-poppins">
							55, Banani
							<br />
							Dhaka, Bangladesh
						</p>
						<p class="font-poppins">
							+88 01750 000 000
							<br />
							+88 01750 000 000
						</p>
						<p class="font-poppins">
							info@gmail.com
							<br />
							info@gmail.com
						</p>
					</div>
					<div class="space-y-2 text-center md:text-start">
						<h3 class="text-white font-ebgara font-extrabold text-2xl pb-5">
							Subscribe
						</h3>
						<p class="font-poppins">
							Subscribe for our latest & Articles. We Won’t Give You Spam Mails
						</p>

						<div class="flex relative">
							<input
								type="text"
								id="website-admin"
								class="rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-44 max-w-600 text-sm p-4  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="Email Address"
							></input>
							<span class="absolute right-0 top-0 bottom-0 inline-flex items-center px-8 text-sm text-gray-900 bg-dark-amber border border-r-0 border-gray-300  rounded-lg dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600 p-1">
								<i class="fill-dark-amber text-white fa-solid fa-location-arrow fa-xl"></i>
							</span>
						</div>
					</div>
				</section>
			</footer>
		</div>
	);
};

export default Footer;
