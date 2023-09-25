
function tinhHoaDon() {
  // var maKhachHang = document.getElementById("maKhachHang").value;
  var loaiKhachHang = document.getElementById("loaiKhachHang").value;
  var soKetNoi = parseInt(document.getElementById("soKetNoi").value);
  var soKenhCaoCap = parseInt(document.getElementById("soKenhCaoCap").value);

  let phiXuLyHoaDon, phiDichVuCoBan, phiKenhCaoCap;

  if (loaiKhachHang === "nhaDan") {
      phiXuLyHoaDon = 4.5;
      phiDichVuCoBan = 20.5;
      phiKenhCaoCap = 7.5 * soKenhCaoCap;
  } else {
      phiXuLyHoaDon = 15;
      phiDichVuCoBan = 75 + (soKetNoi - 10) * 5;
      phiKenhCaoCap = 50 * soKenhCaoCap;
  }

  var tongHoaDon = phiXuLyHoaDon + phiDichVuCoBan + phiKenhCaoCap;

  var ketQua = document.getElementById("ketQua");
  ketQua.innerHTML = `
      <h3>Kết quả:</h3>
      
      <p><strong>Loại Khách Hàng:</strong> ${loaiKhachHang === "nhaDan" ? "Nhà Dân" : "Doanh Nghiệp"}</p>
      <p><strong>Mã Khách Hàng:</strong> ${soKetNoi}</p>
      <p><strong>Tổng Hóa Đơn:</strong> $${tongHoaDon.toFixed(2)}</p>
  `;
}