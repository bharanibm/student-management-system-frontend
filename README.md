# Student Management System – Frontend

A responsive Student Management System frontend built using **React.js** to manage student records efficiently. This application provides an intuitive interface for performing CRUD operations, searching student records and navigating through paginated data.

## 🚀 Features

- **Student Management (CRUD)**

  - Add new students
  - View all student records
  - Edit existing student details
  - Delete student records

- **Search Functionality**

  - Search students using name.

- **Pagination**

  - Display student records across multiple pages.
  - Navigate between previous and next pages.

- **Form Validation**

  - Validate required fields.
  - Email format validation.
  - Phone number validation.
  - Display validation and API error messages.

- **Notifications**

  - Success and error notifications using React Toastify.

## 🛠️ Technologies Used

- React.js
- JavaScript (ES6+)
- HTML5
- CSS3
- Axios
- React Router DOM
- React Toastify

## 🏗️ Project Structure

```text
student-management-frontend/
│
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
└── README.md
```

## ⚙️ Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/bharanibm/student-management-system-frontend.git
```

### 2. Navigate to the Project Directory

```bash
cd student-management-frontend
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

The application will run at:

```text
http://localhost:5173
```

## 🔗 Backend Integration

This frontend communicates with a REST API developed using **Java Spring Boot** and **MySQL**.

- Axios is used to make HTTP requests.
- REST APIs handle student CRUD operations.
- Backend validation errors are handled and displayed in the frontend.

Make sure the backend application is running before using the frontend.

## 📌 Application Functionalities

| Functionality   | Description                         |
| --------------- | ----------------------------------- |
| Add Student     | Register new student details        |
| View Students   | Display student records             |
| Update Student  | Modify existing student information |
| Delete Student  | Remove student records              |
| Search Students | Find students using search          |
| Pagination      | Navigate through student records    |

## 👨‍💻 Author

**Bharanitharan M**

- GitHub: [https://github.com/bharanibm](https://github.com/bharanibm)
- LinkedIn: [https://www.linkedin.com/in/bharani-tharan-m-747753294/](https://www.linkedin.com/in/bharani-tharan-m-747753294/)

---

⭐ If you find this project useful, feel free to explore the repository!
