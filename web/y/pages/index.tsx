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
    </>
  )
}

export default HomePage
