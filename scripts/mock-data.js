const dataUser = [
  { user: "admin", password: "123456" },
  { user: "member1", password: "123456" },
];

const purchaseOrders = [
  {
    id: "PO-0001",
    supplier: "Công ty TNHH ABC",
    purchaseDate: "2026-07-02",
    employee: "Nguyễn Quốc Tài",
    total: 25000000,
    status: "draft",
  },
  {
    id: "PO-0002",
    supplier: "Công ty Minh Phát",
    purchaseDate: "2026-07-01",
    employee: "Trần Văn A",
    total: 12800000,
    status: "confirmed",
  },
  {
    id: "PO-0003",
    supplier: "Công ty Hoàng Long",
    purchaseDate: "2026-06-30",
    employee: "Lê Thị B",
    total: 46350000,
    status: "received",
  },
  {
    id: "PO-0004",
    supplier: "Công ty TNHH ABC",
    purchaseDate: "2026-06-29",
    employee: "Phạm Văn C",
    total: 18700000,
    status: "confirmed",
  },
  {
    id: "PO-0005",
    supplier: "Công ty Minh Phát",
    purchaseDate: "2026-06-28",
    employee: "Nguyễn Văn D",
    total: 34200000,
    status: "draft",
  },
  {
    id: "PO-0006",
    supplier: "Công ty Hoàng Long",
    purchaseDate: "2026-06-27",
    employee: "Lê Văn E",
    total: 15800000,
    status: "received",
  },
  {
    id: "PO-0007",
    supplier: "Công ty Thành Công",
    purchaseDate: "2026-06-26",
    employee: "Hoàng Thị F",
    total: 52900000,
    status: "draft",
  },
  {
    id: "PO-0008",
    supplier: "Công ty TNHH ABC",
    purchaseDate: "2026-06-25",
    employee: "Trần Văn G",
    total: 21700000,
    status: "received",
  },
  {
    id: "PO-0009",
    supplier: "Công ty Minh Phát",
    purchaseDate: "2026-06-24",
    employee: "Nguyễn Thị H",
    total: 39800000,
    status: "confirmed",
  },
  {
    id: "PO-0010",
    supplier: "Công ty Hoàng Long",
    purchaseDate: "2026-06-23",
    employee: "Lê Minh I",
    total: 11200000,
    status: "draft",
  },
  {
    id: "PO-0011",
    supplier: "Công ty Thành Công",
    purchaseDate: "2026-06-22",
    employee: "Đặng Văn K",
    total: 27600000,
    status: "confirmed",
  },
  {
    id: "PO-0012",
    supplier: "Công ty TNHH ABC",
    purchaseDate: "2026-06-21",
    employee: "Nguyễn Thị L",
    total: 48500000,
    status: "received",
  },
  {
    id: "PO-0013",
    supplier: "Công ty Minh Phát",
    purchaseDate: "2026-06-20",
    employee: "Phạm Văn M",
    total: 19300000,
    status: "draft",
  },
  {
    id: "PO-0014",
    supplier: "Công ty Hoàng Long",
    purchaseDate: "2026-06-19",
    employee: "Trần Thị N",
    total: 36400000,
    status: "confirmed",
  },
  {
    id: "PO-0015",
    supplier: "Công ty Thành Công",
    purchaseDate: "2026-06-18",
    employee: "Lê Văn P",
    total: 42100000,
    status: "received",
  },
];

function initMockData() {
  if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify(dataUser));
  }

  if (!localStorage.getItem("purchaseOrders")) {
    localStorage.setItem(
      "purchaseOrders",
      JSON.stringify(purchaseOrders)
    );
  }
}

initMockData();