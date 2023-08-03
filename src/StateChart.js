import React, { useEffect } from "react";

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
import {
  andhrapradeshMarkers,
  telanganaMarkers,
  westBengalMarkers,
  uttarpradeshMarkers,
  tripuraMarkers,
  tamilNaduMarkers,
  sikkimMarkers,
  odishaMarkers,
  nagalandMarkers,
  mizoramMarkers,
  meghalayaMarkers,
  manipurMarkers,
  andamanNicobarMarkers,
  andhraPradeshMarkers,
  arunachalPradeshMarkers,
  assamMarkers,
  biharMarkers,
  chhattisgarhMarkers,
  goaMarkers,
  gujaratMarkers,
  jharkhandMarkers,
  lakshadweepMarkers,
  madhyaPradeshMarkers,
  keralaMarkers,
  karnatakaMarkers,
  maharashtraMarkers,
  jammuKashmirMarkers,
  himachalPradeshMarkers,
  punjabMarkers,
  uttarakhandMarkers,
  haryanaMarkers,
  delhiMarkers,
  rajasthanMarkers,
} from "./topojsons/states/Co-ordinate/Districtdata";
import { Row, Col } from "antd";
import axios from "axios";
import './style.css'

let markers = [];
const StateChart = ({ setTooltipContent, setDistrictName, selectedState }) => {
  let geoURL;
  let zoomMap = 1;
  let centerMap = [60, 22];
  let scaleMap = 400;

  if (selectedState === "Andaman & Nicobar Island") {
    geoURL = andamannicobar;
    markers = andamanNicobarMarkers;
    scaleMap = 1200;
    centerMap = [93, 10];
  } else if (selectedState === "AndhraPradesh") {
    markers = andhrapradeshMarkers;
    geoURL = andhrapradesh;
    scaleMap = 1100;
    centerMap = [81, 17];
  } else if (selectedState === "Arunachal Pradesh") {
    markers = arunachalPradeshMarkers;
    geoURL = arunachalpradesh;
    scaleMap = 1200;
    centerMap = [94.5, 28];
  } else if (selectedState === "Assam") {
    markers = assamMarkers;
    geoURL = assam;
    scaleMap = 1350;
    centerMap = [92.9, 26];
  } else if (selectedState === "Bihar") {
    markers = biharMarkers;
    geoURL = bihar;
    scaleMap = 1800;
    centerMap = [85.5, 26];
  } else if (selectedState === "Chhattisgarh") {
    markers = chhattisgarhMarkers;
    geoURL = chhattisgarh;
    scaleMap = 1100;
    centerMap = [82, 21];
  } else if (selectedState === "Delhi") {
    markers = goaMarkers;
    markers = delhiMarkers;
    geoURL = delhi;
    scaleMap = 12000;
    centerMap = [77.05, 28.6];
  } else if (selectedState === "Goa") {
    geoURL = goa;
    scaleMap = 6000;
    centerMap = [74, 15.25];
  } else if (selectedState === "Gujarat") {
    markers = gujaratMarkers;
    geoURL = gujarat;
    scaleMap = 1400;
    centerMap = [71.5, 22];
  } else if (selectedState === "Haryana") {
    markers = haryanaMarkers;
    geoURL = haryana;
    scaleMap = 2200;
    centerMap = [76, 29];
  } else if (selectedState === "Himachal Pradesh") {
    geoURL = himachalpradesh;
    markers = himachalPradeshMarkers;
    scaleMap = 2300;
    centerMap = [77.4, 31.8];
  } else if (selectedState === "Jammu & Kashmir") {
    markers = jammuKashmirMarkers;
    geoURL = jammukashmir;
    scaleMap = 1400;
    centerMap = [76.3, 35];
  } else if (selectedState === "Jharkhand") {
    markers = jharkhandMarkers;
    geoURL = jharkhand;
    scaleMap = 1700;
    centerMap = [85.7, 23.6];
  } else if (selectedState === "Karnataka") {
    markers = lakshadweepMarkers;
    markers = karnatakaMarkers;
    geoURL = karnataka;
    scaleMap = 1600;
    centerMap = [76.5, 15];
  } else if (selectedState === "Kerala") {
    markers = keralaMarkers;
    geoURL = kerala;
    scaleMap = 1800;
    centerMap = [76, 10.5];
  } else if (selectedState === "Lakshadweep") {
    geoURL = lakshadweep;
    scaleMap = 2300;
    centerMap = [73, 11];
  } else if (selectedState === "Madhya Pradesh") {
    markers = madhyaPradeshMarkers;
    geoURL = madhyapradesh;
    scaleMap = 1300;
    centerMap = [78.5, 24];
  } else if (selectedState === "Maharashtra") {
    markers = maharashtraMarkers;
    geoURL = maharashtra;
    scaleMap = 1200;
    centerMap = [76.8, 19.3];
  } else if (selectedState === "Manipur") {
    markers = manipurMarkers;
    geoURL = manipur;
    scaleMap = 3400;
    centerMap = [93.8, 24.7];
  } else if (selectedState === "Meghalaya") {
    markers = meghalayaMarkers;
    geoURL = meghalaya;
    scaleMap = 2500;
    centerMap = [91.3, 25.4];
  } else if (selectedState === "Mizoram") {
    markers = mizoramMarkers;
    geoURL = mizoram;
    scaleMap = 2900;
    centerMap = [92.8, 23.25];
  } else if (selectedState === "Nagaland") {
    markers = nagalandMarkers;
    geoURL = nagaland;
    scaleMap = 4000;
    centerMap = [94.3, 26.1];
  } else if (selectedState === "Odisha") {
    markers = odishaMarkers;
    geoURL = odisha;
    scaleMap = 1300;
    centerMap = [84.4, 20.25];
  } else if (selectedState === "Punjab") {
    markers = punjabMarkers;
    geoURL = punjab;
    scaleMap = 2500;
    centerMap = [75.35, 31.1];
  } else if (selectedState === "Rajasthan") {
    markers = rajasthanMarkers;
    geoURL = rajasthan;
    scaleMap = 1100;
    centerMap = [74, 26.3];
  } else if (selectedState === "Sikkim") {
    markers = sikkimMarkers;
    geoURL = sikkim;
    scaleMap = 6000;
    centerMap = [88.45, 27.6];
  } else if (selectedState === "Tamilnadu") {
    markers = tamilNaduMarkers;
    geoURL = tamilnadu;
    scaleMap = 1300;
    centerMap = [78.25, 10.8];
  } else if (selectedState === "Telangana") {
    markers = telanganaMarkers;
    geoURL = telangana;
    scaleMap = 1800;
    centerMap = [79.5, 17.9];
  } else if (selectedState === "Tripura") {
    markers = tripuraMarkers;
    geoURL = tripura;
    scaleMap = 4500;
    centerMap = [91.75, 23.75];
  } else if (selectedState === "Uttarakhand") {
    markers = uttarakhandMarkers;
    geoURL = uttarakhand;
    scaleMap = 2000;
    centerMap = [79.3, 30];
  } else if (selectedState === "Uttar Pradesh") {
    markers = uttarpradeshMarkers; // Fix the variable name here
    geoURL = uttarpradesh; // Make sure the geoURL matches your data source
    scaleMap = 1600;
    centerMap = [80.8, 27];
  } else if (selectedState === "West Bengal") {
    markers = westBengalMarkers;
    geoURL = westbengal;
    scaleMap = 1200;
    centerMap = [87.7, 24.2];
  }


  const [apiData, setApiData] = React.useState([]);

  function sitesData() {
    axios
      .get(`/get-site-count-by-region?region_name=${selectedState}`)
      .then((res) => {
        setApiData(res?.data?.data);
        console.log("API Data:", res?.data.data);
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
      {console.log("Selected State:", selectedState)}
      <Row>
        <Col span={18}>
          <ComposableMap
            data-tip=""
            projection="geoMercator"
            width={200}
            height={240}
            projectionConfig={{ scale: scaleMap }}
          >
            <ZoomableGroup zoom={zoomMap} center={centerMap}>
              <Geographies geography={geoURL}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const { district } = geo.properties;
                    // console.log("District:", district);
                    const marker = markers.find(
                      (marker) => marker.name === district
                    );
                    // console.log("Marker:", marker);

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
                                fontSize: "0.18rem",
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
        </Col>
       <Col span={6}>
            <>
 

            </>    
       </Col>
      </Row>
    </>
  );
};

export default StateChart;
