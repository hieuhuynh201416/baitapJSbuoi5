function tinhThue() {
    var hoTen = document.getElementById("hoTen").value;
    var thuNhapNam = parseFloat(document.getElementById("thuNhapNam").value)*1;
    var soNguoiPhuThuoc = parseInt(document.getElementById("soNguoiPhuThuoc").value)*1;
    
    var thuNhapChiuThue = thuNhapNam - 4 - soNguoiPhuThuoc * 1.6;
    let thueThuNhap = 0;

    if (thuNhapChiuThue <= 60) {
        thueThuNhap = thuNhapChiuThue * 0.05;

    } else if (thuNhapChiuThue <= 120) {
        thueThuNhap = 60 * 0.05 + (thuNhapChiuThue - 60) * 0.1;

    } else if (thuNhapChiuThue <= 210) {
        thueThuNhap = 60 * 0.05 + 60 * 0.1 + (thuNhapChiuThue - 120) * 0.15;

    } else if (thuNhapChiuThue <= 384) {
        thueThuNhap = 60 * 0.05 + 60 * 0.1 + 90 * 0.15 + (thuNhapChiuThue - 210) * 0.25;

    } else if (thuNhapChiuThue <= 624) {
        thueThuNhap = 60 * 0.05 + 60 * 0.1 + 90 * 0.15 + 174 * 0.25 + (thuNhapChiuThue - 384) * 0.3;
    }
     else {
        thueThuNhap = 60 * 0.05 + 60 * 0.1 + 90 * 0.15 + 174 * 0.25 + 240 * 0.3 + (thuNhapChiuThue - 624) * 0.35;
    }

    var ketQua = document.getElementById("ketQua");
    ketQua.innerHTML = `
        <h3>Kết quả:</h3>
        <p><strong>Họ và Tên:</strong> ${hoTen}</p>
        <p><strong>Thu nhập chịu thuế:</strong> ${thuNhapChiuThue.toFixed(2)} triệu đồng</p>
        <p><strong>Thuế thu nhập cá nhân phải trả:</strong> ${thueThuNhap.toFixed(2)} triệu đồng</p>
    `;
}
