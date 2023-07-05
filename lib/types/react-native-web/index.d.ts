declare module 'react-native-web' {
  interface PressableProps {
    onPress?: VoidFunction
  }
  function Pressable(props: PressableProps): JSX.Element
}
