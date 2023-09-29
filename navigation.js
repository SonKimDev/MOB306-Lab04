import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screen.js/HomeScreen';
import AboutScreen from './screen.js/AboutScreen';

const Stack = createNativeStackNavigator();

const Home = 'Home';
const About = 'About';

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Home}>
        <Stack.Screen name={Home} component={HomeScreen} />
        <Stack.Screen name={About} component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;