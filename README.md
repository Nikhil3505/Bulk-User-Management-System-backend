# Bulk User Management System

A scalable backend system for managing bulk users using **Node.js**, **Express**, and **PostgreSQL**.  
Supports bulk creation and updating of users, proper schema validation, and database export.

---

## **Table of Contents**

- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Project Setup](#project-setup)  
- [API Endpoints](#api-endpoints)  
- [Database](#database)  
- [Seeding Dummy Data](#seeding-dummy-data)  
- [Export Database](#export-database)  
- [Postman Collection](#postman-collection)  
- [License](#license)  

---

## **Features**

- Bulk create users (5,000+ per request)  
- Bulk update users efficiently  
- Schema validation and unique constraints on email & phone  
- User account status and KYC tracking  
- Device & tracking information  
- Automatic `createdAt` and `updatedAt` timestamps  
- Export database in SQL/JSON formats  
- Database indexing for performance optimization  

---

## **Tech Stack**

- **Backend:** Node.js, Express  
- **Database:** PostgreSQL  
- **ORM:** Sequelize  
- **Dummy Data Generator:** Faker.js  
- **Testing:** Postman  

---

## **Project Setup**

1. **Clone the repository:**

```bash
git clone https://github.com/YourUsername/bulk-user-management.git
cd bulk-user-management
