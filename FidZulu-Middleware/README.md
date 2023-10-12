# Fidzulu Middleware

## Class B
Class B runs on port 3021.

Class B receives requests from the frontend client and passes them onto the backend. It receives the data sent by the backend, packages it in a format suitable for the frontend and then transmits it to the frontend.

It deals with Bike, Food, and Toy models.

The server defines routers for each of the above models- bike, food and toy.

### Bike Router
The bike router exposes two endpoints: 
- "`classA/bikes/all/:location`"
- "`classA/bikes/team`"

#### The `/all/:location` path

Here `:location` is a path variable that accepts `US-NC` (for North Carolina), `IE` (for Ireland), or `IN` (for India), based on which price calculation is applied to convert the prices (which are in USD) into the appropriate currency and apply the appropriate sales tax.

#### The `/team`  path

The `/team` endpoint returns a JSON object with the team name and all team member names.

*Response Format*
```json
{
"team": "TeamName",
"membersNames": ["Member Name 1", "Member Name 2"]
}
```

#### Error handling

- Internal Server Error (500) is thrown when the backend is unreachable
- Page Not Found Error (404) is thrown when a non-existent endpoint is requested or when the `all` endpoint's `location` path variable is invalid

*Error Response Format*
```json
{
    "error": "Error Type",
    "detail": "More insight into why the error occured"
}``` 