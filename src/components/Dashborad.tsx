// import  from"dotenv";
import React, { useState, useRef, useEffect } from "react";
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
import { IProduct } from "../utils/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { types } from "../constants/productsTypes";

const Dashboard = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { products, productURL, isLoading } = useSelector(
    (state: { api: object }) =>
      state?.api as {
        products: IProduct[];
        productURL: string;
        isLoading: boolean;
      }
  );
  const navigate = useNavigate();

  const productState: IProduct = {
    size: "",
    description: "",
    type: "",
    image: "",
    name: "",
  };
  const [formData, setFormData] = useState<IProduct>(productState as IProduct);

  const [isDisabled, setIsDisabled] = useState(true);
  const [isUpdatingNow, setIsUpdatingNow] = useState(false);
  const [uploadedImage, setUploadedImage] = useState("");

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
      setUploadedImage(productURL);
      checkIsFillToOpen(updatedState);
    }
  };

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();

    if (isUpdatingNow)
      dispatch(updateProduct({ data: formData, id: formData._id || "" }));
    else dispatch(addProduct(formData));
  };

  const fileReaderRef = useRef<HTMLInputElement | null>(null);

  const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];

      const reader = new FileReader();

      reader.onload = (event) => {
        if (event.target && event.target.result) {
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
          const image = uploadImage(file);
          dispatch(image);
          console.log(image);
        }
      }, "image/png");
    };
  };

  useEffect(() => {
    addImageToState();
  }, [productURL]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  // Login Logic

  const [isAdmin, setIsAdmin] = useState(!!sessionStorage.getItem("admin"));
  const [adminData, setAdminData] = useState({ username: "", password: "" });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAdminData({ ...adminData, [e.target.name]: e.target.value });
  };

  const onAdminSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!adminData.username || !!adminData.password) {
      console.log("Data Is Existing!");
    }

    if (
      adminData.username === import.meta.env.VITE_USERNAME &&
      adminData.password === import.meta.env.VITE_PASSWORD
    ) {
      setIsAdmin(true);
      sessionStorage.setItem("admin", "true");
    }
  };

  return (
    <>
      {isAdmin ? (
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
              className="form-select form-select-lg mb-3 rounded-4 fs-5 p-3"
              aria-label="Large select example"
              required
              name="type"
              value={formData.type || "kenepe"}
              onChange={handleChange}
            >
              {types.map((type) => (
                <option key={type} value={type}>
                  {type.toUpperCase()}
                </option>
              ))}
            </select>

            <div className="input-group mb-3">
              <input
                className="w-100 p-2 rounded-4 border border-white-50 p-3 fs-5"
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
                className="w-100 p-2 rounded-4 border border-white-50 p-3 fs-5"
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
                className="w-100 p-2 rounded-4 border border-white-50 p-3 fs-5"
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
                className="form-control p-3 rounded-4 d-none"
                type="file"
                id="product-choose-image"
                multiple
                accept="image/*"
                onChange={onSelectFile}
                ref={fileReaderRef}
                defaultValue={formData.image || ""}
                disabled={isLoading}
              />
              <div className="d-flex align-items-center justify-content-between">
                <label
                  htmlFor="product-choose-image"
                  className={
                    !uploadedImage
                      ? "text-danger fw-bold text-decoration-underline"
                      : "text-success fw-bold"
                  }
                >
                  {isLoading
                    ? "Loading..."
                    : uploadedImage
                    ? "Image Uploaded"
                    : "Click To Upload Image"}
                </label>

                {uploadedImage ? (
                  <img
                    width={100}
                    height={100}
                    className="border p-2"
                    src={uploadedImage}
                  />
                ) : (
                  <p className="bg-warning p-2 m-0">
                    {isLoading ? "Loading..." : "No Uploaded Image"}
                  </p>
                )}
              </div>
            </div>
            <div id="error-messages"></div>

            <div className="btns d-flex align-items gap-3">
              <button
                className="btn rounded-4 fs-4 w-75"
                type="submit"
                id="submit-form"
                disabled={isDisabled}
              >
                Add New Product
              </button>

              <button
                id="delete-all"
                className="btn btn-outline-danger fs-4 w-25 rounded-4"
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
                products.map((prod: IProduct) => (
                  <li
                    className="d-flex align-items-center justify-content-between fs-3 fw-bold text-capitalize product-item list-group-item"
                    key={prod._id}
                  >
                    <h3>{prod.type}</h3>
                    <div className="d-flex flex-column ">
                      <p className="fs-5">Product : '{prod.name}'</p>
                      <p className="fs-5"> Pieces : '{prod.size}'</p>
                    </div>
                    <div className="d-flex flex-column gap-2">
                      <button
                        className="product-update btn btn-warning "
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
                    <img
                      style={{
                        width:
                          window.document.documentElement.clientWidth < 800
                            ? "20%"
                            : "auto",
                      }}
                      src={prod.image}
                      alt=""
                    />
                  </li>
                ))}
            </ol>
          </div>

          <button
            className="btn btn-primary"
            onClick={() => navigate("/products")}
          >
            Return To Home Page
          </button>
        </div>
      ) : (
        <div className="container vw-100 vh-100 d-flex align-items-center justify-content-center">
          <form
            onSubmit={onAdminSubmit}
            action="admin-login"
            className="w-50 d-flex flex-column gap-3 align-items-center"
          >
            <h1 className="text-uppercase">Login</h1>
            <input
              id="username"
              type="name"
              onChange={onChange}
              placeholder="admin username"
              name="username"
              className="p-2 w-100 rounded-3 border border-1 border-secondary fs-5 text-capitalize"
            />
            <input
              id="password"
              type="password"
              onChange={onChange}
              placeholder="admin password"
              name="password"
              className="p-2 w-100 rounded-3 border border-1 border-secondary fs-5 text-capitalize"
            />

            <button className="btn btn-primary w-100" type="submit">
              Login As Admin
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Dashboard;
