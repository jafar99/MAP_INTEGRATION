const maharashtra = [
    { name: "Ahmednagar", coordinates: [19.0946, 74.7384] },
    { name: "Akola", coordinates: [20.7059, 77.0023] },
    { name: "Amravati", coordinates: [20.9320, 77.7523] },
    { name: "Aurangabad", coordinates: [19.8762, 75.3433] },
    { name: "Beed", coordinates: [18.9909, 75.7555] },
    { name: "Bhandara", coordinates: [21.1739, 80.0674] },
    { name: "Buldhana", coordinates: [20.5470, 76.1842] },
    { name: "Chandrapur", coordinates: [19.9615, 79.2961] },
    { name: "Dhule", coordinates: [20.9042, 74.7745] },
    { name: "Gadchiroli", coordinates: [20.1960, 80.1811] },
    { name: "Gondia", coordinates: [21.4602, 80.1926] },
    { name: "Hingoli", coordinates: [19.7072, 77.1446] },
    { name: "Jalgaon", coordinates: [21.0488, 75.5329] },
    { name: "Jalna", coordinates: [19.8393, 75.8838] },
    { name: "Kolhapur", coordinates: [16.7050, 74.2433] },
    { name: "Latur", coordinates: [18.4088, 76.5604] },
    { name: "Mumbai City", coordinates: [18.9388, 72.8353] },
    { name: "Mumbai Suburban", coordinates: [19.1314, 72.8483] },
    { name: "Nagpur", coordinates: [21.1458, 79.0882] },
    { name: "Nanded", coordinates: [19.1383, 77.3206] },
    { name: "Nandurbar", coordinates: [21.3876, 74.2407] },
    { name: "Nashik", coordinates: [20.0110, 73.7903] },
    { name: "Osmanabad", coordinates: [18.1810, 76.0389] },
    { name: "Palghar", coordinates: [19.6962, 72.7658] },
    { name: "Parbhani", coordinates: [19.2704, 76.7749] },
    { name: "Pune", coordinates: [18.5204, 73.8567] },
    { name: "Raigad", coordinates: [18.7701, 73.4110] },
    { name: "Ratnagiri", coordinates: [16.9901, 73.3120] },
    { name: "Sangli", coordinates: [16.8494, 74.6077] },
    { name: "Satara", coordinates: [17.6868, 74.0000] },
    { name: "Sindhudurg", coordinates: [16.0020, 73.6788] },
    { name: "Solapur", coordinates: [17.6599, 75.9064] },
    { name: "Thane", coordinates: [19.2183, 72.9781] },
    { name: "Wardha", coordinates: [20.7453, 78.6022] },
    { name: "Washim", coordinates: [20.1136, 77.1406] },
    { name: "Yavatmal", coordinates: [20.3888, 78.1204] },

  
  ];
  


//   <ComposableMap
//   data-tip=""
//   projection="geoMercator"
//   width={150}
//   height={150}
//   projectionConfig={{ scale: scaleMap }}
// >
//   <ZoomableGroup zoom={zoomMap} center={centerMap}>
//     <Geographies geography={geoURL}>
//       {({ geographies }) =>
//         geographies.map(geo => (
//           <Geography
//             key={geo.rsmKey}
//             geography={geo}
//             onMouseEnter={() => {
//               const { district } = geo.properties;
//               setTooltipContent(`${district}`);
//             }}
//             onMouseLeave={() => {
//               setTooltipContent("");
//             }}
//             onClick={() => {
//               const { district } = geo.properties;
//               setDistrictName(`${district}`);
//             }}
//             style={{
//               default: {
//                 fill: "#D6D6DA",
//                 outline: "none"
//               },
//               hover: {
//                 fill: "forestgreen",
//                 outline: "none"
//               },
//               pressed: {
//                 fill: "#2E8B57",
//                 outline: "none"
//               }
//             }}
//           />
//         ))
//       }
//     </Geographies>
//     {/* Render district markers */}
//     {selectedState === "Maharashtra" &&
//       districtMarkers.map((marker, index) => (
//         <Marker key={index} coordinates={marker.coordinates}>
//           <circle r={2} fill="red" />
//           <text
//             textAnchor="middle"
//             y={marker.coordinates[1] > 0 ? -10 : 15}
//             style={{
//               fill: "#000",
//               fontWeight: "bold",
//               fontSize: "0.12rem",
//               zIndex: "auto" // Add zIndex property
//             }}
//           >
//             {marker.name}
//           </text>
//         </Marker>
//       ))}
//   </ZoomableGroup>
// </ComposableMap>