import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Task from "./SRC/pages/Task";
import NewTask from "./SRC/pages/NewTask";
import Details from "./SRC/pages/Details";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer screemOpitions={{ headerShown: false }}>
      <Stack.Navigator>
        <Stack.Screen name="Task" component={Task} />
        <Stack.Screen name="NewTask" component={NewTask} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
