import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap() {
  const defaultProps = {
    center: {
      lat: 34.3471, // Latitude for Mansehra
      lng: 73.2112, // Longitude for Mansehra
    },
    zoom: 11,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "224354AWEWCFDVG4" }} // Replace with your API key
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={34.3471} // Latitude for Mansehra
          lng={73.2112} // Longitude for Mansehra
          text="Mansehra"
        />
      </GoogleMapReact>
    </div>
  );
}
