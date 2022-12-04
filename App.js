import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

export default function App() {

  const [origin, setOrigin] = React.useState({
    latitude: 10.921065,
    longitude: -74.785781,
  })

  const [destination, setDestination] = React.useState({
    latitude: 10.917750,
    longitude: -74.795256,
  })

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 10.917692,
          longitude: -74.799231,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >

        <Marker
          coordinate={origin}
        />

        <Marker
          coordinate={destination}
        />

        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={'AIzaSyCCpn70ZJEIvFYTsUyxArbhmtFJXoNgtgo'}
        />

      </MapView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
