# droom Back End

# Hosted On Heroku 
https://droom-backend-bw.herokuapp.com/

# Backend Architect - Cash Globe

## Endpoints
| Method | Endpoint               | Requires                        | Description                                                             |
| ------ | ---------------------- | ------------------------------- | ----------------------------------------------------------------------- |
| POST   | `/auth/register/`      | `first_name`, `last_name`, `email`, `password`, `is_employer`| Registers a New User to our database. Creates a token.                  |
| POST   | `/auth/login/`         | `email`, `password`          | Logs a returning user in. Creates a token.           
| GET   | `/users/`         | `Successful Login`          | Returns All Users
| GET   | `/users/id`         | `Successful Login`          |  Returns User With Specified Id      
| GET   | `/profile/seekers`         | `Successful Login`          |  Returns All Seekers        
| GET   | `/profile/seekers/id`         | `Successful Login`          |  Returns Seeker With Specified Id   POST | `/profile/seeker` | authorization(token) | Adds seeker’s profile
PUT | `/profile/seeker/:id` | authorization(token) | Updates seekers profile
DELETE | `/profile/seeker/:id` | authorization(token) | Deletes seeekers profile   
| GET   | `/profile/employers`         | `Successful Login`          |  Returns All Employers    
| GET   | `/profile/employers/id`         | `Successful Login`          |  Returns Employer With Specified Id   
POST | `/profile/employer` | authorization(token) | Adds employer’s profile
PUT | `/profile/employer/:id` | authorization(token) | Updates selected employer
DELETE | `/profile/employer/:id` | authorization(token) | Deletes selected employer
GET | `/jobs` | none | Returns a list of jobs
GET | `/jobs/:id` | none | Returns job with id
POST | `/jobs` | authorization(token) | creates new job
PUT | `/jobs/:id` | authorization(token) | updates job
DELETE | `/jobs/:id` | authorization(token) | deletes job
POST | `jobs/:jobs_id/matches` | authorization(token) | Creates a matched instance for user
PUT | `/:job_id/matches/:id` | authorization(token), employer_matched field | Updates matched instance to have employer_matched field
GET | `/matches/:id` | authorization(token)| Returns matches for user
