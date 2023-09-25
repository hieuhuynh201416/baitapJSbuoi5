function kiemTraKetQua() {
    var diemMon1 = parseFloat(document.getElementById("diemMon1").value);
    var diemMon2 = parseFloat(document.getElementById("diemMon2").value);
    var diemMon3 = parseFloat(document.getElementById("diemMon3").value);
    var khuVuc = document.getElementById("khuVuc").value;
    var doiTuong = document.getElementById("doiTuong").value;

    var diemKhuVuc = {
        'A': 2,
        'B': 1,
        'C': 0.5
    };

    var diemDoiTuong = {
        '1': 2.5,
        '2': 1.5,
        '3': 1
    };

    var diemUuTien = diemKhuVuc[khuVuc] + diemDoiTuong[doiTuong];
    var diemTongKet = diemMon1 + diemMon2 + diemMon3 + diemUuTien;

    var ketQua = document.getElementById("ketQua");
    if (diemTongKet >= 15 && diemMon1 !== 0 && diemMon2 !== 0 && diemMon3 !== 0) {
        ketQua.innerHTML = `
            <h3>Kết quả:</h3>
            <p><strong>Kết Quả:</strong> Thí sinh Trúng Tuyển</p>
            <p><strong>Điểm Tổng Kết:</strong> ${diemTongKet.toFixed(2)} điểm</p>
        `;
    } else {
        ketQua.innerHTML = `
            <h3>Kết quả:</h3>
            <p><strong>Kết Quả:</strong> Thí sinh Rớt</p>
            <p><strong>Điểm Tổng Kết:</strong> ${diemTongKet.toFixed(2)} điểm</p>
        `;
    }
}