import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { useCameraPermissions, CameraView } from "expo-camera/next";
import { Camera } from "expo-camera";

export default function App() {
  const [cameraViewVisible, setCameraViewVisible] = useState(false);
  const [cameraVisible, setCameraVisible] = useState(false);
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    return (
      <View style={styles.container}>
        <Text>No permission</Text>
        <Button title="Request permission" onPress={requestPermission} />
      </View>
    );
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text>No permission</Text>
        <Button title="Request permission" onPress={requestPermission} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button
        title="Open camera view"
        onPress={() => setCameraViewVisible(!cameraViewVisible)}
      />
      <Button
        title="Open camera"
        onPress={() => setCameraVisible(!cameraVisible)}
      />
      {cameraViewVisible && <CameraView style={styles.camera} />}
      {cameraVisible && <Camera style={styles.camera} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  camera: {
    height: 300,
    width: 200,
  },
});
