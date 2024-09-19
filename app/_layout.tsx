import "../global.css";

import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export const unstable_settings = {
    // Ensure that reloading on `/modal` keeps a back button present.
    initialRouteName: "home",
};

export default function RootLayout() {
    return (
        <Stack />
        // <GestureHandlerRootView style={{ flex: 1 }}>
        //     <Stack>
        //         <Stack.Screen name="index" />
        //         <Stack.Screen name="scanner" />
        //     </Stack>
        // </GestureHandlerRootView>
    );
}
