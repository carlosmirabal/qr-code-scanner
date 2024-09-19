import { useCameraPermissions } from "expo-camera";
import { Link, Stack, useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { Pressable, Text, View } from "react-native";

import { Container } from "~/components/Container";

export default function Home() {
    const [permission, requestPermission] = useCameraPermissions();
    const isPermissionGranted = Boolean(permission?.granted);

    const params = useLocalSearchParams<{ data: string }>();

    return (
        <>
            <Stack.Screen options={{ title: "Home" }} />
            <Container>
                <View className="flex-1 items-center justify-center gap-4">
                    <Text className="text-4xl font-bold">QR Code Scanner</Text>

                    <Pressable onPress={requestPermission} disabled={isPermissionGranted} style={{ opacity: isPermissionGranted ? 0.5 : 1 }}>
                        <Text className="rounded-xl bg-blue-300 p-3 text-center text-[20px] text-[#0E7AFE]">Request Permissions</Text>
                    </Pressable>

                    <Link href="/scanner" asChild>
                        <Pressable disabled={!isPermissionGranted}>
                            <Text className="rounded-xl bg-blue-300 p-3 text-center text-[20px] text-[#0E7AFE]" style={{ opacity: !isPermissionGranted ? 0.5 : 1 }}>
                                Scan Code
                            </Text>
                        </Pressable>
                    </Link>
                    {params.data && (
                        <View className="rounded-xl bg-blue-100 p-5">
                            <Text>{params.data}</Text>
                        </View>
                    )}
                </View>
            </Container>
        </>
    );
}
