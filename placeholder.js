import SettingsScreen from './screens/SettingsScreen';
import ReviewScreen from './screens/ReviewScreen';
<MainNavigator />

main: {
  screen: TabNavigator({
    map: { screen: MapScreen },
    deck: { screen: DeckScreen }
  })
}

review: {
  screen: StackNavigator({
    review: { screen: ReviewScreen },
    settings: { screen: SettingsScreen }
  })
}

  static navigationOptions = {
      title: 'Review Jobs'
  }


,
header: () => {
  return {
}
