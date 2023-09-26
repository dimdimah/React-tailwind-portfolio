import { useState } from "react";
import Header from "./Header";
import { FaTrashAlt } from "react-icons/fa";
import IconBootstrap from "../assets/bootstrap-icon.svg";

function ProductForm() {
  const [formData, setFormData] = useState({
    productName: "",
    productCategory: "Product-1",
    imageProduct: "",
    productQuality: "BrandNew",
    productDescription: "",
    productPrice: "",
  });

  const [errors, setErrors] = useState({
    productName: false,
    productCategory: false,
    imageProduct: false,
    productQuality: false,
    productDescription: false,
    productPrice: false,
  });

  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [ProductNumber, setProductNumber] = useState(1);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleButtonClick = () => {
    const randomNum = Math.floor(Math.random() * 100);
    console.log(`Random Number: ${randomNum}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const hasErrors = Object.keys(formData).reduce((acc, key) => {
      if (!formData[key]) {
        acc[key] = true;
      } else {
        acc[key] = false;
      }
      return acc;
    }, {});

    setErrors(hasErrors);

    if (
      !formData.productName ||
      !formData.productCategory ||
      !formData.imageProduct ||
      !formData.productQuality ||
      !formData.productDescription ||
      !formData.productPrice
    ) {
      setError("Semua kolom harus diisi");
      return;
    }

    // Mencari Nomer urut
    let productNumber = ProductNumber;
    while (
      products.some((product) => product.productNumber === productNumber)
    ) {
      productNumber += 1;
    }

    setProducts([...products, { ...formData, productNumber }]);
    setProductNumber(productNumber + 1);
    setFormData({
      productName: "",
      productCategory: "Product-1",
      imageProduct: "",
      productQuality: "BrandNew",
      productDescription: "",
      productPrice: "",
    });
    setError("");
  };

  //Fungsi DELETE PRODUCT
  const handleDelete = (index) => {
    const confirmDelete = window.confirm("You want to delete this data?");
    if (confirmDelete) {
      const updatedProducts = [...products];
      updatedProducts.splice(index, 1);
      setProducts(updatedProducts);
    }
  };

  return (
    <div className="container p-4 mx-auto">
      <div className="flex flex-col items-center justify-center w-3/5 mx-auto mt-10 text-center mb-14">
        <img src={IconBootstrap} alt="icon-bootstrap" height={80} width={80} />
        <div className="my-2 text-3xl font-bold text-center">
          {Header.title}
        </div>
        <div className="text-base text-center">{Header.description}</div>
      </div>
      <div className="w-1/2 mx-auto mt-10 mb-10">
        <h1 className="mb-4 text-2xl font-semibold">Detail Product</h1>
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="mb-4">
            <label htmlFor="productName" className="block font-semibold">
              Product Name:
            </label>
            <input
              type="text"
              id="productName"
              name="productName"
              value={formData.productName}
              onChange={handleInputChange}
              className={`w-3/5 p-2 bg-gray-200 border rounded ${
                errors.productName ? "border-red-500" : ""
              }`}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="productCategory" className="block font-semibold">
              Product Category:
            </label>
            <select
              id="productCategory"
              name="productCategory"
              value={formData.productCategory}
              onChange={handleInputChange}
              className={`w-2/5 p-2 bg-gray-200 border rounded ${
                errors.productName ? "border-red-500" : ""
              }`}
            >
              <option value="Product-1">Product-1</option>
              <option value="Product-2">Product-2</option>
              <option value="Product-3">Product-3</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="imageProduct" className="block font-semibold">
              Image Product:
            </label>
            <input
              type="text"
              id="imageProduct"
              name="imageProduct"
              value={formData.imageProduct}
              onChange={handleInputChange}
              className={`w-2/5 p-2 bg-gray-200 border rounded ${
                errors.productName ? "border-red-500" : ""
              }`}
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold">Product Freshness:</label>
            <div className="flex flex-col gap-2 ml-3">
              <label className="mr-2">
                <input
                  type="radio"
                  name="productQuality"
                  value="BrandNew"
                  checked={formData.productQuality === "BrandNew"}
                  onChange={handleInputChange}
                />
                BrandNew
              </label>
              <label>
                <input
                  type="radio"
                  name="productQuality"
                  value="SecondHand"
                  checked={formData.productQuality === "SecondHand"}
                  onChange={handleInputChange}
                />
                SecondHand
              </label>
              <label>
                <input
                  type="radio"
                  name="productQuality"
                  value="Refurbished"
                  checked={formData.productQuality === "Refurbished"}
                  onChange={handleInputChange}
                />
                Refurbished
              </label>
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="productDescription" className="block font-semibold">
              Product Description:
            </label>
            <textarea
              id="productDescription"
              name="productDescription"
              value={formData.productDescription}
              onChange={handleInputChange}
              className={`w-full p-2 bg-gray-200 border rounded ${
                errors.productName ? "border-red-500" : ""
              }`}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="productPrice" className="block font-semibold">
              Product Price:
            </label>
            <input
              type="number"
              id="productPrice"
              name="productPrice"
              value={formData.productPrice}
              onChange={handleInputChange}
              className={`w-full p-2 bg-gray-200 border rounded ${
                errors.productName ? "border-red-500" : ""
              }`}
              placeholder="$ 1"
              min="1"
            />
          </div>
          <button
            onClick={handleButtonClick}
            type="submit"
            className="flex items-center justify-center w-5/6 p-2 mx-auto text-white bg-blue-500 rounded-md hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
        {error && (
          <div className="flex items-center justify-center p-3 mb-4 bg-red-500 rounded-md text-gray-50">
            {error}
          </div>
        )}
      </div>
      <div className="text-slate-950">
        <h2 className="mt-4 text-2xl font-bold text-center">Daftar Produk</h2>
        <table className="w-full border border-collapse">
          <thead>
            <tr className="text-lg font-bold text-gray-950 bg-gray-50">
              <th className="px-4 py-2">No</th>
              <th className="px-4 py-2">Product Name</th>
              <th className="px-4 py-2">Product Category</th>
              <th className="px-4 py-2">Product Freshness</th>
              <th className="px-4 py-2">Product Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr
                key={index}
                className={
                  (index % 2 === 0 ? "bg-gray-100 " : "") + "text-center"
                }
              >
                <td className="px-4 py-2">{product.productNumber}</td>
                <td className="px-4 py-2">{product.productName}</td>
                <td className="px-4 py-2">{product.productCategory}</td>
                <td className="px-4 py-2">{product.productQuality}</td>
                <td className="px-4 py-2">{product.productPrice}</td>
                <td className="px-4 py-2">
                  <button onClick={() => handleDelete(index)}>
                    <FaTrashAlt className="text-red-500 hover:text-red-600" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductForm;
