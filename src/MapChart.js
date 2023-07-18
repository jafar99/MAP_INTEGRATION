import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker
} from "react-simple-maps";

import india from './topojsons/india.json';
import { Alert } from "@material-ui/lab";

const MapChart = ({ setTooltipContent, setStateName, setShowDistrict }) => {
  const stateMarkers = [
    { name: "Andhra Pradesh", coordinates: [80.7400, 15.9129] },
    { name: "Andaman & Nicobar Island", coordinates: [92.6586, 11.7401] },
    { name: "Jammu & Kashmir", coordinates: [76.5762, 34.2778] },
    { name: "Arunachal Pradesh", coordinates: [94.7278, 28.2180] },
    { name: "Assam", coordinates: [91.9376, 26.2006] },
    { name: "Bihar", coordinates: [85.3131, 25.0961] },
    { name: "Chandigarh", coordinates: [76.7794, 30.7333] },
    { name: "Chhattisgarh", coordinates: [81.9629, 21.2787] },
    { name: "Daman & Diu", coordinates: [71.0169, 20.2809] },
    { name: "Delhi", coordinates: [76.7025, 28.5041] },
    { name: "Goa", coordinates: [73.8240, 15.2993] },
    { name: "Gujarat", coordinates: [71.1924, 22.2587] },
    { name: "Haryana", coordinates: [76.3000, 29.2588] },
    { name: "Himachal Pradesh", coordinates: [78.1734, 32.00] },
    { name: "Jharkhand", coordinates: [85.2799, 23.6102] },
    { name: "Karnataka", coordinates: [75.7139, 15.3173] },
    { name: "Kerala", coordinates: [76, 10.8505] },
    { name: "Ladakh", coordinates: [77.5770, 34.2090] },
    { name: "Lakshadweep", coordinates: [72.1833, 10.5667] },
    { name: "Madhya Pradesh", coordinates: [78.6569, 22.9734] },
    { name: "Maharashtra", coordinates: [75.7139, 19.7515] },
    { name: "Manipur", coordinates: [93.9063, 24.6637] },
    { name: "Meghalaya", coordinates: [91.3662, 25.4670] },
    { name: "Mizoram", coordinates: [92.9376, 23.1645] },
    { name: "Nagaland", coordinates: [94.5624, 26.1584] },
    { name: "Odisha", coordinates: [85.0985, 20.9517] },
    { name: "Puducherry", coordinates: [81.2123, 11.9416] },
    { name: "Punjab", coordinates: [75.3412, 30.5654] },
    { name: "Rajasthan", coordinates: [74.2179, 27.0238] },
    { name: "Sikkim", coordinates: [88.5122, 27.5330] },
    { name: "Tamil Nadu", coordinates: [78.6569, 11.1271] },
    { name: "Telangana", coordinates: [79.0193, 18.1124] },
    { name: "Tripura", coordinates: [91.9882, 23.9408] },
    { name: "Uttar Pradesh", coordinates: [80.9462, 26.8467] },
    { name: "Uttarakhand", coordinates: [79.0193, 30.0668] },
    { name: "West Bengal", coordinates: [87.8550, 22.9868] },
  ];

  return (
    <>
      <ComposableMap
        data-tip=""
        projection="geoMercator"
        width={165}
        height={168}
        projectionConfig={{ scale: 270 }}
      >
        <ZoomableGroup center={[81, 22]}>
          <Geographies geography={india}>
            {({ geographies }) =>
              geographies.map(geo => {
                const { ST_NM } = geo.properties;
                
                const stateMarker = stateMarkers.find(marker => marker.name === ST_NM);
                return (
                  <>
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onMouseEnter={() => {
                        // setTooltipContent(ST_NM);
                      }}
                      onMouseLeave={() => {
                        setTooltipContent("");
                      }}
                      onClick={() => {
                        alert(ST_NM);
                        setStateName(ST_NM);
                        setShowDistrict(true);
                      }}
                      style={{
                        default: {
                          fill: "#D6D6DA",
                          outline: "none"
                        },
                        hover: {
                          fill: "#A8A196",
                          outline: "none"
                        },
                        pressed: {
                          fill: "#2E8B57",
                          outline: "none"
                        }
                      }}
                    />
                    {/* Render state marker */}
                    {stateMarker && (
                      <Marker coordinates={stateMarker.coordinates}>
                        {/* <circle
                          r={1}
                          fill="red"
                          onClick={() => {
                            setStateName(stateMarker.name);
                            setShowDistrict(true);
                          }}
                        /> */}
                        <text
                          textAnchor="middle"
                          // y={stateMarker.coordinates[1] > 0 ? 0 : 15}
                          style={{
                            fill: "#000",
                            fontWeight: "bold",
                        
                            fontSize: "0.11rem",
                            zIndex : "auto" // Add zIndex property
                          }}
                        >
                          {stateMarker.name}
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

export default MapChart;
