import axios from "axios";

const directionsApi = axios.create({
	baseURL: "https://api.mapbox.com/directions/v5/mapbox/driving",
	params: {
		alternatives: false,
		geometries: "geojson",
		overview: "simplified",
		steps:false,
		access_token:
			"pk.eyJ1IjoibGVhbmRyby1jcmlzdGlhbm8iLCJhIjoiY2w2ZmpsZXIzMmdocTNscDNvb3NkY25ydyJ9.v2nn2oXtOo_rXOKNYCS_FA",
	},
});

export default directionsApi;