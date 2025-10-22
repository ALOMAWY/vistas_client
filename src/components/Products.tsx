import { Fragment, useEffect, useRef, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { Product_Type } from "../utils/types";
import { AppDispatch } from "../redux/store";
import { fetchProducts } from "../redux/slices/apiSlice";
import { useNavigate } from "react-router-dom";
import { types } from "../constants/productsTypes";

interface IProduct {
  type: string;
  products_obj: Product_Type[];
}

// export const PRODUCTS_KEY = "vistas_products";
export const CURRENT_PRODUCT_KEY = "vistas_product";

const ProductTypeArea = ({ type, products_obj }: IProduct) => {
  // Showing Products Logic --START--
  const [itsOver, setItsOver] = useState<boolean>(false);
  const [showingProducts, setShowingProducts] = useState<number>(5 - 1);

  // Showing Products Logic --END--

  const [isFixed, setIsFixed] = useState<boolean>(false);
  const [titleHeight, setTitleHeight] = useState<number>(0);
  const [titleMargin, setTitleMargin] = useState("0px");
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const titleHolderRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const products = products_obj.filter(
    (prod) => prod.type.toLowerCase() == type.toLowerCase()
  );

  const numberOfProducts = products.length;

  useEffect(() => {
    if (products.length > 5) {
      setItsOver(true);
    }
  }, [products]);

  useEffect(() => {
    const title = titleRef.current;
    const titleHolder = titleHolderRef.current;
    const container = containerRef.current;
    setTitleHeight(title?.clientHeight || 57);
    setTitleMargin(title ? window.getComputedStyle(title).marginTop : "-32px");
    if (titleHolder)
      titleHolder.style.height = title?.clientHeight + "px" || "-32px";

    const handleScroll = () => {
      if (!container || !title || !titleHolder) return;

      const scrollY = window.scrollY;
      const offsetTop = container.offsetTop;
      const productHeight = container.clientHeight;
      const inProductHeight =
        scrollY > offsetTop &&
        scrollY < offsetTop + productHeight - titleHeight;

      setIsFixed(inProductHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //
  const navigate = useNavigate();

  const handleShowMore = () => {
    setShowingProducts(showingProducts + 5);
  };

  return (
    <section
      className="container-75 products products-1"
      style={{ display: !numberOfProducts ? "none" : "block" }}
      ref={containerRef}
    >
      <div
        className="title-holder bg-white big-title"
        style={{ height: `${titleHeight}px` }}
        ref={titleHolderRef}
      >
        <h1
          className={`big-title text-black show-text-y-50 z-3 bg-white text-capitalize  ${
            isFixed ? "position-fixed start-0 py-4 px-2 w-100 shadow-sm" : ""
          } `}
          style={{
            top: isFixed ? `-${titleMargin}px` : "-32px",
          }}
          ref={titleRef}
        >
          {type}
          <span className="products-length fs-3 p-3">
            {numberOfProducts} {numberOfProducts >= 1 ? "Product" : "Products"}
          </span>
        </h1>
      </div>

      <div className="holder">
        <div className="row gap-3 align-items-start " id={`${type}-product`}>
          {products &&
            products.map((product: Product_Type, index) => (
              <div
                key={index}
                className={`${
                  itsOver && index > showingProducts ? "d-none" : "d-flex"
                } flex-column border border-grey align-items-start product rounded-5 show-text-x-40`}
                onClick={() => {
                  localStorage.setItem(
                    CURRENT_PRODUCT_KEY,
                    JSON.stringify(product)
                  );
                  navigate(`/products/${product._id}`);
                }}
              >
                <div className="image-holder ">
                  <img src={product.image} className="rounded-5" />
                </div>
                <div className="w-100 d-flex flex-column align-items-start ">
                  <h3 className="fw-bold">{product.name}</h3>
                  <p className="fw-normal">{product.description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div
        // className="show-more mx-auto my-5 p-3 text-uppercase fw-normal text-light cursor-pointer"
        className="btn btn-success w-25 text-capitalize my-5 mx-auto"
        style={{
          display:
            itsOver && showingProducts < products.length ? "block" : "none",
        }}
        onClick={handleShowMore}
      >
        show more
      </div>
    </section>
  );
};

const Products = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { products } = useSelector((state) => state?.api);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <Header isDark={true} />
      <section className="products-holders pb-5 d-flex flex-column">
        {!products.length ? (
          <div className="container text-center fs-1 fw-bold text-uppercase">
            No Product
          </div>
        ) : (
          types.map((type, index) => (
            <ProductTypeArea type={type} products_obj={products} key={index} />
          ))
        )}
      </section>
      <Footer />
    </>
  );
};

export default Products;
