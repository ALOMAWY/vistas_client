import React, { Fragment, useEffect, useRef, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { Product_Type } from "../utils/types";
import { AppDispatch } from "../redux/store";
import { fetchProducts } from "../redux/slices/apiSlice";
import { Link } from "react-router-dom";
interface Product_Interface {
  type: string;
  products_obj: Product_Type[];
}
const Product = ({ type, products_obj }: Product_Interface) => {
  const [itsOver, setItsOver] = useState<boolean>(false);
  const [isFixed, setIsFixed] = useState<boolean>(false);
  const [titleHeight, setTitleHeight] = useState<number>(0);
  const [titleMargin, setTitleMargin] = useState("0px");
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const titleHolderRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const validProducts = products_obj.filter(
    (prod) => prod.type.toLowerCase() == type.toLowerCase()
  );

  const numberOfProducts = validProducts.length;
  if (validProducts.length > 5) {
    setItsOver(true);
  }

  useEffect(() => {
    const title = titleRef.current;
    const titleHolder = titleHolderRef.current;
    const container = containerRef.current;
    setTitleHeight(title?.clientHeight || 0);
    setTitleMargin(title ? window.getComputedStyle(title).marginTop : "-32px");
    if (titleHolder)
      titleHolder.style.height = title?.clientHeight + "px" || "-32px";

    const handleScroll = () => {
      if (!container || !title || !titleHolder) return;

      let scrollY = window.scrollY;
      let offsetTop = container.offsetTop;
      let productHeight = container.clientHeight;
      let inProductHeight =
        scrollY > offsetTop &&
        scrollY < offsetTop + productHeight - titleHeight;

      setIsFixed(inProductHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="container-75 products products-1"
      style={{ display: !numberOfProducts ? "none" : "block" }}
      ref={containerRef}
    >
      <div className="title-holder bg-white big-title" ref={titleHolderRef}>
        <h1
          className={`big-title text-black show-text-y-50 bg-white text-capitalize ${
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
          {validProducts &&
            validProducts.map((product: Product_Type) => {
              return (
                <Link to={"/Products"} className="col col-sm-12">
                  <div className="d-flex flex-column border border-grey align-items-start  product w-100">
                    <div className="image-holder ">
                      <img src={product.image} className="rounded-5" />
                    </div>
                    <div className="w-100 d-flex flex-column align-items-start ">
                      <h3 className="fw-bold">{product.name}</h3>
                      <p className="fw-normal">{product.description}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
      <div
        className="show-more mx-auto my-5 p-3 text-uppercase fw-normal text-light cursor-pointer"
        style={{ display: itsOver ? "block" : "none" }}
      >
        show more
      </div>
    </section>
  );
};

const Products = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [itsOver, setItsOver] = useState<boolean>(false);
  const { isLoading, products, product } = useSelector(
    (state: any) => state.api
  );
  useEffect(() => {
    dispatch(fetchProducts());
    console.log(products);
  }, []);

  return (
    <Fragment>
      <Header isDark={true} />
      <section className="products-holders pb-5 d-flex flex-column">
        <Product type="berjer" products_obj={products}></Product>
        <Product type="koltuk" products_obj={products}></Product>
        <Product type="masa" products_obj={products}></Product>
        <Product type="sehpa" products_obj={products}></Product>
        <Product type="unite" products_obj={products}></Product>
      </section>
      <Footer />
    </Fragment>
  );
};

export default Products;
