import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function ItemCard({ data }) {
	let {
		business_name,
		coordinates,
		first_name,
		last_name,
		phone_number,
		inventory,
		last_login,
		business_image,
		business_description,
		email,
	} = data;

	business_name = business_name || `${first_name} ${last_name} Store`;

	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardHeader
				// avatar={
				// 	<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
				// 		R
				// 	</Avatar>
				// }
				action={
					<IconButton aria-label="settings">
						<MoreVertIcon />
					</IconButton>
				}
				title={business_name}
				subheader={email}
			/>
			<CardMedia
				component="img"
				height="194"
				image={business_image}
				alt="Paella dish"
			/>
			<CardContent>
				<Typography variant="body2" color="text.secondary">
					{business_description ||
						"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."}
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				{/* <IconButton aria-label="add to favorites">
					<FavoriteIcon />
				</IconButton> */}
				{/* <IconButton aria-label="share">
					<ShareIcon />
				</IconButton> */}
			</CardActions>
		</Card>
	);
}
