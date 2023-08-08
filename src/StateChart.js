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
import "./style.css";

let markers = [];
const StateChart = ({ setTooltipContent, setDistrictName, selectedState }) => {
  const [geoURLNew, setGeoURLNew] = React.useState([]);
  const [maxvalue, setmaxvalue] = React.useState(0);
  let geoURL;
  let zoomMap = 1;
  let centerMap = [60, 22];
  let scaleMap = 400;
  

  if (selectedState === "Andaman & Nicobar Island") {
    geoURL = andamannicobar;
    // setGeoURLNew(andamannicobar);
    markers = andamanNicobarMarkers;
    scaleMap = 1200;
    centerMap = [93, 10];
  } else if (selectedState === "AndhraPradesh") {
    markers = andhrapradeshMarkers;
    geoURL = andhrapradesh;
    // setGeoURLNew(andhrapradesh);
    scaleMap = 1400;
    centerMap = [81, 17];
  } else if (selectedState === "Arunachal Pradesh") {
    markers = arunachalPradeshMarkers;
    geoURL = arunachalpradesh;
    // setGeoURLNew(arunachalpradesh);
    scaleMap = 1900;
    centerMap = [94.5, 28];
  } else if (selectedState === "Assam") {
    markers = assamMarkers;
    geoURL = assam;
    // setGeoURLNew(assam);
    scaleMap = 1750;
    centerMap = [92.9, 26];
  } else if (selectedState === "Bihar") {
    markers = biharMarkers;
    geoURL = bihar;
    // setGeoURLNew(bihar);
    scaleMap = 2400;
    centerMap = [85.5, 26];
  } else if (selectedState === "Chhattisgarh") {
    markers = chhattisgarhMarkers;
    geoURL = chhattisgarh;
    // setGeoURLNew(chhattisgarh);
    scaleMap = 1700;
    centerMap = [82, 21.6];
  } else if (selectedState === "Delhi") {
    markers = goaMarkers;
    markers = delhiMarkers;
    geoURL = delhi;
    // setGeoURLNew(delhi);
    scaleMap = 14000;
    centerMap = [77.05, 28.6];
  } else if (selectedState === "Goa") {
    geoURL = goa;
    // setGeoURLNew(goa);
    scaleMap = 6000;
    centerMap = [74, 15.25];
  } else if (selectedState === "Gujarat") {
    markers = gujaratMarkers;
    geoURL = gujarat;
    // setGeoURLNew(gujarat);
    scaleMap = 1900;
    centerMap = [71.5, 23];
  } else if (selectedState === "Haryana") {
    markers = haryanaMarkers;
    geoURL = haryana;
    // setGeoURLNew(haryana);
    scaleMap = 2800;
    centerMap = [76, 29.6456];
  } else if (selectedState === "Himachal Pradesh") {
    geoURL = himachalpradesh;
    // setGeoURLNew(himachalpradesh);
    markers = himachalPradeshMarkers;
    scaleMap = 2900;
    centerMap = [77.4, 32];
  } else if (selectedState === "Jammu & Kashmir") {
    markers = jammuKashmirMarkers;
    geoURL = jammukashmir;
    // setGeoURLNew(jammukashmir);
    scaleMap = 1600;
    centerMap = [76.3, 35];
  } else if (selectedState === "Jharkhand") {
    markers = jharkhandMarkers;
    geoURL = jharkhand;
    // setGeoURLNew(jharkhand);
    scaleMap = 2200;
    centerMap = [85.7, 23.6];
  } else if (selectedState === "Karnataka") {
    markers = lakshadweepMarkers;
    markers = karnatakaMarkers;
    geoURL = karnataka;
    // setGeoURLNew(karnataka);
    scaleMap = 1700;
    centerMap = [76.5, 15.6562];
  } else if (selectedState === "Kerala") {
    markers = keralaMarkers;
    geoURL = kerala;
    // setGeoURLNew(kerala);
    scaleMap = 2200;
    centerMap = [76, 10.5];
  } else if (selectedState === "Lakshadweep") {
    geoURL = lakshadweep;
    // setGeoURLNew(lakshadweep);
    scaleMap = 2300;
    centerMap = [73, 11];
  } else if (selectedState === "Madhya Pradesh") {
    markers = madhyaPradeshMarkers;
    geoURL = madhyapradesh;
    // setGeoURLNew(madhyapradesh);
    scaleMap = 1500;
    centerMap = [78.5, 24];
  } else if (selectedState === "Maharashtra") {
    markers = maharashtraMarkers;
    geoURL = maharashtra;
    // setGeoURLNew(maharashtra);
    scaleMap = 1300;
    centerMap = [76.8, 19.3];
  } else if (selectedState === "Manipur") {
    markers = manipurMarkers;
    geoURL = manipur;
    // setGeoURLNew(manipur);
    scaleMap = 4500;
    centerMap = [93.8, 24.7];
  } else if (selectedState === "Meghalaya") {
    markers = meghalayaMarkers;
    geoURL = meghalaya;
    // setGeoURLNew(meghalaya);
    scaleMap = 3600;
    centerMap = [91.3, 25.4];
  } else if (selectedState === "Mizoram") {
    markers = mizoramMarkers;
    geoURL = mizoram;
    // setGeoURLNew(mizoram);
    scaleMap = 2900;
    centerMap = [92.8, 23.25];
  } else if (selectedState === "Nagaland") {
    markers = nagalandMarkers;
    geoURL = nagaland;
    // setGeoURLNew(nagaland);
    scaleMap = 4600;
    centerMap = [94.3, 26.1];
  } else if (selectedState === "Odisha") {
    markers = odishaMarkers;
    geoURL = odisha;
    // setGeoURLNew(odisha);
    scaleMap = 1700;
    centerMap = [84.4, 20.25];
  } else if (selectedState === "Punjab") {
    markers = punjabMarkers;
    geoURL = punjab;
    // setGeoURLNew(punjab);
    scaleMap = 3000;
    centerMap = [75.35, 31.2564];
  } else if (selectedState === "Rajasthan") {
    markers = rajasthanMarkers;
    geoURL = rajasthan;
    // setGeoURLNew(rajasthan);
    scaleMap = 1400;
    centerMap = [74, 27.3];
  } else if (selectedState === "Sikkim") {
    markers = sikkimMarkers;
    geoURL = sikkim;
    // setGeoURLNew(sikkim);
    scaleMap = 8000;
    centerMap = [88.45, 27.6];
  } else if (selectedState === "Tamilnadu") {
    markers = tamilNaduMarkers;
    geoURL = tamilnadu;
    // setGeoURLNew(tamilnadu);
    scaleMap = 1900;
    centerMap = [78.25, 10.8];
  } else if (selectedState === "Telangana") {
    markers = telanganaMarkers;
    geoURL = telangana;
    // setGeoURLNew(telangana);
    scaleMap = 3000;
    centerMap = [79.5, 18];
  } else if (selectedState === "Tripura") {
    markers = tripuraMarkers;
    geoURL = tripura;
    // setGeoURLNew(tripura);
    scaleMap = 5500;
    centerMap = [91.75, 23.75];
  } else if (selectedState === "Uttarakhand") {
    markers = uttarakhandMarkers;
    geoURL = uttarakhand;
    // setGeoURLNew(uttarakhand);
    scaleMap = 3000;
    centerMap = [79.3, 30.3564];
  } else if (selectedState === "Uttar Pradesh") {
    markers = uttarpradeshMarkers; // Fix the variable name here
    geoURL = uttarpradesh; // Make sure the geoURL matches your data source
    // setGeoURLNew(uttarpradesh);
    scaleMap = 1700;
    centerMap = [80.8, 27.4565];
  } else if (selectedState === "West Bengal") {
    markers = westBengalMarkers;
    geoURL = westbengal;
    // setGeoURLNew(westbengal);
    scaleMap = 1600;
    centerMap = [87.7, 25];
  }

  const [apiData, setApiData] = React.useState([]);

  function sitesData() {
    axios
      .get(`/get-site-count-by-region?region_name=${selectedState}`)
      .then((res) => {
        setApiData(res?.data?.data);
        console.log("API Data:", res?.data.data);
        // console.log("geoURL:", geoURL.objects);
        let keyForObject = "";
        Object.keys(geoURL.objects).forEach(function (key) {
          keyForObject = key.toString();
          // console.log("Key:", keyForObject);
        });
        // console.log("New:",  geoURL.objects[keyForObject].geometries);
        // for loop on geoURL.objects[keyForObject].geometries & print properties
        let highest_site_count = 0;
        for (
          let i = 0;
          i < geoURL.objects[keyForObject].geometries.length;
          i++
        ) {
          // console.log("district:", geoURL.objects[keyForObject].geometries[i].properties.district);
          let value = 0;
          // find district in res?.data.data using for loop
          for (let j = 0; j < res?.data.data.length; j++) {
            if (
              geoURL.objects[keyForObject].geometries[i].properties.district ==
              res?.data.data[j].area_name
            ) {
              value = res?.data.data[j].site_count;
              console.log("value:", value);
              break;
            }
          }
          geoURL.objects[keyForObject].geometries[i].properties["site_count"] =
            value;
          const site_count =
            geoURL.objects[keyForObject].geometries[i].properties.site_count;
          if (site_count > highest_site_count) {
            highest_site_count = site_count;
          }
          // console.log("site_count:", geoURL.objects[keyForObject].geometries[i].properties.site_count);
        }
        setmaxvalue(highest_site_count);
        // console.log("maxvalue",highest_site_count);
        setGeoURLNew(geoURL);
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
        <Col span={12}>
          <ComposableMap
            data-tip=""
            projection="geoMercator"
            width={230}
            height={240}
            projectionConfig={{ scale: scaleMap }}
            className="left-map"

          >
            <ZoomableGroup zoom={zoomMap} center={centerMap}>
              <Geographies geography={geoURLNew == {} ? geoURL : geoURLNew}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const { district } = geo.properties;
                    // console.log("District:", district);
                    const marker = markers.find(
                      (marker) => marker.name === district
                    );
                    // console.log("Marker:", marker);

                    const getFillColor = (siteCount) => {
                      let colorValue = 0;
                      let x = siteCount * 100;
                      if (!maxvalue == 0) {
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
                              fill: geo.properties.hasOwnProperty("site_count")
                                ? getFillColor(geo.properties.site_count)
                                : "#D8D8D8", // Change fill color based on density
                              outline: "black",
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
        <Col span={12}>
          <>
            <table>
              <thead>
                <tr>
                  <th>Area Name</th>
                  <th colSpan={2}>Sites</th>
                  <th>Site Count</th>
                </tr>
              </thead>
              <tbody>
                {apiData?.map((item, index) => {
                  return (
                    <React.Fragment key={index}>
                      <tr>
                        <td>{item.area_name ? item.area_name : "No sites"}</td>
                        <td colSpan={2}>
                          {item.site_names ? (
                            <table>
                              <tbody>
                                {item.site_names.split(",").map((site, idx) => (
                                  <tr key={idx}>
                                    <td>{site.trim()}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          ) : (
                            "No sites"
                          )}
                        </td>
                        <td>{item.site_count ? item.site_count : "0"}</td>
                      </tr>
                    </React.Fragment>
                  );
                })}

                {apiData?.length === 0 && (
                  <tr>
                    <td
                      colSpan={4}
                      style={{
                        textAlign: "center",
                        padding: "10px 0px",
                        fontSize: "1.4rem",
                      }}
                    >
                      No Sites Found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </>
        </Col>
      </Row>
    </>
  );
};

export default StateChart;
