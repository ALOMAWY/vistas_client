
import { useTranslation } from "react-i18next";

const OurProducts = () => {
  const { t } = useTranslation();

  return (
    <section id="our-product" className="our-product py-5">
      <h1 className="section-title text-center background-light-effect-50">
        {t("ourProducts.sectionTitle")}
      </h1>

      <div className="products container-75">
        <h1 className="fw-bold text-black fs-1 show-text-x-50">
          {t("ourProducts.heading")}
        </h1>
        <div className="row align-items-end"></div>
      </div>
    </section>
  );
};

export default OurProducts;
