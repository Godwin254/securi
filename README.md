# [securi](https://securi-app.herokuapp.com/) - Estate Vehicle Access Control System
## Description
A web app that integrates with a microcontroller circuit(fingerprint scanner + RFID tag) and manages the activities of an Estate Vehicle Access. The main objective is to help curb the risks of unknown/unauthorized users getting access of residents vehicles from the estate and getting away with the act without the resident's knowledge.
**NB: This is a final year undergrad project that is to be assessed on completion of the course study.**

## Technologies incorporated
1. IOT (key components >> RFID & Optical Fingerprint reader & ESP32 )
2. Reactjs (frontend)
3. Nodejs + Express (backend)
4. MongoDB
3. sendGrid - (email service)
4. Token based authentication (jwt)

## modules
### Residents module
1. Login and signup for residents
2. Approval of registration requests
3. Addition of users authorized to access the vehicle

### Admin module
1. Login for admin
2. Registration requests list for residents
3. Approval of registration requests
3. Edit residents info - assign fingerprintID and tagID
4. Deletion of residents from the database

### Security module
1. Interface for security gaurd to verify success/failed attempts of scan

### Mailing module
1. alert to resident when registration request is approved
2. Alert when access is made using the RFID tag / user's fingerprint scanned.

## Environment
Ubuntu 22.04

## API documentation
### Admin endpoints
``GET /api/admins/`` - load all admins data from the db
``GET /api/admins/:id`` - load one admin from the db
``POST /api/admins/register`` - create an admin
``POST /api/admins/login`` - create an admin
``PATCH /api/admins/:id`` - Update admin details with the specified Id
``DELETE /api/admins/:id`` - delete admin with the specified ID

### Resident endpoints
``GET /api/residents/`` - load all resident data from the db
``GET /api/residents/:id`` - load one resident from the db
``POST /api/residents/register`` - create an resident
``POST /api/residents/login`` - create an resident
``PATCH /api/residents/:id`` - Update resident details with the specified Id
``DELETE /api/residents/:id`` - delete resident with the specified ID
