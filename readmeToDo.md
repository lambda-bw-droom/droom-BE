

send jobs 
GET jobs id
GET jobs all
POST jobs 
PUT jobs by id 
Delete job by id 

create table for matches 
job id - job
user id - users


recieving current user id, job id => match or not match 

GET jobs/matches/employer 
GET jobs/matches/seeker



-------------------------------------
1. 
get [x] get [x]
[x] POST | `/profile/employer` | authorization(token) | Adds and returns employer’s profile
[x] PUT | `/profile/employer/:id` | authorization(token) | Returns updated employer
[x] DELETE | `/profile/employer/:id` | authorization(token) | Returns a message, indicating whether or not the delete succeeded

2. 
get[x] get [x]
[x] POST | `/profile/seeker` | authorization(token) | Adds and returns seeker’s profile
[x] PUT | `/profile/seeker/:id` | authorization(token) | Returns updated profile
[x] DELETE | `/profile/seeker/:id` | authorization(token) | Returns a message, indicating whether or not the delete succeeded

3.
[x] GET | `/jobs` | none | Returns a list of jobs
[x] GET | `/jobs/:id` | none | Returns job with id
[] POST | `/jobs` | authorization(token) | returns created job
[] PUT | `/jobs/:id` | authorization(token) | returns updated job
[] DELETE | `/jobs/:id` | authorization(token) | returns whether or not the job has been deleted

4.
[] GET | `/jobs/matches/employer` | authorization(token) | returns list of matches for each job by that employer
[] GET | `/jobs/matches/seeker` | authorization(token) | returns list of jobs seeker has not seen
[] GET | `/jobs/matches/job/:job_id` | authorization(token) | returns list of available and confirmed seekers for job_id
[] GET | `/jobs/employer/:id` | none | returns jobs associated with employer’s id