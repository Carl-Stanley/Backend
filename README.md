*********************************
*** Backend AIRBNB Build Week ***
*********************************

To Run the server type 'npm run server'

*** End points ***

Login: http://localhost:5500/api/auth/login 
Action: Post
Requires: username and password passed in headers.
returns: authorization token if successful, error if unsuccessful.  


Register: http://localhost:5500/api/auth/register 
Action: Post
Requires: username and password passed in headers.  
returns: success code if successful, error code if unsuccessful.

listings: http://localhost:5500/api/listings
Action: Get
Requires: authorization token passed in headers.
returns: success code if successful and all listings, error code if unsuccessful.

listings by userid: http://localhost:5500/api/listings/:user_id
Action: Get
Requires: authorization token and user_id passed in headers.
returns: success code if successful and all listings for that user_id, error code if unsuccessful.

listings add a listing: http://localhost:5500/api/listings/insertlisting
Action: insert
Requires: authorization token and, JSON Object. 
example:
{
    "user_id": 2,
    "beds": 2,
    "baths": 2,
    "season": 3,
    "has_wifi": 1,
    "allows_pets": 1,
    "predicted_price": 200
}
returns: success code if successful

listings remove a listing: http://localhost:5500/api/listings/deletelisting/:id
Action: Delete
Requires: authorization token and listing id.
returns: success code if successful and error code if unsuccessful.

listings update a listing: http://localhost:5500/api/listings/updatelisting/:id
Action: Put
Requires: authorization token and listing id. JSON Object. 
example:
{
    "user_id": 2,
    "beds": 2,
    "baths": 2,
    "season": 3,
    "has_wifi": 1,
    "allows_pets": 1,
    "predicted_price": 500
}
returns: success code if successful and error code if unsuccessful.