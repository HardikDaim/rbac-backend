## Backend Setup

### 1. Clone the Repository
```bash
git clone https://github.com/HardikDaim/rbac-backend.git
cd rbac-assignment-backend
```

### 2. Install Dependencies
```bash
npm install
```
### 3. Setup Environment Variables
```bash
PORT=4000
MONGO_URI=mongodb://localhost:27017/rbac-assignment
```
### 4. Run the Applicationv
```bash
npm start
```
# Usage
The backend exposes API endpoints to manage users and roles. The primary tasks include:
User Management: Adding, deleting, updating users.
Role Management: Creating roles, deleting roles, and updating role permissions.
RBAC Implementation: Assign roles to users and control access based on their roles.



