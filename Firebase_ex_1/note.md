Bài tập về nhà SS5
	Bài 1: Firebase
		- Tạo 1 collection tên là users
		- Tạo 1 form đăng kí dành cho người dùng đăng kí tài khoản(có thể sử dụng lại btvn SS2)
		- Khi người dùng nhập các thông tin vào form, ấn vào button đăng kí
			thì thông tin của người dùng sẽ lưu thành 1 bản ghi ở trên firebase
			ví dụ: 
				+ form đăng kí có các trường phải điền là:
					+ firstName
					+ lastName
					+ email
					+ phoneNumber : kiểu number
				+ sau khi người dùng ấn nút register(đăng kí) thì nhiệm vụ 
					của chúng ta là lấy ra các thông tin lastName,firstName,email,phoneNumber
					và add thành 1 document có các trường dữ liệu là lastName,firstName,email,phoneNumber
					trong collection('users');
		- In ra màn hình console thông tin của tất cả các users
		- update tất cả 2 số đầu của phoneNumber = 84
			ví dụ sdt: 012345678 -> 842345678
		- xóa các bản ghi có tên lastName trùng nhau
		- Lưu ý: thao tác = code:))
		- Khi nộp bài mn comment tên vào trong file index.html
		- Khi nộp mn chụp collection của mn lên nhé:))
	Bài 2(suy nghĩ)
		- xử lí chuỗi
			ví dụ
				Đỗ Văn Chinh -> Đinh
				Trịnh Thị Nga -> Tra
				Trần Hoài Nam -> Tram

[41:40]: Muốn sử dụng firestore, ta thêm 1 thư viện 
<script src="https://www.gstatic.com/firebasejs/7.19.1/firebase-firestore.js"></script>
					