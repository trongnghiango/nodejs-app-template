#!/bin/bash

# Kiểm tra xem hình ảnh đã tồn tại chưa, nếu có thì xóa
if [ "$(docker images -q my-node-app 2> /dev/null)" ]; then
    echo "Deleting existing Docker image..."
    docker rmi my-node-app
fi

# Xây dựng hình ảnh Docker
echo "Building Docker image..."
docker build -t my-node-app .

# Chạy ứng dụng trong Docker ở chế độ background
echo "Running Docker container in the background..."
docker run -d -p 3000:3000 --name my-node-app-container my-node-app

# In ra thông tin về container đang chạy
echo "Container is running in the background. You can access it at http://localhost:3000"