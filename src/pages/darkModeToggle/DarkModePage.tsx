import React from "react";
import { ThemeProvider } from "../../components/darkModeToggle/context/ThemeContext";
import DarkModeToggle from "../../components/darkModeToggle/DarkModeToggle";

/** 

The only thing need to note this page is the ThemeProvider only.

**/

const DarkModePage = () => {
	return (
		<ThemeProvider>
			<div style={{ minHeight: "100vh" }}>
				<div className="page-container">
					<DarkModeToggle />
					<p>
						Knausgaard slow-carb Brooklyn, cronut blog portland same banh mi literally prism keffiyeh 8-bit. Readymade
						taiyaki kickstarter, wolf tbh grailed cold-pressed typewriter schlitz food truck mumblecore. Lo-fi
						cold-pressed intelligentsia disrupt biodiesel twee ethical shaman whatever fanny pack drinking vinegar.
						Yuccie hammock umami gatekeep iceland DIY VHS try-hard post-ironic lumbersexual. Knausgaard street art air
						plant keytar pok pok, selvage vibecession flexitarian portland wayfarers authentic.
					</p>
				</div>
			</div>
		</ThemeProvider>
	);
};

export default DarkModePage;
