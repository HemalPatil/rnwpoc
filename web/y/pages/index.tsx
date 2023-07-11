import { Button } from 'rnwpoc-lib'

const HomePage = () => {
  return (
    <>
      <div>rnwpoc-web-y</div>
      <Button
        label="This is an RNW button"
        onClick={() => {
          console.log('hello from react-native-web')
        }}
      />
      <button
        onClick={() => {
          console.log('hello from html5')
        }}
      >
        This is an HTML5 button
      </button>
    </>
  )
}

export default HomePage
