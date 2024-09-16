BE/
├── config/                # Cấu hình môi trường, database, v.v.
│   └── db.js              # Cấu hình kết nối cơ sở dữ liệu (MongoDB)
├── controllers/           # Chứa logic xử lý của các route
│   └── authController.js  # Controller cho authentication
│   └── userController.js  # Controller cho người dùng
├── middlewares/           # Chứa các middleware như xác thực, xử lý lỗi
│   └── authMiddleware.js  # Middleware để kiểm tra token JWT
│   └── errorHandler.js    # Xử lý lỗi toàn cục
├── models/                # Chứa các schema của MongoDB
│   └── User.js            # Mô hình (schema) cho người dùng
├── routes/                # Định nghĩa các route
│   └── authRoutes.js      # Các route cho authentication
│   └── userRoutes.js      # Các route cho người dùng
├── services/              # Chứa các dịch vụ tái sử dụng (gửi email, thông báo, v.v.)
│   └── emailService.js    # Dịch vụ gửi email
├── utils/                 # Chứa các hàm tiện ích
│   └── validators.js      # Hàm validate dữ liệu
│   └── helpers.js         # Các helper chung
├── .env                   # Biến môi trường
├── .gitignore             # Các file/thư mục bị bỏ qua bởi Git
├── package.json           # File cấu hình npm (thông tin về dự án và dependencies)
└── app.js                 # Dùng để quản lí sử dụng các middleware, routes
├── server.js              # Điểm vào của ứng dụng (nơi khởi động server)
└── README.md              # Hướng dẫn sử dụng dự án
