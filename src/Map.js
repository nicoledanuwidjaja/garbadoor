import React, { useState } from "react"
import {GoogleMap,
        withScriptjs,
        withGoogleMap,
        Marker,
        InfoWindow
    } from "react-google-maps"
import mapStyles from "./mapStyles"
import mapCSS from "./map.css"
import * as mapData from "./mapData.json"
import compost from "./resources/compost.jpg"
import recycle from "./resources/recycle.jpg"
import garbage from "./resources/garbage.jpg"
import warning from "./resources/warning.jpg"


function Map() {
    const [selected, setSelected] = useState(null);
    return (
        <GoogleMap
            defaultZoom={14}
            defaultCenter={{lat: 41.3163, lng: -72.9223}}
            defaultOptions={{styles: mapStyles}} >
        {mapData.trashBins.map(trashBin => (
            <Marker key={trashBin.key}
                    position={{lat: trashBin.lat, lng: trashBin.lng}}
                    onClick={() => {
                        setSelected(trashBin)}}
                    icon={trashBin.rec >= 90 ? {
                            url: warning,
                            scaledSize: new window.google.maps.Size(35, 35)
                        } : trashBin.gbg >= 90 ? {
                             url: warning,
                             scaledSize: new window.google.maps.Size(35, 35)
                         } : trashBin.cmp >= 90 ? {
                             url: warning,
                             scaledSize: new window.google.maps.Size(35, 35)
                          }: null } /> ))}
        {selected && (
            <InfoWindow position={{lat: selected.lat, lng: selected.lng}}
                        onCloseClick={() => {
                            setSelected(null)
                        }}>

                <div>
                    <h2>{selected.name}</h2>
                    <p>Garbage Fill: {selected.gbg}%</p>
                    <p>Recycling Fill: {selected.rec}%</p>
                    <p>Compost Fill: {selected.cmp}%</p>
                </div>
            </InfoWindow>
        )}
        </GoogleMap>
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function WrpdMap() {
    return (
        <div style={{width: '100vw', height: '100vh'}}>
            <WrappedMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAiydJ37ENKv2sEjYXm8Oh3Ag4dwLEFRcw`}
                loadingElement={<div style = {{ height: "100%" }} />}
                containerElement={<div style = {{ height: "100%" }} />}
                mapElement={<div style = {{ height: "100%" }} />}
                />
            <div className="statistics"></div>
        </div>
    )
}
