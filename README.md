# 🧾 Customer Management API

This is a simple Express.js-based REST API that allows users to manage customer data using a MongoDB database. The API supports creating, retrieving, updating, and deleting customer records.

---

## 📁 Project Structure

```
.
├── controller.js       # Business logic for CRUD operations
├── customerModel.js     # Mongoose schema and model for Customer
├── Db.js               # MongoDB connection setup
├── routes.js           # Express router for endpoints
├── server.js           # Express server configuration
├── .env                # Environment variables
├── .gitignore          # Git ignore rules
```

---

## ⚙️ Technologies Used

- Node.js
- Express.js
- MongoDB + Mongoose
- dotenv
- Postman (for API testing)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Prateekaditya/Keploy_ApiServer
cd Keploy_ApiServer
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory and add the following:

```env
PORT=5555
MONGODB_URl=your_mongodb_connection_string
```

Replace `your_mongodb_connection_string` with your actual MongoDB URI

### 4. Run the Server

```bash
node server.js
```

Server will start at: http://localhost:5555

---

## 📌 API Endpoints

### ✅ Health Check

```http
GET /
```

**Response:**

```json
{
  "message": "ALL GOOD!!!!"
}
```

### 🔹 Create a Customer

```http
POST /cus/create
```

**Request Body:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "age": 30
}
```

**Response:**

```json
{
  "success": true,
  "message": "Customer Has Been Added",
  "customer": {
    "name": "John Doe",
    "email": "john@example.com",
    "age": 30
  }
}
```

### 📄 Get All Customers

```http
GET /cus
```

**Response:**

```json
{
  "success": true,
  "message": "Customer are this",
  "count": 2,
  "customers": [
    {
      "id": "64dd....",
      "name": "John Doe",
      "email": "john@example.com",
      "age": 30
    }
  ]
}
```

### 📝 Update a Customer

```http
PATCH /cus/:id
```

**Request Body:**

```json
{
  "name": "Updated Name",
  "email": "updated@example.com",
  "age": 35
}
```

**Response:**

```json
{
  "success": true,
  "message": "customer updated",
  "details": {
    "name": "Updated Name",
    "email": "updated@example.com",
    "age": 35
  }
}
```

### ❌ Delete a Customer

```http
DELETE /cus/:id
```

**Response:**

```json
{
  "success": true,
  "message": "Customer Deleted",
  "deleted": {
    "name": "Deleted Name"
  }
}
```

---

## 🧪 Postman Testing

You can use Postman to test all endpoints. Set the base URL to:

```
http://localhost:5555
```

Send appropriate requests to each endpoint as shown above.

---

## 📃 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Prateek Aditya**