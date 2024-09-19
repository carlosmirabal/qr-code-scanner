import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import React, { useRef, useState } from "react";
import { Stack, useRouter } from "expo-router";
import { CameraView } from "expo-camera";
import { Container } from "~/components/Container";

const Scanner = () => {
    // const [data, setData] = useState<any>();
    const lockCameraRef = useRef<boolean>(false);

    const route = useRouter();

    return (
        <>
            <Stack.Screen options={{ title: "Overview", headerShown: false }} />

            <View style={StyleSheet.absoluteFillObject}>
                {Platform.OS === "android" ? <StatusBar /> : null}

                <CameraView
                    style={StyleSheet.absoluteFillObject}
                    facing="back"
                    // barcodeScannerSettings={{ barcodeTypes: ["qr"] }}
                    onBarcodeScanned={async (result) => {
                        if (!lockCameraRef.current) {
                            route.navigate({ pathname: "..", params: { data: result.data } });
                            lockCameraRef.current = true;
                        }
                    }}
                >
                    <View className="flex-1 rounded-lg">
                        <Text>Value</Text>
                    </View>
                </CameraView>
            </View>

            <View className="flex-1">
                <Text>Value</Text>
            </View>
        </>
    );
};

export default Scanner;

const styles = StyleSheet.create({});
