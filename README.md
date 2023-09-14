# Crud Destinations

**CSS** Bootstrap

**Stack:** MongoDB, Express, NodeJS

**Server-Side Rendering:** JSX

**Node Modules**: method-override, dotenv, express-react-views

## Routes

| Method | Path                             | Purpose                                                                        |
| ------ | -------------------------------- | ------------------------------------------------------------------------------ |
| GET    | `/`                              | The home page                                                                  |
| GET    | `/Destinations`                  | Index page listing all Destinations                                            |
| GET    | `/Destinations/new`              | New form for a place                                                           |
| POST   | `/Destinations`                  | Create a new place                                                             |
| GET    | `/Destinations/:id`              | Show one place in detail (Associated rants, new rant form, delete rant button) |
| GET    | `/Destinations/:id/edit`         | Edit form for a place                                                          |
| PUT    | `/Destinations/:id`              | Make changes to existing place                                                 |
| DELETE | `/Destinations/:id`              | Delete a place                                                                 |
| POST   | `/Destinations/:id/rant`         | Add rant to a place                                                            |
| DELETE | `/Destinations/:id/rant/:rantId` | Delete a rant                                                                  |

## Database

**Destinations**

| Field    | Type      |
| -------- | --------- |
| \_id     | Object ID |
| name     | String    |
| city     | String    |
| state    | String    |
| cuisines | String    |
| pic      | String    |

**learning**

| Field    | Type                        |
| -------- | --------------------------- |
| \_id     | Object ID                   |
| place_id | ref(Destinations) Object_Id |
| rant     | Boolean                     |
| rating   | Number                      |
| comment  | String                      |
| reviewer | String                      |
