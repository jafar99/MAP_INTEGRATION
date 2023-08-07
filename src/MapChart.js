import React, { useEffect } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker,
} from "react-simple-maps";
import { Row, Col } from "antd";
import axios from "axios";

import india from "./topojsons/india.json";
// import { Alert } from "@material-ui/lab"
const MapChart = ({ setTooltipContent, setStateName, setShowDistrict }) => {
  const [apiData, setApiData] = React.useState([]);
  const[maxvalue,setmaxvalue]=React.useState(0);

  function sitesData() {
    axios
      .get(`/get-all-site-count`)
      .then((res) => {
        let highest_site_count = 0;
        for (const entry of  res.data.data.data) {
          const site_count = entry.site_count;
          if (site_count > highest_site_count) {
            highest_site_count = site_count;
          }
        }
        setmaxvalue(highest_site_count);
        console.log("maxvalue",highest_site_count);

        setApiData(res?.data?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    sitesData();
  }, []);

  return (
    <>
      <Row>
        <Col span={12}>
          <ComposableMap
            data-tip=""
            projection="geoMercator"
            width={165}
            height={160}
            projectionConfig={{ scale: 260 }}
          >
            <ZoomableGroup center={[81, 25]}>
              <Geographies geography={india}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const { ST_NM } = geo.properties;

                    const stateMarker = apiData.find(
                      (marker) => marker.site_name === ST_NM
                    );

                    const getFillColor = (siteCount) => {
                      let colorValue = 0;
                      let x = siteCount * 100;
                      if(!maxvalue == 0){
                        colorValue = (x / maxvalue).toFixed(0); 
                      }
                      
                      if (colorValue <= 0) {
                        return `#D8D8D8`;
                      } else if (colorValue >= 1 && colorValue <= 25) {
                        return `#EAC696`;
                      } else if (colorValue >= 26 && colorValue <= 50) {
                        return `#C8AE7D`;
                      } else if (colorValue >= 51 && colorValue <= 75) {
                        return `#765827`;
                      } else if (colorValue >= 76) {
                        return `#65451F`;
                      }
                    };

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
                            // alert(ST_NM);
                            setStateName(ST_NM);
                            setShowDistrict(true);
                          }}
                          style={{
                            default: {
                              fill: stateMarker
                                ? getFillColor(stateMarker.site_count)
                                : "#D8D8D8", // Change fill color based on density
                              outline: "none",
                            },
                            hover: {
                              fill: "#f0f0f0",
                              outline: "none",
                            },
                            pressed: {
                              fill: "#2E8B57",
                              outline: "none",
                            },
                          }}
                        />
                        {/* Render state marker */}
                        {stateMarker && (
                          <Marker coordinates={stateMarker.coordinates}>
                           
                            <text
                              textAnchor="middle"
                              style={{
                                fill: "#000", // Text color
                                fontWeight: "bold",
                                fontSize: "2px", // Adjust font size as needed
                                zIndex: "1000", // Add zIndex property
                                fontFamily: "Arial, sans-serif", // Specify font family
                                whiteSpace: "nowrap", // Prevent text from wrapping
                                pointerEvents: "none", // Disable pointer events on the text element
                          
                              }}
                            >
                              {stateMarker?.site_name}
                              <br />
                              <br />
                              {stateMarker?.site_count === 0
                                ? ""
                                : " (" + stateMarker?.site_count + ")"}
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
        </Col>
        <Col span={12}>
                

        </Col>
      </Row>
    </>
  );
};

export default MapChart;
