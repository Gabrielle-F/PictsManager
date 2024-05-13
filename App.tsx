import { StatusBar } from 'expo-status-bar';

import RootNavigator from './src/navigation';
import {registerRootComponent} from "expo";

export default function App() {
  return (
      <>
        <RootNavigator />
        <StatusBar style="auto" />
      </>
  );
}

registerRootComponent(App);
