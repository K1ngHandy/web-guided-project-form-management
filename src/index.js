import React from 'react'
import { render } from 'react-dom'
// 👉 App contains a more sophisticated form we'll flesh out later
import App from './components/App'

// 👉 First let's build a SimpleForm to add more pets:
const petsList = [
  { petName: 'Fido', petType: 'dog' },
  { petName: 'Tweetie', petType: 'canary' },
  { petName: 'Goldie', petType: 'fish' },
]

function SimpleForm() {
  const { petName, petType } = petsList;
  console.log(petName, petType);

  return (
    <div className='container'>
      <h1>Simple Form App</h1>
      {petsList.map(pet => {
        return (
          <>
            <p>`{pet.petName} is a {pet.petType}`</p>
          </>
        )
      })}
      <form className='form-container'>
        <input></input>
        <input></input>
        <button>submit</button>
      </form>
      
    </div>
  )
}

render(
  <>
    <SimpleForm />
    <App />
  </>
  , document.querySelector('#root')
)
