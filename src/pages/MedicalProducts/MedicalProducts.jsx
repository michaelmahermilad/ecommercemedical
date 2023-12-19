import React, { useEffect } from "react";
import Title from "../../components/Title";
 import Categories from "./Categories";
 import Description from "./Description";
import Footer from "./Footer";
import NavBAR from "./NavBAR";
import Product from "./Product";
import ProductCard from "./ProductCard";
import Subs from "./Subs";
import { useDispatch, useSelector } from "react-redux";
import Cart from '../../Cart'
import {
  listProduct,
  listProductDetails,
} from "../../Redux/Actions/ProductAction";
import {useParams, useSearchParams } from "react-router-dom";
import { useState } from "react";
import { useRef } from "react";
import {
  Audio,
  BallTriangle,
  Bars,
  Circles,
  Grid,
  Hearts,
  Oval,
  Puff,
  Rings,
  SpinningCircles,
  TailSpin,
  ThreeDots,
} from "react-loading-icons";

function MedicalProducts() {
  const myRe = useRef();

  const productList = useSelector((state) => state.productList);
  const productDetails = useSelector((state) => state.productDetails);
  let { name } = useParams();
  const { loading, error, products } = productList;
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const [r, setR] = useState("");
  useEffect(()=>{ 
    window.scrollTo(0,0)
    window.history.scrollRestoration = 'manual'
  
  },[])
  

  useEffect(() => {

    const script = document.createElement("script");
    script.src = "//code.tidio.co/28hdlzzbiorjifs3modcn4nssh8nxll4.js";
    script.async = true;
    document.body.appendChild(script);
    dispatch(listProduct(""));
 

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  const [keyword, setKeyword] = useState("");
  function funct(e, k, searchbtn,focus) {
    if (k !== "") {
      setKeyword(k);
      if ((e.key == "Enter" || searchbtn == true) && focus==-1) {
        myRe.current.scrollIntoView();
      } 
    }
  }

 

  useEffect(() => {
    dispatch(listProduct(keyword));

    setR("");
  }, [keyword]);
  useEffect(() => {
    if (searchParams.get("id") !== null)
      dispatch(listProductDetails(searchParams.get("id")));
  }, [dispatch]);

  return (
    <div
      style={{ backgroundColor: "#fafafa", width: "100vw", overflow: "hidden" }}
    >
      <NavBAR funct={funct} setR={setR} pro={productList} />
      <Categories />
      
      {productDetails.loading ? (
        <div style={{ width: "fit-conetent", margin: "auto" }}>
          <div
            style={{
              width: "fit-content",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "6rem 0",
              margin: "auto",
            }}
          >
            <Grid fill="#6bac6b" style={{ color: "gray" }} />
          </div>
        </div>
      ) : productDetails.error ? (
        <>error</>
      ) : (
        <>
          <div
            style={{
              width: "fit-content",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "auto",
            }}
          >
            <Product product={productDetails} />
          </div>
        </>
      )}
      <div style={{height:"1rem"}}>  
</div>
      <Description product={productDetails} />
      <div style={{height:"1rem"}}>  
</div>
       <div
        ref={myRe}
        style={{
          width: "fit-content",
          margin: "auto",
          textAlign: "center",
          borderBottom: "4px solid rgb(31, 164, 124)",
        }}
      >
 
        <Title Font="21px" mobile={false} color="Black" title="Products" />
        <div style={{height:"1rem"}}>  
</div>
<div style={{height:"1rem"}}>  
</div>
      </div>
      <div style={{height:"1rem"}}>  
</div>

       <div
        className="grid"
        style={{ width: "94vw", margin: "auto", display: "grid" }}
      >
        {loading ?
         (
          <div style={{ width: "fit-conetent", margin: "auto" }}>
            <div
              style={{
                width: "fit-content",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "6rem 0",
                margin: "auto",
              }}
            >
              <Grid fill="#6bac6b" style={{ color: "gray" }} />
            </div>
          </div>
        ) 
        
        
        : error ? (
          <>Error</>
        ) : (
          <>
            {keyword !== "" && r == "start"
              ? products?.products?.map((i) => (
                  <ProductCard key={i} product={i} />
                ))
              : products?.productss?.map((i) => (
                  <ProductCard key={i} product={i} />
                ))}
          </>
        )}
      </div>
      <div style={{height:"1rem"}}>  
</div>
<div style={{height:"1rem"}}>  
</div>
       <Subs />
       <div style={{height:"1rem"}}>  
</div>
<div style={{height:"1rem"}}>  
</div>
       <Footer /><Cart T={8}/>
    </div>
  );
}

export default MedicalProducts;
