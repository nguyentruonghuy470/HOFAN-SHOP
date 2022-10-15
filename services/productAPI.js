var baseUrl = "https://629757ee14e756fe3b2dcf70.mockapi.io/productHofan";

// Hàm call API lấy danh sách sản phẩm
function apiGetProducts(search) {
  return axios({
    url: baseUrl,
    method: "GET",
    params:{
      name:search,
    }
  });
}

// // Hàm call API thêm sản phẩm
// function apiAddProduct(product) {
//   return axios({
//     url: baseUrl,
//     method: "POST",
//     data: product,
//   });
// }

// // Hàm call API xoá sản phẩm
// function apiDeleteProduct(productId) {
//   return axios({
//     url: `${baseUrl}/${productId}`,
//     method: "DELETE",
//   });
// }

//  // Call api để lấy chi tiết sản phẩm
//  function apiGetProductDetail(productId){
//   return axios({
//     url: `${baseUrl}/${productId}`,
//     method: "GET",
//   });
//  }

//  //Hàm call api để cập nhật sản phẩm
//  function apiUpdateProduct(product){
//   return axios({
//     url: `${baseUrl}/${product.id}`,
//     data: product,
//     method: "PUT"
//   });
//  }









