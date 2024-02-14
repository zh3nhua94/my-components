import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import FolderIcon from "@mui/icons-material/Folder";
import { Link } from "react-router-dom";

const MuiListItem = ({ title, link }: { title: string; link: string }) => {
	return (
		<Link to={link}>
			<ListItem
				disablePadding
				divider
			>
				<ListItemButton>
					<ListItemIcon>
						<FolderIcon />
					</ListItemIcon>
					<ListItemText>{title}</ListItemText>
				</ListItemButton>
			</ListItem>
		</Link>
	);
};

export default MuiListItem;
