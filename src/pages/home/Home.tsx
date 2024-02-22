import List from "@mui/material/List";
import { Box } from "@mui/material";
import MuiListItem from "../../components/mui-ListItem/MuiListItem";

const Home = () => {
	return (
		<Box sx={{ width: "100%", maxWidth: 800, margin: "0 auto" }}>
			<h1 className="homeTitle">My Components by Zen</h1>
			<Box sx={{ width: "100%", bgcolor: "background.paper" }}>
				<List>
					<MuiListItem
						title={"Loading Skeleton"}
						link={"/loading-skeleton"}
					/>
					<MuiListItem
						title={"Dark Mode"}
						link={"/darkMode"}
					/>
					<MuiListItem
						title={"Pagination"}
						link={"/pagination"}
					/>
					<MuiListItem
						title={"Infinite Scroll (Intersection Observer API)"}
						link={"/infinite-scroll"}
					/>
					<MuiListItem
						title={"Progress Bar (Scroll)"}
						link={"/progress-bar-scroll"}
					/>
					<MuiListItem
						title={"Progress Bar"}
						link={"/progress-bar"}
					/>
					<MuiListItem
						title={"Countdown Button"}
						link={"/countdown-button"}
					/>
				</List>
			</Box>
		</Box>
	);
};

export default Home;
