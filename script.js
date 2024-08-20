const cancerData = [
    {
        location: "Kenyatta National Hospital",
        cases: 2000,
        coordinates: [-1.3002, 36.8061]
    },
    {
        location: "Nairobi Hospital",
        cases: 1500,
        coordinates: [-1.2921, 36.8025]
    },
    {
        location: "Mater Hospital",
        cases: 1200,
        coordinates: [-1.3043, 36.8385]
    },
    {
        location: "Aga Khan University Hospital",
        cases: 1000,
        coordinates: [-1.2685, 36.8077]
    },
    {
        location: "MP Shah Hospital",
        cases: 800,
        coordinates: [-1.2685, 36.8067]
    }
    // Add more locations as necessary
];

const map = L.map('map').setView([-1.2921, 36.8219], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
}).addTo(map);

cancerData.forEach(location => {
    const marker = L.marker(location.coordinates).addTo(map);

    marker.on('click', () => {
        document.getElementById('info').innerHTML = `
            <h2>${location.location}</h2>
            <p>Reported Cases: ${location.cases}</p>
        `;
    });
});


