import logo from "../assets/logo.jpg";
import ThemeSwitcher from "../components/ThemeSwitcher/ThemeSwitcher";

export default function Navbar() {
	const logoStyle = {
		width: '50px', 
		height: 'auto'  
	};

	return (
		<header>
			<div className="lg:border-b lg:border-b-gray-500/10 dark:lg:border-b-gray-300/10">
				<nav className="flex justify-center lg:justify-between lg:items-center container">
					<div className="inline-flex lg:flex items-center space-x-3 py-3 md:py-0">
						<a href="#">
							<img style={logoStyle} className="dark:hidden" src={logo} alt="logo" />
							<img style={logoStyle} className="hidden dark:inline-block" src={logo} alt="logo" />
						</a>
						<div className="lg:hidden mt-5 absolute right-6 top-0">
							<ThemeSwitcher />
						</div>
						<span className="mt-5 text-sm hidden lg:inline-block dark:text-gray-200">Sukkur</span>
					</div>

					<ul className="hidden lg:flex space-x-8 items-center">
						<ThemeSwitcher />
					</ul>
				</nav>
			</div>
		</header>
	);
}
