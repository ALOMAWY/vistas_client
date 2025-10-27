import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { CURRENT_PRODUCT_KEY } from "./Products";
import { useTranslation } from "react-i18next";

const ProductDetails = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const storagedProduct = localStorage.getItem(CURRENT_PRODUCT_KEY);
  let ourProduct;
  if (storagedProduct) ourProduct = JSON.parse(storagedProduct);

  if (!ourProduct) {
    return (
      <div className="vh-100 d-flex align-items-center justify-content-center text-center">
        <h2>{t("productDetails.noProduct")}</h2>
      </div>
    );
  }

  return (
    <div className="vh-100">
      <Header isDark={true} />
      <section
        style={{ height: `calc(100vh - 130px)` }}
        className="product-details-holders w-100 d-flex align-items-center justify-content-center"
      >
        <div className="container-75">
          <div className="row d-flex flex-column align-items-center border p-4 rounded-4">
            <div className="col-md-5 mb-5">
              <img
                className="w-100 rounded"
                src={ourProduct.image}
                alt={ourProduct.name}
              />
            </div>

            <div className="col-md-6 w-100">
              <div className="text-capitalize fw-bold d-flex gap-3 fs-3 w-100 justify-content-between align-items-center">
                <p className="w-50 my-2 ms-auto">
                  {t("productDetails.title")}:
                </p>
                <p className="w-50 my-2 ml-auto">{ourProduct.name}</p>
              </div>
              <hr />
              <div className="text-capitalize fw-bold d-flex gap-3 fs-3 w-100 justify-content-between align-items-center">
                <p className="w-50 my-2 ms-auto">{t("productDetails.type")}:</p>
                <p className="w-50 my-2 ml-auto">{ourProduct.type}</p>
              </div>
              <hr />
              <div className="text-capitalize fw-bold d-flex gap-3 fs-3 w-100 justify-content-between">
                <p className="w-50 ms-auto">
                  {t("productDetails.description")}:
                </p>
                <p className="w-50 ml-auto">{ourProduct.description}</p>
              </div>
            </div>
          </div>

          <button
            className="btn btn-primary d-block m-auto mt-5"
            onClick={() => navigate("/products")}
          >
            {t("productDetails.seeMore")}
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
