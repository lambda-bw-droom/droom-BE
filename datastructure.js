/*
// Accepted Employer Profile Schema
```{
    name: string, *
    location: string, *
    about: string, *
    contact_info: {
        phone: string, *
        email: string *
    },
    social_media: {
        linkedIn: string,*
        github: string *
    },
    website: string *
}```
##### Accepted Seeker Profile Schema
```{
    first_name: string, *
    last_name: string, *
    position: string, *
    location: string, *
    bio: string, *
    contact_info: {
        phone_number: string, *
        email: string
    }, *
    interests: [array of interests],
    // past_experience: [ array of:
    //     {
    //         name: string,
    //         title: string,
    //         description: string
    //     }
    // ], 
    education: [ *
        {
            school: string,
            certificate: string
        }
    ],
    skills: [array of skills],
    // references: [ array of:
    //     {
    //         name: string,
    //         relationship: string,
    //         phone: string,
    //         email: string
    //     }
    // ],
    social_media: {

        linkedIn: string, *

        github: string *
    },
    portfolio: string, *
    resume: string, ////
    projects: [array of urls], ///
    niche: integer(references niche id), 
    => seen: [array of job ids that have been seen by user], <-
    timestamp: string 
}```

#### Niche Schema
```{
    id: integer,
    niche: string
}```

#### Accepted Job Schema
```{ 
    job_title: string, **
    start_date: string, **
    job_type: string(part-time, full-time, seasonal), **
    pay_type: string, //
    starting_pay: string, **
    education: string, //
    description: string, **
    responsibilities: string,
    required_skills: string, **
    => appliers: [array of seeker user_ids that have said yes],
    => confirmed: [array of seeker user_ids that are confirmed by employer],
    niche: integer(references niche id), 
    seen: boolean,
}```

 => #### Returned Schema for `/jobs/matches/employer`
```{
  job: {
    title: job_title,
    id: job id
  },
  usersAvailable: [ Array of:
    { User(s) that expressed interest in job
      user_id: user_id,
      first_name: user's first_name,
      last_name: user's last_name,
      position: user's position,
      location: user's location
    }
  ],
  usersConfirmed: [ Array of:
    { User(s) the company has approved
      user_id: user_id,
      first_name: user's first_name,
      last_name: user's last_name,
      position: user's position,
      location: user's location
    }
  ]
}```
*/


// TO DO ENDPOINTS

