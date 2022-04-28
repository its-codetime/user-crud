# Routes

- given below are all the routes with component rendered for that route
- (route - ComponentRendered)

- /dashboard/users - Users
- /user
  - /user/create - AddUser
  - /user/edit/:id - EditUser
  - /user/delete/:id - DeleteUser
  - /user/profile/:id - Profile

# Components

- App.js

  - renders nav and all the other routes
  - contains 2 state fields
    - users - contains all the user data - [{id,name,age,email},...]
    - profile - contains profile data - {name,age,email}
  - functions to update state(function names are self explanatory)
    - addUser
    - updateUser
    - deleteUser
    - getUser
    - updateProfile

- Nav.js

  - contains links to dashboard and add user

- Form.js

  - common form for the below components
    - AddUser
    - EditUser
  - receives 2 props
    - formData
      - name, age and email
    - formUtils
      - submitName, onSubmit and onCancel
