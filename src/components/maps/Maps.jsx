import {useState} from 'react';
import NaverMapView, {Marker} from 'react-native-nmap';

export default function Maps({onPositionSelect}) {
  const P0 = {latitude: 37.564362, longitude: 126.977011};
  const [markers, setMarkers] = useState(null);

  const handleMapClick = event => {
    const clickedLatLng = event;

    if (markers) {
      setMarkers({
        coordinate: clickedLatLng,
        title: `Marker 1`,
      });
    } else {
      setMarkers({
        coordinate: clickedLatLng,
        title: `Marker 1`,
      });
    }
    onPositionSelect(clickedLatLng);
  };

  const handleMarkerPress = index => {
    setMarkers(null);
  };

  return (
    <NaverMapView
      style={{width: '100%', height: '80%'}}
      showsMyLocationButton={true}
      center={{...P0, zoom: 16}}
      onMapClick={handleMapClick}>
      {markers && (
        <Marker
          coordinate={markers.coordinate}
          title={markers.title}
          pinColor="green"
          onPress={() => handleMarkerPress(0)}
        />
      )}
    </NaverMapView>
  );
}
