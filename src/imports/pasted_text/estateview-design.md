Design a professional web-based property management and lot reservation system called “EstateView” for Manhattan Residences Candelaria.

The website must follow a role-based access structure with three user roles:
- Client (User)
- Staff
- Administrator

The website should allow visitors to access the homepage even if they are not logged in. However, if visitors try to access restricted features such as Appointment Scheduling, Reservation, Cost Breakdown, or Dashboard modules, the system should require them to log in first.

If the user clicks these restricted features without logging in, a login prompt should appear.

The design should use a modern real estate theme with a clean interface using blue, green, white, and gray colors.

-----------------------------------

PUBLIC WEBSITE (Accessible Without Login)

1. Landing Page / Homepage
Visitors can access the website homepage without logging in.

The homepage should include:
- Navigation bar
- Hero section introducing EstateView
- Information about Manhattan Residences Candelaria
- Promotional offers or property highlights

Navigation menu:

Home
About
Properties
Login

Buttons on the homepage:
- Explore Properties
- Schedule Appointment
- Reserve a Lot

If a visitor clicks "Schedule Appointment" or "Reserve a Lot" without logging in, the system should redirect them to the login page.

-----------------------------------

2. About Page

This page provides information about:
- Manhattan Residences Candelaria
- DGA Realty Corporation
- Description of the EstateView system

Include a Login section with three login options:

Login as Client
Login as Staff
Login as Administrator

These buttons will redirect to the login page.

-----------------------------------

AUTHENTICATION SYSTEM

3. Login Page

Create a login page that allows users to log in as:

- Client
- Staff
- Administrator

The login form includes:
- Email
- Password

Include links for:
- Forgot Password
- Sign Up (for clients only)

No authentication validation is required yet since this is only for interface design.

-----------------------------------

4. Sign Up Page (For Clients)

Fields:

First Name
Middle Name
Last Name
Suffix
Email Address
Contact Number
Password
Confirm Password

After signing up, the user can log in as a client.

-----------------------------------

CLIENT INTERFACE

5. Client Dashboard

After logging in as a client, the user is redirected to the Client Dashboard.

Navigation menu:

Home
About
Properties
Appointment
Cost Breakdown
Notifications
Account

Homepage should display:

- Promotional property offers
- Featured house models
- Quick access buttons

-----------------------------------

6. Properties Page

This page allows clients to explore house models and view the subdivision lot map.

House Models Section:

Naomi
Hannah
Nasiah

Each house card includes:

- House image
- Bedrooms
- Bathrooms
- Floor area
- Button for "View 360° Virtual Tour"

Below the house models, display a GIS-based subdivision map.

Interactive Map Features:

- Zoom in
- Zoom out
- Clickable lot locations
- When clicked, display:

Lot number
Lot area
Availability status

Color-coded legend:

Orange: Playground / Amenities
Gray: Model Houses
Green: Lot Only
Yellow: House and Lot
Brown: Commercial Area
Pink: Sold Lots

-----------------------------------

7. Cost Breakdown Page

Create a property computation system.

For House and Lot:

User selects:
- House Model
- Lot Location
- Down Payment Percentage (minimum 20%)

System displays:

Estimated Total Contract Price
Reservation Fee ₱50,000
Monthly Down Payment
Estimated Bank Loan Amortization

For Lot Only:

User selects:

Lot Location
Down Payment Percentage

System displays:

Lot Area
Total Contract Price
Reservation Fee ₱20,000

Payment options:

Bank Loan
Deferred Payment

-----------------------------------

8. Appointment Scheduling Page

Create a calendar-based appointment system.

Appointment types:

Property tripping
Loan consultation
Reservation assistance

Features:

Month and date selection
Time slot selection
Blue color = available
Gray color = fully booked

Include notes section for appointment purpose.

-----------------------------------

9. Reservation Page

Reservation form includes:

Lot Location
House Model (if applicable)
Contact Number
Email
Payment Mode:

Bank Loan
Cash
Deferred

Down Payment Percentage (minimum 20%).

Document Upload Section:

1x1 photos
Valid IDs
Proof of Billing
PSA/Birth Certificate
Proof of Income
TIN ID

Include Terms and Conditions checkbox stating reservation fee is non-refundable.

-----------------------------------

10. Client Payment Dashboard (My Bills)

Display:

Reservation Fee
Down Payment Schedule
Due Dates
Remaining Balance
Payment Status

Include Upload Proof of Payment feature.

-----------------------------------

STAFF INTERFACE

11. Staff Dashboard

Modules:

Appointment Management
Reservation Management
Payment Verification
Client Records

Staff can:

Approve or decline appointments
Review reservation submissions
Verify payment proof
View client transaction records

-----------------------------------

ADMINISTRATOR INTERFACE

12. Admin Dashboard

Admin has full control of the system.

Dashboard shows statistics:

Total Clients
Available Lots
Reserved Lots
Sold Lots
Pending Reservations
Pending Appointments
Pending Payment Verifications

Admin modules:

Staff Management
Property Management
Lot Mapping Management
Reservation Management
Payment Verification
User Management
Reports

-----------------------------------

13. Reports Page

Charts and data visualizations including:

Property status pie chart:
Available
Reserved
Sold

Monthly payment collection chart

Total reservations
Total verified payments

-----------------------------------

DESIGN REQUIREMENTS

Modern real estate dashboard design
Clean and professional layout
Card-based UI
Interactive subdivision map inside the Properties page
Separate dashboards for Client, Staff, and Admin
Responsive design for desktop and tablet
Professional interface suitable for a property reservation and management system