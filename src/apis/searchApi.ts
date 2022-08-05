import axios from "axios";

const searchApi = axios.create({
	baseURL: "https://api.mapbox.com/geocoding/v5/mapbox.places",
	params: {
		limit: 5,
		languaje: "es",
		access_token:
			"pk.eyJ1IjoibGVhbmRyby1jcmlzdGlhbm8iLCJhIjoiY2w2ZmpsZXIzMmdocTNscDNvb3NkY25ydyJ9.v2nn2oXtOo_rXOKNYCS_FA",
	},
});

export default searchApi;