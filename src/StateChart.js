import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker,
} from "react-simple-maps";
import andamannicobar from "./topojsons/states/andamannicobar.json";
import andhrapradesh from "./topojsons/states/andhrapradesh.json";
import arunachalpradesh from "./topojsons/states/arunachalpradesh.json";
import assam from "./topojsons/states/assam.json";
import bihar from "./topojsons/states/bihar.json";
import chhattisgarh from "./topojsons/states/chhattisgarh.json";
import delhi from "./topojsons/states/delhi.json";
import goa from "./topojsons/states/goa.json";
import gujarat from "./topojsons/states/gujarat.json";
import haryana from "./topojsons/states/haryana.json";
import himachalpradesh from "./topojsons/states/himachalpradesh.json";
import jammukashmir from "./topojsons/states/jammukashmir.json";
import jharkhand from "./topojsons/states/jharkhand.json";
import karnataka from "./topojsons/states/karnataka.json";
import kerala from "./topojsons/states/kerala.json";
import lakshadweep from "./topojsons/states/lakshadweep.json";
import madhyapradesh from "./topojsons/states/madhyapradesh.json";
import maharashtra from "./topojsons/states/maharashtra.json";
import manipur from "./topojsons/states/manipur.json";
import meghalaya from "./topojsons/states/meghalaya.json";
import mizoram from "./topojsons/states/mizoram.json";
import nagaland from "./topojsons/states/nagaland.json";
import odisha from "./topojsons/states/odisha.json";
import punjab from "./topojsons/states/punjab.json";
import rajasthan from "./topojsons/states/rajasthan.json";
import sikkim from "./topojsons/states/sikkim.json";
import tamilnadu from "./topojsons/states/tamilnadu.json";
import telangana from "./topojsons/states/telangana.json";
import tripura from "./topojsons/states/tripura.json";
import uttarakhand from "./topojsons/states/uttarakhand.json";
import uttarpradesh from "./topojsons/states/uttarpradesh.json";
import westbengal from "./topojsons/states/westbengal.json";





const StateChart = ({ setTooltipContent, setDistrictName, selectedState }) => {
  let geoURL;
  let zoomMap = 1;
  let centerMap = [80, 22];
  let scaleMap = 400;

  if (selectedState === "Andaman & Nicobar Island") {
    geoURL = andamannicobar;
    
    scaleMap = 1000;
    centerMap = [93, 10];
  } else if (selectedState === "Andhra Pradesh") {
    geoURL = andhrapradesh;
    scaleMap = 800;
    centerMap = [80, 17];
  } else if (selectedState === "Arunachal Pradesh") {
    geoURL = arunachalpradesh;
    scaleMap = 1200;
    centerMap = [94.5, 28];
  } else if (selectedState === "Assam") {
    geoURL = assam;
    scaleMap = 1350;
    centerMap = [92.9, 26];
  } else if (selectedState === "Bihar") {
    geoURL = bihar;
    scaleMap = 1300;
    centerMap = [85.5, 26];
  } else if (selectedState === "Chhattisgarh") {
    geoURL = chhattisgarh;
    scaleMap = 1100;
    centerMap = [82, 21];
  } else if (selectedState === "NCT of Delhi") {
    geoURL = delhi;
    scaleMap = 11000;
    centerMap = [77.05, 28.6];
  } else if (selectedState === "Goa") {
    geoURL = goa;
    scaleMap = 6000;
    centerMap = [74, 15.25];
  } else if (selectedState === "Gujarat") {
    geoURL = gujarat;
    scaleMap = 1000;
    centerMap = [71.5, 22];
  } else if (selectedState === "Haryana") {
    geoURL = haryana;
    scaleMap = 1700;
    centerMap = [76, 29];
  } else if (selectedState === "Himachal Pradesh") {
    geoURL = himachalpradesh;
    scaleMap = 2000;
    centerMap = [77.4, 31.8];
  } else if (selectedState === "Jammu & Kashmir") {
    geoURL = jammukashmir;
    scaleMap = 1000;
    centerMap = [76.3, 35];
  } else if (selectedState === "Jharkhand") {
    geoURL = jharkhand;
    scaleMap = 1700;
    centerMap = [85.7, 23.6];
  } else if (selectedState === "Karnataka") {
    geoURL = karnataka;
    scaleMap = 1100;
    centerMap = [76.5, 15];
  } else if (selectedState === "Kerala") {
    geoURL = kerala;
    scaleMap = 1800;
    centerMap = [76, 10.5];
  } else if (selectedState === "Lakshadweep") {
    geoURL = lakshadweep;
    scaleMap = 2300;
    centerMap = [73, 11];
  } else if (selectedState === "Madhya Pradesh") {
    geoURL = madhyapradesh;
    scaleMap = 900;
    centerMap = [78.5, 24];
  } else if (selectedState === "Maharashtra") {
    geoURL = maharashtra;
    scaleMap = 1000;
    centerMap = [76.8, 19.3];
  } else if (selectedState === "Manipur") {
    geoURL = manipur;
    scaleMap = 3400;
    centerMap = [93.8, 24.7];
  } else if (selectedState === "Meghalaya") {
    geoURL = meghalaya;
    scaleMap = 2500;
    centerMap = [91.3, 25.4];
  } else if (selectedState === "Mizoram") {
    geoURL = mizoram;
    scaleMap = 2900;
    centerMap = [92.8, 23.25];
  } else if (selectedState === "Nagaland") {
    geoURL = nagaland;
    scaleMap = 4000;
    centerMap = [94.3, 26.1];
  } else if (selectedState === "Odisha") {
    geoURL = odisha;
    scaleMap = 1300;
    centerMap = [84.4, 20.25];
  } else if (selectedState === "Punjab") {
    geoURL = punjab;
    scaleMap = 2300;
    centerMap = [75.35, 31.1];
  } else if (selectedState === "Rajasthan") {
    geoURL = rajasthan;
    scaleMap = 900;
    centerMap = [74, 26.3];
  } else if (selectedState === "Sikkim") {
    geoURL = sikkim;
    scaleMap = 6000;
    centerMap = [88.45, 27.6];
  } else if (selectedState === "Tamil Nadu") {
    geoURL = tamilnadu;
    scaleMap = 1300;
    centerMap = [78.25, 10.8];
  } else if (selectedState === "Telangana") {
    geoURL = telangana;
    scaleMap = 1800;
    centerMap = [79.5, 17.9];
  } else if (selectedState === "Tripura") {
    geoURL = tripura;
    scaleMap = 4500;
    centerMap = [91.75, 23.75];
  } else if (selectedState === "Uttarakhand") {
    geoURL = uttarakhand;
    scaleMap = 2000;
    centerMap = [79.3, 30];
  } else if (selectedState === "Uttar Pradesh") {
    geoURL = uttarpradesh;
    scaleMap = 1000;
    centerMap = [80.8, 27];
  } else if (selectedState === "West Bengal") {
    geoURL = westbengal;
    scaleMap = 1200;
    centerMap = [87.7, 24.2];
  }

  const maharashtraMarkers = [
    { name: "Ahmednagar", coordinates: [74.7384, 19.1946] },
    { name: "Akola", coordinates: [77.0023, 20.7059] },
    { name: "Amravati", coordinates: [77.7523, 20.932] },
    { name: "Aurangabad", coordinates: [75.3433, 19.8762] },
    { name: "Beed", coordinates: [75.4055, 18.7009] },
    { name: "Bhandara", coordinates: [82.5074, 21.1739] },
    { name: "Buldhana", coordinates: [76.1842, 20.507] },
    { name: "Chandrapur", coordinates: [79.2961, 19.9615] },
    { name: "Dhule", coordinates: [74.7745, 20.9042] },
    { name: "Gadchiroli", coordinates: [80.1811, 20.196] },
    { name: "Gondia", coordinates: [80.1926, 21.4602] },
    { name: "Hingoli", coordinates: [77.1446, 19.7072] },
    { name: "Jalgaon", coordinates: [75.5329, 21.0488] },
    { name: "Jalna", coordinates: [75.8838, 19.8393] },
    { name: "Kolhapur", coordinates: [74.2433, 16.705] },
    { name: "Latur", coordinates: [76.5604, 18.4088] },
    { name: "Mumbai", coordinates: [72.8353, 18.9388] },
    { name: "Mumbai Suburban", coordinates: [72.9583, 19.1314] },
    { name: "Nagpur", coordinates: [79.0882, 21.1458] },
    { name: "Nanded", coordinates: [77.3206, 19.1383] },
    { name: "Nandurbar", coordinates: [74.2407, 21.3876] },
    { name: "Nashik", coordinates: [73.7903, 20.011] },
    { name: "Osmanabad", coordinates: [76.0389, 18.181] },
    { name: "Palghar", coordinates: [72.7658, 19.6962] },
    { name: "Parbhani", coordinates: [76.7749, 19.2704] },
    { name: "Pune", coordinates: [73.8567, 18.5204] },
    { name: "Raigad", coordinates: [73.111, 18.5701] },
    { name: "Ratnagiri", coordinates: [73.312, 16.9901] },
    { name: "Sangli", coordinates: [74.6077, 16.8494] },
    { name: "Satara", coordinates: [74.0, 17.6868] },
    { name: "Sindhudurg", coordinates: [73.6788, 16.002] },
    { name: "Solapur", coordinates: [75.9064, 17.6599] },
    { name: "Thane", coordinates: [72.9781, 19.6183] },
    { name: "Wardha", coordinates: [78.6022, 20.7453] },
    { name: "Washim", coordinates: [77.1406, 20.1136] },
    { name: "Yavatmal", coordinates: [78.1204, 20.3888] },
//     // Add more districts as needed
  ];
  const karnatakaMarkers = [
    { name: "Bagalkot", coordinates: [75.7037, 16.1852] },
    { name: "Ballari", coordinates: [76.9384, 15.1394] },
    { name: "Belagavi (Belgaum)", coordinates: [74.7336, 15.8497] },
    { name: "Bangalore Rural", coordinates: [77.3860, 13.1100] },
    { name: "Bangalore", coordinates: [77.5946, 12.9716] },
    { name: "Bidar", coordinates: [77.5172, 17.9139] },
    { name: "Chamarajanagar", coordinates: [76.9506, 11.9261] },
    { name: "Chikkaballapur", coordinates: [77.7358, 13.4359] },
    { name: "Chikkamagaluru (Chikmagalur)", coordinates: [75.7486, 13.3222] },
    { name: "Chitradurga", coordinates: [76.4036, 14.2226] },
    { name: "Dakshina Kannada", coordinates: [75.3600, 12.9141] },
    { name: "Davanagere", coordinates: [75.9277, 14.4666] },
    { name: "Dharwad", coordinates: [75.1214, 15.4589] },
    { name: "Gadag", coordinates: [75.6412, 15.4345] },
    { name: "Hassan", coordinates: [76.1000, 13.0055] },
    { name: "Haveri", coordinates: [75.3960, 14.7937] },
    { name: "Gulbarga", coordinates: [76.8343, 17.3297] },
    { name: "Kodagu", coordinates: [75.8069, 12.3375] },
    { name: "Kolar", coordinates: [78.1299, 13.1367] },
    { name: "Koppal", coordinates: [76.1622, 15.3503] },
    { name: "Mandya", coordinates: [76.8961, 12.5224] },
    { name: "Mysore", coordinates: [76.6413, 12.2958] },
    { name: "Raichur", coordinates: [77.3550, 16.2120] },
    { name: "Ramanagara", coordinates: [77.2750, 12.7169] },
    { name: "Shivamogga (Shimoga)", coordinates: [75.5681, 13.9299] },
    { name: "Tumakuru", coordinates: [77.1010, 13.3376] },
    { name: "Udupi", coordinates: [74.7421, 13.3409] },
    { name: "Uttara Kannada (Karwar)", coordinates: [74.4084, 14.8598] },
    { name: "Vijayapura (Bijapur)", coordinates: [75.7139, 16.8292] },
    { name: "Yadgir", coordinates: [77.4871, 16.7695] },
    // Add more districts as needed
];
const keralaMarkers = [
    { name: "Alappuzha", coordinates: [76.3331, 9.4981] },
    { name: "Ernakulam", coordinates: [76.6131, 10.0483] },
    { name: "Idukki", coordinates: [77.1604, 9.9252] },
    { name: "Kannur", coordinates: [75.3704, 11.8745] },
    { name: "Kasaragod", coordinates: [74.9958, 12.4993] },
    { name: "Kollam", coordinates: [76.6113, 8.8932] },
    { name: "Kottayam", coordinates: [76.5222, 9.5916] },
    { name: "Kozhikode", coordinates: [75.7804, 11.2588] },
    { name: "Malappuram", coordinates: [76.0894, 11.0737] },
    { name: "Palakkad", coordinates: [76.6548, 10.7867] },
    { name: "Pathanamthitta", coordinates: [76.7782, 9.2642] },
    { name: "Thiruvananthapuram", coordinates: [76.9366, 8.5241] },
    { name: "Thrissur", coordinates: [76.2134, 10.5276] },
    { name: "Wayanad", coordinates: [76.0830, 11.6850] },
    // Add more districts as needed
  ];
  
  let markers = [];
  if (selectedState === "Maharashtra") {
    markers = maharashtraMarkers;
  } else if (selectedState === "Karnataka") {
    markers = karnatakaMarkers;
  } else if (selectedState === "Kerala") {
    markers = keralaMarkers;
  }
  
return (
    <>
      {console.log("Selected State:", selectedState)}
      <ComposableMap
        data-tip=""
        projection="geoMercator"
        width={150}
        height={150}
        projectionConfig={{ scale: scaleMap }}
      >
        <ZoomableGroup zoom={zoomMap} center={centerMap}>
          <Geographies geography={geoURL}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const { district } = geo.properties;
                console.log("District:", district);
                const marker = markers.find((marker) => marker.name === district);
                console.log("Marker:", marker);

                return (
                  <>
                    <Geography
                      geography={geo}
                      key={geo.rsmKey}
                      onMouseEnter={() => {
                        setTooltipContent(district);
                      }}
                      onMouseLeave={() => {
                        setTooltipContent("");
                      }}
                      onClick={() => {
                        setDistrictName(district);
                      }}
                      style={{
                        default: {
                          fill: "#D6D6DA",
                          outline: "none",
                        },
                        hover: {
                          fill: "forestgreen",
                          outline: "none",
                        },
                        pressed: {
                          fill: "#2E8B57",
                          outline: "none",
                        },
                      }}
                    />

                    {marker && (
                      <Marker coordinates={marker.coordinates}>
                        <text
                          textAnchor="middle"
                          style={{
                            fill: "black",
                            fontWeight: "bold",
                            fontSize: "0.1rem",
                            zIndex: "auto",
                          }}
                        >
                          {marker.name}
                        </text>
                      </Marker>
                    )}
                  </>
                );
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </>
  );
};

export default StateChart;
