# ADRO OSONA WEBSITE

## Data layer

### Data

- Collection of animals

- Animal:

  - id: string
  - name: string
  - species: string (dog, cat, others)
  - races: string[]
  - gender: string (female, male)
  - size: string (small size, medium size, big size)
  - yearOfBirth: string
  - imageUrl: string
  - description: string
  - user: string

- User State
- UI State

## Actions

- getAnimals() -> by user id
- addAnimal()
- updateAnimal()
- removeAnimal()
- filterAnimals() -> by size

- loginUser()
- logoutUser()

- showModal()
- hideModal()
- showLoader()
- hideLoader()

## Custom hooks

- useAnimals -> getAnimals(), getAnimalById(), addAnimal(), updateAnimal(), removeAnimal()
- useUser -> loginUser()
- useToken -> getDataToken()
- useLocalStorage() -> setToken(), getToken(), removeToken(),

## Components

### Header

- Shows the logo
- Shows the navBar

### NavBar

- Shows a home navLink
- Shows a add navLink
- Shows a logOut button
- Create logoutActionOnClick:
  - Call logoutUser() from useUser (custom hook)
  - removeToken() from useToken (custom hook)
- Send the logoutActionOnClick to LogoutButton

### LoginPage

- Renders LoginForm component
- Recieves a dispatch
- Creates the function handleOnSubmit (receives userCredentials)
  - Calls loginUser(receives userCredentials) from useUser() (custom hook)
  - Decode data token with getDataToken() from useToken custom hook,
  - Dispatch loginUserCreator with decoded data
  - Calls setToken() from useLocalstorage
  - Navigates to ListPage

### LoginForm

- Has its own state (useState)
- receives a handleOnSubmit function
- Create a functionOnHandleOnSubmit
  - Calls preventDefault()
  - Calls handleOnSubmit(userCredentials)
  - Reset UserCredentials
- Shows controls forms (label and input) for username and password.
- Show a button with the text "Login"

### AddFormPAge

- Renders a Form component
- Receives a dispatch
- Create a handleOnSubmit(receives a new animal from form state)
- Calls addAnimal(receives the new animal) from useAnimals custom hook
- Dispatchs addAnimalActionCreator
- Navigates to ListAnimalPage

### UpdateFormPAge

- Renders a Form component
- Receives a animal data from props
- Receives a dispatch
- Create a handleOnSubmit(receives an updated animal from form state)
  - Calls updateAnimal(receives the new animal) from useAnimal custom hook
  - Dispatchs updateAnimalActionCreator
  - Navigates to ListAnimalPage

### Form

- Has its own state (useState)
- Recieves from props:
  - The text for the button
  - ActionOnSubmit
- If receives a Animal item from props, set own state properties from animal prop
- Shows control forms (label & input) of:
  - name
  - species
  - races
  - gender
  - size
  - yearOfBirth
  - image
  - description
- Shows button component

### AnimalsListPage // Homepage

- Recevies a dispatch
- Call getAnimals() from useanimals custom hook
- Dispatchs loadAnimalActionCreator
- Receives a collection of Animals from store with useAppSelector
- Renders AnimalsList

### AnimalsList

- Receives a collection of Animals from props.
- Renders as many AnimalCard as many animal are in the collection recived.
- Create removeActionOnClick(receives an id) function
  - Calls removeAnimal(receives an id) from useAnimals custom hook, and removeAnimalActionCreator(id)
- Create a detailsActionOnSubmit(id) who navigates to DetailsPage

### AnimalCard

- Receives a Animal data from props
- Receives a removeActionOnSubmit to delete
- Receives a detailsActionOnSubmit(id)
- Shows:
  - Image
  - Name
  - Gender
  - Size
- Shows the delete and update button.

### AnimalDetailPage

- Call getAnimalById() from useAnimals custom hook
- Create editActionOnClick() who navigates to UpdateFormPage(Animal)
- Shows all the Animal data :
  - name
  - species
  - races
  - gender
  - size
  - yearOfBirth
  - image
  - description
- Shows the update button.

### Button

- Receives a text / icon
- Receives an action on click
- Shows a button with the received text / icon
- Calls the received action when the button is clicked

### Pagination

- Previous button
- Next Button
