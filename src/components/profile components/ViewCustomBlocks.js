import React from 'react';
import Paper from "../MyCustomComponents/Paper";
import {YMaps, Map, Placemark, Clusterer} from "react-yandex-maps";

const MapBlock = ({customBlock, data, theme}) => {
    let {map} = customBlock
    const ar = []
    for (let key in map) {
        ar.push(map[key])
    }
    console.log(ar)
    const defaultOptions = {
        center: [53, 28],
        zoom: 14
    }

    return (
        <Paper map theme={theme}>
            <YMaps query={{
                ns: 'use-load-option',
                load: 'Map,Placemark,control.ZoomControl,control.FullscreenControl,geoObject.addon.balloon'
            }}>
                <Map width='100%' height='350px' defaultState={defaultOptions}>
                    <Clusterer options={{
                        preset: 'islands#invertedVioletClusterIcons',
                        groupByCoordinates: false,
                    }}>
                        {ar.map((item, index) => {
                            return <Placemark
                                defaultGeometry={[item.lat, item.long]}
                                modules={['geoObject.addon.balloon']}
                                properties={{
                                    balloonContentBody:
                                        'This is balloon loaded by the Yandex.Maps API module system',
                                }}
                            />
                        })}
                    </Clusterer>
                </Map>
            </YMaps>
        </Paper>
    );
};

export default MapBlock;
