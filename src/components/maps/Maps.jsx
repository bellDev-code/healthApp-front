import {useState} from 'react';
import NaverMapView, {Marker} from 'react-native-nmap';

export default function Maps() {
  const P0 = {latitude: 37.564362, longitude: 126.977011};
  const [markers, setMarkers] = useState([]);

  const handleMapClick = event => {
    // 클릭한 위치의 좌표
    const clickedLatLng = event;

    // 위도 경도값
    const lat = event.latitude;
    const long = event.longitude;
    console.log(lat, long);

    // 새로운 마커를 추가하여 markers 상태 업데이트
    setMarkers(prevMarkers => [
      ...prevMarkers,
      {
        coordinate: clickedLatLng,
        title: `Marker ${prevMarkers.length + 1}`,
      },
    ]);
  };

  return (
    <NaverMapView
      style={{width: '100%', height: '100%'}}
      showsMyLocationButton={true}
      center={{...P0, zoom: 16}}
      onTouch={e => console.warn('onTouch', JSON.stringify(e.nativeEvent))}
      onCameraChange={e => console.warn('onCameraChange', JSON.stringify(e))}
      onMapClick={handleMapClick}>
      {markers.map((marker, index) => {
        if (!marker) {
          return null;
        }
        return (
          <Marker
            key={index}
            coordinate={marker.coordinate}
            title={marker.title}
            pinColor="green"
          />
        );
      })}
    </NaverMapView>
  );
}
