# Project Title

StaffPro Employee Management Hub

## Overview

This is a Basic Employee Management System designed for small size businesses or individual business owners to manage essential employee details efficiently. It offers a central platform for accessing and maintaining staff profiles, department categorization, and salary information. As an advance feature I’m also planning to add single sign on of admin(Business owner) and staff.

### Problem

Many small businesses lack a centralized system to handle employee information, which often leads to inconsistencies and inefficiencies in data management. There are softwares in the market but those are very expensive tools and complicated as well. There's a clear need for a simple yet effective system that can consolidate essential employee details and facilitate easy modifications and updates. This software MVP1 is to replace manual data entries in register.

### User Profile

The app is intended for business administrators and HR personnel within small to medium-sized businesses. 
Second persona is individual business owners like Dentist, Salon, Contractor, PMs for their own personal projects while hiring freelancers.

### Features

1. **Dashboard**: A central hub displaying no. of admins, employees, total salary data and quick access to various system functions.
2. **Manage Departments**: Allows the creation, viewing, and modification of different department categories within the organization.
3. **Manage Staff Details**: Users can add new employees, view details, edit information, or delete profiles as needed.
4. **Salary Information**: Maintain and edit salary details linked to each employee profile.
5. **Employee Communication**: Functionality to send emails to employees directly from the system. ***(optional advance feature only if time persists)***
6. **Employee Profiles**: Individual profiles containing detailed information such as contact details, department, and salary information.

## Implementation

### Tech Stack

- **Frontend**: React.js for creating interactive user interfaces.
- **Backend**: Node.js with Express framework to handle API requests.
- **Database**: MySQL, for relational database system, to manage and store all employee-related data. This setup ensures efficient data processing and integrity for operations such as querying, updating, and managing employee information.
- **Authentication**: Basic authentication using JWT (JSON Web Tokens) to ensure secure access to the system.

### APIs

- No external APIs are needed for basic operations but could consider an email service provider like SendGrid for future enhancements to handle email notifications. ***(optional advance feature only if time persists)***

### Sitemap

- **Home/Dashboard**: Quick overview of system statistics and recent activity.
- **Department Management**: Interface to add, edit, or delete department categories.
- **Employee Management**: Page to add, edit, and delete employee entries, including details like name, contact info, and salary.
- **Employee Profiles**: Detailed view of individual employee profiles with an option to send emails.

### Mockups

Mockups are roughly designed but would be working on Figma later.

### Data

The main entities will be:

- **Employee**: Contains details like name, contact info, department ID, and salary.

### Endpoints

- `GET /employees`: Retrieve all employee records.
- `POST /employees`: Add a new employee.
- `PUT /employees/{id}`: Update existing employee details.
- `DELETE /employees/{id}`: Remove an employee from the system.
- `GET /departments`: List all departments.
- `POST /departments`: Create a new department.

### Auth

Authentication will be handled using JWT, with secured routes requiring a valid token to ensure that only authorized personnel can access sensitive employee data.

## Roadmap

- **Now - June 2**: Complete project setup, configure the MySQL database, and start basic backend development.
- **June 3 - June 5**: Implement core features including department and employee management functionalities.
- **June 6**: Integrate authentication mechanisms to secure the application.
- **June 7**: Develop the frontend and integrate it with the backend.
- **June 8**: Conduct comprehensive testing and begin bug fixing.
- **June 9 - June 10**: Final deployment preparations and launch the system. Post-deployment monitoring to ensure operational stability.

## Nice-to-haves

- **Advanced Filtering and Search**: Enhance the employee and department management pages with advanced search and filter capabilities.
- **User Role Management**: Implement different user roles with varying levels of access and permissions within the system.
