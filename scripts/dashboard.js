import {
  getPurchaseOrders,
  savePurchaseOrders,
} from "./scripts/purchaseOrder.js";

const loginActive = localStorage.getItem("active-login");
if (!loginActive) {
  window.location.href = "/index.html";
} else {
  const user = JSON.parse(loginActive);
  const userName = document.querySelector(".user__name");
  userName.textContent = user.user;
}

const btnLogout = document.querySelector(".btn__logout");
btnLogout.addEventListener("click", () => {
  localStorage.removeItem("active-login");
  window.location.href = "/index.html";
});
const orders = getPurchaseOrders();
const supplierName = document.querySelector("#supplierName");

const suppliers = [];

for (let i = 0; i < orders.length; i++) {
  if (!suppliers.includes(orders[i].supplier)) {
    suppliers.push(orders[i].supplier);
  }
}

const options = suppliers.map(function (supplier) {
  return `
    <option value="${supplier}">${supplier}</option>
  `;
});

supplierName.innerHTML = `
  <option value="">-- Chọn nhà cung cấp --</option>
  ${options.join("")}
`;

const tbody = document.querySelector(".order__table tbody");
function renderTable(data) {
  const rows = data.map(function (order) {
    return `
      <tr>
        <td>${order.id}</td>
        <td>${order.supplier}</td>
        <td>${order.purchaseDate}</td>
        <td>${order.employee}</td>
        <td>${order.total.toLocaleString("vi-VN")}đ</td>
        <td>${renderStatus(order.status)}</td>
      </tr>
    `;
  });

  tbody.innerHTML = rows.join("");
}
renderTable(orders);
function renderStatus(status) {
  switch (status) {
    case "draft":
      return `<span class="status status--draft">Bản nháp</span>`;

    case "confirmed":
      return `<span class="status status--confirmed">Đã xác nhận</span>`;

    case "received":
      return `<span class="status status--received">Đã nhập kho</span>`;

    default:
      return "";
  }
}

supplierName.addEventListener("change", function () {
  const filteredSupplierName = orders.filter(function (order) {
    return order.supplier === supplierName.value;
  });
  renderTable(filteredSupplierName);
  console.log(filteredSupplierName)
  const btnSearch = document.querySelector(".btn__search");
  btnSearch.addEventListener("click", function () {
    const orderCode = document.querySelector("#orderCode");
    orderCode.value;
    console.log(orderCode.value);

    const searchID = filteredSupplierName.filter(function (order) {
      console.log(order.id);
      return order.id === orderCode.value;
    });
    console.log(searchID);
    renderTable(searchID);
  });
});


const btnSearch = document.querySelector(".btn__search");
  btnSearch.addEventListener("click", function () {
    const orderCode = document.querySelector("#orderCode");
    orderCode.value;
    console.log(orderCode.value);

    const searchID = orders.filter(function (order) {
      console.log(order.id);
      return order.id === orderCode.value;
    });
    console.log(searchID);
    renderTable(searchID);
  });