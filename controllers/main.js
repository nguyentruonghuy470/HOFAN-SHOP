// Cần call API để lấy danh sách sản phẩm và hiển thị ra giao diện

// Hàm main sẽ được chạy khi ứng dụng được khởi chạy
main();

function main() {
  // B1: Gọi API lấy danh sách sản phẩm
  let loader = `<div class="load-3">
  <div class="line"></div>
  <div class="line"></div>
  <div class="line"></div>
</div>`;
  document.getElementById("loading").innerHTML = loader;
  apiGetProducts().then(function (result) {
    // Tạo biến products nhận kết quả trả về từ API
    var products = result.data;
    // Sau khi đã lấy được data từ API thành công
    // Duyệt mảng data và khởi tạo các đối tượng Product
    for (var i = 0; i < products.length; i++) {
      var product = products[i];
      products[i] = new Product(
        product.id,
        product.img,
        product.name,
        product.comment,
        product.url
      );
    }
    // Gọi hàm display để hiển thị danh sách sản phẩm ra giao diện
    display(products);
  });
}

function display(products) {
  var html = "";
  for (var i = 0; i < products.length; i++) {
    var product = products[i];
    html += `
    <a class="product-info col-3 animate__animated animate__bounce animate__fadeInUp wow" href=${product.url}>
      <div class="product-item">
        <div>
          <img src="${product.img}" class="imgFluid"/>
        </div>
        <div class="blog-info">
          <div class="blog-text">${product.name}</div>
        </div>
      </div>
    </a>
    `;
  }
  // DOM tới tbody và innerHTML bằng biến html
  document.getElementById("tblDanhSachSP").innerHTML = html;
}

// // Hàm xử lý gọi API thêm sản phẩm
// function addProduct() {
//   // B1: DOM lấy value
//   var name = document.getElementById("TenSP").value;
//   var price = document.getElementById("GiaSP").value;
//   var image = document.getElementById("HinhSP").value;
//   var description = document.getElementById("MoTaSP").value;
//   // B2: Khởi tạo đối tượng Product
//   var product = new Product(null, name, price, image, description);
//   // B3: Gọi API thêm sản phẩm

//   apiAddProduct(product)
//     .then(function (result) {
//       // Thêm thành công, tuy nhiên lúc này dữ liệu chỉ mới được thay đổi ở phía server
//       // Gọi tới hàm main để call API get products và hiển thị ra giao diện
//       main();
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// }

// // Hàm xử lý gọi API xoá sản phẩm
// function deleteProduct(productId) {
//   apiDeleteProduct(productId)
//     .then(function () {
//       // Xoá thành công
//       main();
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// }

// DOM
// document.getElementById("btnThemSP").addEventListener("click", showAddModal);
// function showAddModal() {
//   // Thay đổi text của modal heading
//   document.querySelector(".modal-title").innerHTML = "Thêm sản phẩm";
//   document.querySelector(".modal-footer").innerHTML = `
//     <button
//       class="btn btn-primary"
//       data-type="add"
//     >
//       Thêm
//     </button>
//     <button
//       class="btn btn-secondary"
//       data-toggle="modal"
//       data-target="#myModal"
//     >
//       Huỷ
//     </button>
//   `;
// }

// // Uỷ quyền lắng nghe event của các button từ thẻ .modal-footer
// document.querySelector(".modal-footer").addEventListener("click", handleSubmit);
// // Các hàm callback được gọi tới khi event được kích hoạt đồng thời nhận được 1 tham số là đối tượng Event
// function handleSubmit(event) {
//   var type = event.target.getAttribute("data-type");

//   switch (type) {
//     case "add":
//       addProduct();
//       break;
//     case "update":
//       updateProduct();
//     default:
//       break;
//   }
// }

// // Uỷ quyền lắng nghe tất cả event của button Xoá và Cập nhật trong table cho tbody
// document
//   .getElementById("tblDanhSachSP")
//   .addEventListener("click", handleProductAction);

// DOM tới input search

// document.getElementById("basic-addon2").addEventListener("click", function () {
//   document.getElementById("txtSearch").value = this.value;
//   apiGetProducts(this.value).then(function (result) {
//     var products = result.data;

//     for (var i = 0; i < products.length; i++) {
//       var product = products[i];
//       products[i] = new Product(
//         product.id,
//         product.img,
//         product.name,
//         product.comment,
//         product.url
//       );
//     }
//     // Gọi hàm display để hiển thị danh sách sản phẩm ra giao diện
//     display(products);
//   });
// });
document.getElementById("txtSearch").addEventListener("keypress", handleSearch);
function handleSearch(evt) {
  console.log(evt);
  // Kiểm tra nếu key click vào không phải là Enter thì bỏ qua
  if (evt.key === "Enter") return;

  // Nếu
  var value = evt.target.value;
  apiGetProducts(value).then(function (result) {
    var products = result.data;

    for (var i = 0; i < products.length; i++) {
      var product = products[i];
      products[i] = new Product(
        product.id,
        product.img,
        product.name,
        product.comment,
        product.url
      );
    }
    // Gọi hàm display để hiển thị danh sách sản phẩm ra giao diện
    display(products);
  });
}
