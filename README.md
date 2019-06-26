# droom Back End

# Hosted On Heroku 
https://droom-backend-bw.herokuapp.com/

# Backend Architect - Cash Globe

## Endpoints
| Method | Endpoint               | Requires                        | Description                                                             |
| ------ | ---------------------- | ------------------------------- | ----------------------------------------------------------------------- |
| POST   | `/auth/register/`      | `first_name`, `last_name`, `email`, `password`, `is_employer`| Registers a New User to our database. Creates a token.                  |
| POST   | `/auth/login/`         | `username`, `password`          | Logs a returning user in. Creates a token.           
| GET   | `/users/`         | `Successful Login`          | Returns All Users
| GET   | `/users/id`         | `Successful Login`          |  Returns User With Specified Id      
| GET   | `/profile/seekers`         | `Successful Login`          |  Returns All Seekers        
| GET   | `/profile/seekers/id`         | `Successful Login`          |  Returns Seeker With Specified Id         
| GET   | `/profile/employers`         | `Successful Login`          |  Returns All Employers    
| GET   | `/profile/employers/id`         | `Successful Login`          |  Returns Employer With Specified Id                  
