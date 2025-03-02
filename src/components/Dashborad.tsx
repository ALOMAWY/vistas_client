import React, { Fragment, useState, useRef, useEffect } from "react";
import {
  addProduct,
  deleteAll,
  deleteById,
  fetchProducts,
  updateProduct,
} from "../redux/slices/apiSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../redux/store";
import { uploadImage } from "../redux/slices/apiSlice";
import { Product_Type, updateProductParamsTypes } from "../utils/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { data } from "react-router-dom";

const Dashboard = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { products, product, isLoading, isDeleted, error, productURL } =
    useSelector((state: any) => state.api);

  const productState: Product_Type = {
    size: "",
    description: "",
    type: "",
    image: "",
    name: "",
  };
  const [formData, setFormData] = useState<Product_Type>(
    productState as Product_Type
  );

  const [isDisabled, setIsDisabled] = useState(true);

  const [isUpdatingNow, setIsUpdatingNow] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    const updatedState = { ...formData, [name]: value };
    setFormData(updatedState);

    checkIsFillToOpen(updatedState);
  };

  const checkIsFillToOpen = (updatedState: object) => {
    const allFilled = Object.values(updatedState).every((value) => {
      const val = value as string;
      return val.trim() !== "";
    });
    setIsDisabled(!allFilled);
  };
  const addImageToState = () => {
    if (productURL) {
      const updatedState = { ...formData, ["image"]: productURL };
      setFormData(updatedState);
      console.log(updatedState);
      checkIsFillToOpen(updatedState);
    }
  };

  const submitForm = (e: any) => {
    e.preventDefault();

    if (isUpdatingNow)
      dispatch(updateProduct({ data: formData, id: formData._id || "" }));
    else dispatch(addProduct(formData));
  };

  const [image, setImage] = useState<string | null>(null);

  const fileReaderRef = useRef<HTMLInputElement | null>(null);

  const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];

      const reader = new FileReader();

      reader.onload = (event) => {
        if (event.target && event.target.result) {
          setImage(event.target.result as string);
          processImage(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const processImage = (imageSrc: string) => {
    const img = new Image();
    img.src = imageSrc;
    img.onload = () => {
      const TARGET_SIZE = 225;

      const canvas = document.createElement("canvas");

      canvas.width = TARGET_SIZE;
      canvas.height = TARGET_SIZE;

      const ctx = canvas.getContext("2d");

      if (!ctx) return;

      const minSize = Math.min(img.width, img.height);

      const cropX = (img.width - minSize) / 2;
      const cropY = (img.height - minSize) / 2;

      ctx.drawImage(
        img,
        cropX,
        cropY,
        minSize,
        minSize,
        0,
        0,
        TARGET_SIZE,
        TARGET_SIZE
      );

      canvas.toBlob((blob) => {
        if (blob) {
          const file = new File([blob], "processed-image-png", {
            type: "image/png",
          });
          dispatch(uploadImage(file));
        }
      }, "image/png");
    };
  };

  useEffect(() => {
    dispatch(fetchProducts());
    addImageToState();
    console.log(products);
  }, [productURL, product, isDeleted]);

  return (
    <Fragment>
      <div className="container">
        <h1 className="text-center fw-bold fs-1 text-uppercase">
          Vistas Dashboard
        </h1>

        {/* <!-- Form to Add/Edit Products --> */}
        <form
          id="product-form"
          className="d-flex flex-column gap-3"
          onSubmit={submitForm}
        >
          <h3 className="">
            Products
            <span className="fs-6 m-2" id="products-length">
              {products && products.length}
            </span>
          </h3>

          <select
            id="product-type"
            className="form-select form-select-lg mb-3 rounded-0 fs-5 p-3"
            aria-label="Large select example"
            required
            name="type"
            value={formData.type || "kenepe"}
            onChange={handleChange}
          >
            <option value="berjer">Berjer</option>
            <option value="koltuk">Koltuk</option>
            <option value="masa">Masa</option>
            <option value="unite">Unite</option>
            <option value="sehpa">Sehpa</option>
          </select>

          <div className="input-group mb-3">
            <input
              className="w-100 p-2 rounded-0 border border-white-50 p-3 fs-5"
              id="product-model"
              type="text"
              placeholder="Product Model"
              required
              name="name"
              defaultValue={formData.name || ""}
              onChange={handleChange}
            />
          </div>
          <div className="input-group mb-3">
            <input
              className="w-100 p-2 rounded-0 border border-white-50 p-3 fs-5"
              id="product-size"
              type="number"
              placeholder="Product Items Size ?"
              required
              name="size"
              defaultValue={formData.size || ""}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <input
              className="w-100 p-2 rounded-0 border border-white-50 p-3 fs-5"
              id="product-discrioption"
              type="text"
              placeholder="Product Discription"
              required
              name="description"
              defaultValue={formData.description || ""}
              onChange={handleChange}
            />
          </div>
          <div className="my-3">
            <input
              className="form-control p-3 rounded-0"
              type="file"
              id="product-choose-image"
              multiple
              accept="image/*"
              onChange={onSelectFile}
              ref={fileReaderRef}
              defaultValue={formData.image || ""}
            />
          </div>
          <div id="error-messages"></div>

          <div className="btns d-flex align-items gap-3">
            <button
              className="btn rounded-0 fs-4 w-75"
              type="submit"
              id="submit-form"
              disabled={isDisabled}
            >
              Add New Product
            </button>

            <button
              id="delete-all"
              className="btn btn-outline-danger fs-4 w-25 rounded-0"
              type="reset"
              onClick={() => dispatch(deleteAll())}
            >
              Delete All
            </button>
          </div>
        </form>

        {/* List of Current Products  */}
        <div id="productList" className="my-5">
          <h3>Current Products</h3>

          <div className="d-flex align-items-center justify-content-between fs-3 fw-bold text-capitalize product-item list-group-item">
            <h3 className="fs-4 text-secondary w-25 text-center">
              Product Type
            </h3>
            <p className="fs-4 text-secondary">Model & Size</p>
            <p className="fs-4 text-secondary w-25 text-center">Picture</p>
          </div>
          <ol id="products-list" className="list-group list-group-numbered">
            {products &&
              products.map((prod: Product_Type) => (
                <li
                  className="d-flex align-items-center justify-content-between fs-3 fw-bold text-capitalize product-item list-group-item"
                  key={prod._id}
                >
                  <h3>{prod.type}</h3>
                  <div className="d-flex flex-column">
                    <p>Product Name Is :{prod.name}</p>
                    <p>Items Size Is :{prod.size}</p>
                  </div>
                  <div>
                    <button
                      className="product-update btn btn-warning me-3"
                      onClick={() => {
                        setIsUpdatingNow(true);
                        setFormData({
                          _id: prod._id,
                          name: prod.name,
                          type: prod.type,
                          description: prod.description,
                          size: prod.size.toString(),
                          image: prod.image,
                        });
                      }}
                    >
                      <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
                    </button>
                    <button
                      className="delete-product btn btn-danger"
                      onClick={() => dispatch(deleteById(prod._id || ""))}
                    >
                      <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                    </button>
                  </div>
                  <img src={prod.image} alt="" />
                </li>
              ))}
          </ol>
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboard;
