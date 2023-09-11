import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator, Switch, SafeAreaView, Platform, Alert, Button } from 'react-native'
import React,{ useState, useEffect  } from 'react'
import Constants from 'expo-constants';

export default function App() {
// const [isLoading, setIsLoading] = useState(true)
// const [isEnabled, setIsEnabled] = useState(false)
  const [ok, setOk] = useState (false)

// const toggleSwitch = () => setIsEnabled (previousState => !previousState)

//   useEffect(() => {
//     setTimeout(() => {
//       setIsLoading(false)
//     }, 3000)

//   },[])

  const showAlert = () => {
    Alert.alert(
      "Test",
      "Test message",
    [
      {
        text: 'ok',
        onPress: () => setOk(true)
      },
      {
        text: "Cancel",
        onPress: () => setOk(false)
      }
    ]
      )
  }


  return (
    <View style={styles.container}>
      <Button title={'Open Dialog'} onPress={showAlert}></Button>
      <Text>{ok===true ? 'ok' : 'cancel'}</Text>
      {/* {isLoading &&
      <ActivityIndicator size="large" animating={true} />
      } */}
      <View style={styles.fields}>
        <Text>Enable</Text>
        {/* <Switch
          value={isEnabled}
          onValueChange={toggleSwitch}
          /> */}
          <StatusBar
          style='auto'
          backgroundColor='red'
          // hidden={true}
          />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fields: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 30,
  }
})
