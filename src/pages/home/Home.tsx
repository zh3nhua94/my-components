import List from "@mui/material/List";
import { Box } from "@mui/material";
import MuiListItem from "../../components/mui-ListItem/MuiListItem";

const Home = () => {
	return (
		<Box sx={{ width: "100%", maxWidth: 800, margin: "0 auto" }}>
			<h1>My Components by Zen</h1>
			<Box sx={{ width: "100%", bgcolor: "background.paper" }}>
				<List>
					<MuiListItem
						title={"Pagination"}
						link={"/pagination"}
					/>
				</List>
			</Box>
		</Box>
	);
};

export default Home;
