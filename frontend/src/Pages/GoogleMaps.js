import React, { useState, useEffect } from "react";
import {
	GoogleMap,
	Marker,
	InfoWindow,
	useLoadScript,
} from "@react-google-maps/api";

import styled from "styled-components";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

const mapContainerStyle = {
	width: "100vw",
	height: "100vh",
};

export default function GoogleMaps({ coordinates }) {
	coordinates = coordinates.map((coordinate) => {
		return parseFloat(coordinate);
	});

	const { isLoaded, loadError } = useLoadScript({
		// googleMapsApiKey: "",
		googleMapsApiKey: "AIzaSyB8b-MWtS70kJUsWBYmM5HAd2HddpvF6I0",
	});
	// Store Polygon path in state
	const [markers, setMarkers] = useState([]);
	const [mapStyle, setMapStyle] = useState("terrain");
	const [activeMarker, setActiveMarker] = useState({});

	const handleActiveMarker = (activeOwner) => {
		if (activeOwner.id === activeMarker.id) {
			return;
		}
		setActiveMarker(activeOwner);
	};

	const changeMap = () => {
		if (mapStyle === "satellite") setMapStyle("terrain");
		if (mapStyle === "terrain") setMapStyle("satellite");
	};

	if (loadError) return "Error loading Maps";
	if (!isLoaded) return "Loading Maps";

	return (
		<Container className="App">
			<GoogleMap
				mapContainerClassName="App-map"
				mapContainerStyle={mapContainerStyle}
				center={{ lat: coordinates[0], lng: coordinates[1] }}
				zoom={17}
				version="weekly"
				on
				mapTypeId={mapStyle}
				options={{
					scaleControl: true,
					mapTypeControl: true,
				}}
			>
				{markers.map((owner) => (
					<Marker
						key={owner.id}
						position={{ lat: -25.363, lng: 131.044 }}
						onClick={() => handleActiveMarker(owner)}
					>
						{activeMarker.id === owner.id ? (
							<InfoWindow onCloseClick={() => setActiveMarker({})}>
								{/* <Card style={{ width: "18rem", color: "black" }}>
									<Card.Img
										variant="top"
										src="https://media-exp1.licdn.com/dms/image/C4D03AQENUoFq3rdr4w/profile-displayphoto-shrink_200_200/0/1641711630692?e=1652313600&v=beta&t=3OKJ_E7pRqEgrsNc6TzoNbZycRbX3b1TJOMuaVsQAQo"
									/>
									<Card.Body>
										<Card.Title> Ownership Details</Card.Title>
										<Card.Text> Property Belongs to: {owner.name}</Card.Text>
										<Card.Text>
											Property was purchased on: {owner.date}
										</Card.Text>
										<Card.Text>Property Status: {owner.status}</Card.Text>
										<Card.Text>Litigation Status:{owner.litigation}</Card.Text>
										<Card.Text>
											Estimated Value: {owner.estimatedValue}
										</Card.Text>
										<Card.Text>
											Last Recorded Transfer: {owner.lastTransfer}
										</Card.Text>

										<Card.Text>
											BlockChain Address: {owner.onChainAddress}
										</Card.Text>
									</Card.Body>
								</Card> */}
							</InfoWindow>
						) : null}
					</Marker>
				))}
			</GoogleMap>
			<FormControl component="fieldset" variant="standard">
				<FormGroup>
					<FormControlLabel
						control={
							<Switch
								checked={mapStyle === "satellite"}
								onChange={changeMap}
								name="Satellite"
							/>
						}
						label="Change Map Style (terrain or satellite)"
					/>
				</FormGroup>
				{/* <FormHelperText color="success">Terrain or Satellite</FormHelperText> */}
			</FormControl>
			{Object.keys(activeMarker).length !== 0 && (
				<ReportModal>
					<h2>PROPERTY DETAILS: {activeMarker.markerName}</h2>
					{/* <Row>
						<Col sm={4}>
							<Card
								className="justify-content-center mx-auto"
								style={{ width: "100%", height: "100%" }}
							>
								<Image
									className="mx-auto"
									style={{ width: "50%" }}
									fluid
									rounded
									src={activeMarker.image}
								/>
							</Card>
						</Col>
						<Col sm={8}>
							<Card className="justify-content-center">
								<Card.Body>
									<Card.Title>Reistered Owner:{activeMarker.name}</Card.Title>
									<Card.Text>Address: {activeMarker.address}</Card.Text>
									<Card.Text>
										Property was purchased on: {activeMarker.date}
									</Card.Text>
									<Card.Text>Property Status: {activeMarker.status}</Card.Text>
									<Card.Text>
										Litigation Status:{activeMarker.litigation}
									</Card.Text>
									<Card.Text>
										Estimated Value: {activeMarker.estimatedValue}
									</Card.Text>
									<Card.Text>
										Last Recorded Transfer: {activeMarker.lastTransfer}
									</Card.Text>

									<Card.Text>
										BlockChain Address: {activeMarker.onChainAddress}
									</Card.Text>
									<Card.Text>
										Verifying Institution: {activeMarker.verifyingInstitution}
									</Card.Text>
									<Stack gap={2} className="col-md-5 mx-auto">
										<Button
											variant="primary"
											href="mailto:{tommideadeoye@gmail.com}"
										>
											Contact Owner
										</Button>
										<Button
											variant="primary"
											href="mailto:{tommideadeoye@gmail.com}"
										>
											Generate Report
										</Button>
									</Stack>
								</Card.Body>
							</Card>
						</Col>
					</Row> */}
				</ReportModal>
			)}
		</Container>
	);
}

const Container = styled.div`
	overflow-x: hidden;
	background: rgb(2, 0, 36);
	color: white;
	backgroundcolor: "white";
`;

const ReportModal = styled.div`
	color: black;
	padding: 20px 20px 20px 20px;
	> h2 {
		padding: 20px;
		color: white;
	}
`;
