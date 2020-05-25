/* eslint-disable*/
export const displayMap = (locations) => {
	mapboxgl.accessToken =
		'pk.eyJ1Ijoiajg5MjAyMCIsImEiOiJjazlqYzJjOXUwMGVuM2xxaGZ6ODR0NTAxIn0.C3rEcagAgx1p7lbK4XcPWQ';
	var map = new mapboxgl.Map({
		container: 'map',
		style: 'mapbox://styles/j892020/ck9jcwgpv0onc1io8b0d9xy4j',
		scrollZoom: false,
		// center: [-118.263768, 34.02792],
		// zoom: 10,
		// interactive: false
	});

	const bounds = new mapboxgl.LngLatBounds();

	locations.forEach((loc) => {
		// Create marker
		const el = document.createElement('div');
		el.className = 'marker';

		// Add marker
		new mapboxgl.Marker({
			element: el,
			anchor: 'bottom',
		})
			.setLngLat(loc.coordinates)
			.addTo(map);

		// Add popup
		new mapboxgl.Popup({
			offset: 30,
		})
			.setLngLat(loc.coordinates)
			.setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
			.addTo(map);

		// Txend map bounds to include current location
		bounds.extend(loc.coordinates);
	});

	map.fitBounds(bounds, {
		padding: {
			top: 200,
			bottom: 150,
			left: 100,
			right: 100,
		},
	});
};
