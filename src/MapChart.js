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

  function sitesData() {
    axios
      .get(`/get-all-site-count`)
      .then((res) => {
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
                      if (siteCount >= 100) {
                        return `rgb(206, 104, 21)`;
                      } else if (siteCount > 100 && siteCount < 200) {
                        return `rgba(255, 165, 0)`;
                      } else if (siteCount > 1 && siteCount <= 100) {
                        return `rgba(255, 165, 0, 0.2)`;
                      } else {
                        return `rgba(206, 104, 21 , 0.7)`;
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
                                : "rgba(206, 104, 21 , 0.7)", // Change fill color based on density
                              outline: "black",
                            },
                            hover: {
                              fill: "#808080",
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
                              style={{
                                // fill: "#000",
                                fontWeight: "bold",
                                fontSize: "0.13rem",
                                zIndex: "auto", // Add zIndex property
                              }}
                            >
                              {stateMarker?.site_name}
                              <br />
                              <br />
                              ({stateMarker?.site_count})
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
        <Col span={12}></Col>
      </Row>
    </>
  );
};

export default MapChart;
