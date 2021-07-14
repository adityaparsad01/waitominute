import React from "react";
import "./TestCardStyle.css"

function TextCard({key,imgsrc,title,info,totalPrice,price}) {
  return (
    <div className="col-md-4 col-10 mx-auto" key={key}>
    <div className="product-wrap addtc-parent" style={{position: "relative"}}>
      <div className="relative product_image swap-false">
        <a href="/" itemprop="url">
          <div className="image__container" style={{maxWidth:"1500px"}}>
          {imgsrc.map((img,idx)=>
            (
                <img
                src={img.url}
                alt={img}
                className="none lazyautosizes lazyloaded addtc-hb"
                style={{maxWidth:"1500px"}}
                data-sizes="auto"
                data-src=""
                data-srcset=""
              />
          ))}

          </div>
        </a>

        <div className="thumbnail-overlay">
          <a href="/" itemprop="url" className="hidden-product-link">
            {title}
          </a>
          <div className="info"></div>
        </div>
        <div className="banner_holder"></div>
      </div>
      <a className="product-info__caption " href="/" itemprop="url">
        <div className="product-details">
          <span className="title hide-in-desktop" itemprop="name">
          {title}
          </span>
          <span className="title hide-in-mobile" itemprop="name">
          {title}
          </span>
          <div
            style={{display: "none"}}
            className="jdgm-widget jdgm-preview-badge jdgm-preview-badge--with-link jdgm--done-setup"
            data-id="4905232531533"
            data-template="collection"
            data-auto-install="false"
          >
            <div
              style={{display: "none"}}
              className="jdgm-prev-badge"
              data-average-rating="0.00"
              data-number-of-reviews="0"
              data-number-of-questions="0"
            >
              <span
                className="jdgm-prev-badge__stars"
                data-score="0.00"
                tabindex="0"
                aria-label="0.00 stars"
              >
              </span>
              <span className="jdgm-prev-badge__text">No reviews</span>
            </div>
          </div>
          <span className="price sale">
            <span className="money">
              <span className="money">₹ {price}</span>
            </span>

            <span className="was_price">
              <span className="money">
                <span
                  className="Bold-theme-hook-DO-NOT-DELETE bold_product_compare_price"
                  data-override-value-set="1"
                  data-override-value="167000"
                ></span>
                <span className="money">₹ {totalPrice}</span>
              </span>
            </span>
          </span>
        </div>
      </a>
      <div
        title="Buy Now"
        className="add-to-cart-quick add-to-cart-absolute addtc-box-under-image"
        data-handle="sukkhi-lavish-gold-plated-white-pearl-choker-necklace-set-with-stud-earring-for-women"
      >
        <div
          className="addtc-button addtc-noselect"
          data-image="//cdn.shopify.com/s/files/1/1587/9445/products/SKR69591_BG_900x.jpg?v=1609745390"
        >
          Buy Now
        </div>
      </div>
    </div>
    </div>
  );
}

export default TextCard;
