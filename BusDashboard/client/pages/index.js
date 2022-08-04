import Link from "next/link";
import React from "react";
import GoogleMapReact from 'google-map-react';
import{Fragment} from 'react';
const defaultProps = {
  center: {
    lat:1.3209,
    lng: 103.8424
  },
  zoom: 11
};
const styles = {
  border: '5px solid black', 
  height: '50vh', 
  width: '50%',

};
const Marker = () => <div>  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z"/></svg></div>;
const LandingPage = ({ currentUser, buses }) => {
  const busesList = buses.map((bus) => {
    return (
      <h3 className="text-2xl leading-8 font-extrabold text-gray-900 sm:text-3xl sm:leading-9 dark:text-white">
  {bus.neareststop}
    </h3>
    );
  });

  return (
<div className="flex flex-col flex-wrap sm:flex-row width: 25% float: left  margin-bottom: 20%;">
 <div style={styles}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyD4XSBl6UQ0cm6hAFRNhP_kK9G-ubUW4Iw" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}>
  <Marker
    lat={1.3209}
    lng={103.8424}
  />
      </GoogleMapReact>
      </div>

  <div className="relative max-w-screen-xl mx-auto mb-12">
  <div className="pricing-box max-w-lg mx-auto rounded-lg shadow overflow-hidden lg:max-w-none lg:flex">
        <div className="bg-white dark:bg-gray-800 px-6 py-8 lg:flex-shrink-1 lg:p-12">
          <h3 className="text-2xl leading-8 font-extrabold text-gray-900 sm:text-3xl sm:leading-9 dark:text-white">
            Bus Information
          </h3>
          <p className="mt-6 text-base leading-6 text-gray-500 dark:text-gray-200">
            Nearest Stops:
         {busesList}
          </p>
          </div>
          </div>
          </div>
          </div>
  );
};

LandingPage.getInitialProps = async (context, client, currentUser) => {
  const { data } = await client.get("/api/bus");

  return { buses: data };
};

export default LandingPage;
