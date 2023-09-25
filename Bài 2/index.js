function tinhTienDien() {
    var tenKhachHang = document.getElementById("tenKhachHang").value*1;
    var soKw = parseFloat(document.getElementById("soKw").value)*1;
    
    var tienDien = 0;

    if (soKw <= 50) {
        tienDien = soKw * 500;
    } else if (soKw <= 100) {
        tienDien = 50 * 500 + (soKw - 50) * 650;
    } else if (soKw <= 150) {
        tienDien = 50 * 500 + 50 * 650 + (soKw - 100) * 1100;
    } else {
        tienDien = 50 * 500 + 50 * 650 + 50 * 1100 + (soKw - 150) * 1300;
    }

    var ketQua = document.getElementById("ketQua");
    ketQua.innerHTML = `
        <h3>Kết quả:</h3>
        <p><strong>Tên Khách Hàng:</strong> ${tenKhachHang}</p>
    
        <p><strong>Tiền Điện Phải Trả:</strong> ${tienDien} VNĐ</p>
    `;
}