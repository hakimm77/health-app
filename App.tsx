import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserScreen from "./src/screens/app-screens/UserScreen";
import AdminScreen from "./src/screens/app-screens/AdminScreen";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import Login from "./src/screens/auth-screens/Login";
import Signup from "./src/screens/auth-screens/Signup";
import { useEffect, useState } from "react";
import { getData, removeData } from "./src/helpers/asyncStorageFuncs";
import Loading from "./src/components/Loading";
import AdminLogin from "./src/screens/auth-screens/AdminLogin";

const Stack = createNativeStackNavigator();

const App = () => {
  const [userID, setUserID] = useState<any>(null);
  useEffect(() => {
    getData().then((id) => {
      console.log(id);
      setUserID(id);
    });
  }, []);

  return (
    <NavigationContainer>
      <PaperProvider>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {userID ? (
            <>
              {userID === "admin" ? (
                <Stack.Screen name="admin" component={AdminScreen} />
              ) : (
                <Stack.Screen name="user" component={UserScreen} />
              )}
            </>
          ) : userID === null ? (
            <Stack.Screen name="loading" component={Loading} />
          ) : (
            <>
              <Stack.Screen name="welcome" component={WelcomeScreen} />
              <Stack.Screen name="login" component={Login} />
              <Stack.Screen name="admin-login" component={AdminLogin} />
              <Stack.Screen name="signup" component={Signup} />
            </>
          )}
        </Stack.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
};

export default App;
