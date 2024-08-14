import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Home() {
    return (
        <div class="page-wrapper">
            <main class="main">
                <div class="intro-slider-container">
                    <div class="intro-slider owl-carousel owl-theme owl-nav-inside owl-light" data-toggle="owl" data-owl-options='{
                            "dots": false,
                            "nav": false, 
                            "responsive": {
                                "992": {
                                    "nav": true
                                }
                            }
                        }'>
                        <div class="intro-slide" style={{ backgroundImage : 'url("assets/images/demos/demo-6/slider/slide-1.jpg")' }}>
                            <div class="container intro-content text-center">
                                <h3 class="intro-subtitle text-white">You're Looking Good</h3> 
                                <h1 class="intro-title text-white">New Lookbook</h1> 

                                <a href="category.html" class="btn btn-outline-white-4">
                                    <span>Discover More</span>
                                </a>
                            </div> 
                        </div> 

                        <div class="intro-slide" style={{ backgroundImage : 'url("assets/images/demos/demo-6/slider/slide-2.jpg")' }} >
                            <div class="container intro-content text-center">
                                <h3 class="intro-subtitle text-white">Don’t Miss</h3> 
                                <h1 class="intro-title text-white">Mysrety Deals</h1> 

                                <a href="category.html" class="btn btn-outline-white-4">
                                    <span>Discover More</span>
                                </a>
                            </div> 
                        </div> 
                    </div>

                    <span class="slider-loader"></span>
                </div>

                <div class="pt-2 pb-3">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="banner banner-overlay">
                                    <a href="#">
                                        <img src="assets/images/demos/demo-6/banners/banner-1.jpg" alt="Banner" />
                                    </a>

                                    <div class="banner-content banner-content-center">
                                        <h4 class="banner-subtitle text-white"><a href="#">New in</a></h4>
                                        <h3 class="banner-title text-white"><a href="#"><strong>Women’s</strong></a></h3>  
                                        <a href="#" class="btn btn-outline-white banner-link underline">Shop Now</a>
                                    </div>  
                                </div>  
                            </div>  

                            <div class="col-sm-6">
                                <div class="banner banner-overlay">
                                    <a href="#">
                                        <img src="assets/images/demos/demo-6/banners/banner-2.jpg" alt="Banner" />
                                    </a>

                                    <div class="banner-content banner-content-center">
                                        <h4 class="banner-subtitle text-white"><a href="#">New in</a></h4>
                                        <h3 class="banner-title text-white"><a href="#"><strong>Men’s</strong></a></h3>  
                                        <a href="#" class="btn btn-outline-white banner-link underline">Shop Now</a>
                                    </div>  
                                </div>  
                            </div>  
                        </div>   
                        <hr class="mt-0 mb-0" />
                    </div>   
                </div>   

                <div class="mb-5"></div>   
                <div class="container">
                    <div class="heading heading-center mb-3">
                        <h2 class="title">Trending</h2>   

                        <ul class="nav nav-pills justify-content-center" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="trending-all-link" data-toggle="tab" href="#trending-all-tab" role="tab" aria-controls="trending-all-tab" aria-selected="true">All</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="trending-women-link" data-toggle="tab" href="#trending-women-tab" role="tab" aria-controls="trending-women-tab" aria-selected="false">Women</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="trending-men-link" data-toggle="tab" href="#trending-men-tab" role="tab" aria-controls="trending-men-tab" aria-selected="false">Men</a>
                            </li>
                        </ul>
                    </div>   

                    <div class="tab-content tab-content-carousel">
                        <div class="tab-pane p-0 fade show active" id="trending-all-tab" role="tabpanel" aria-labelledby="trending-all-link">
                            <div class="owl-carousel owl-simple carousel-equal-height carousel-with-shadow" data-toggle="owl" 
                                data-owl-options='{
                                    "nav": false, 
                                    "dots": true,
                                    "margin": 20,
                                    "loop": false,
                                    "responsive": {
                                        "0": {
                                            "items":2
                                        },
                                        "480": {
                                            "items":2
                                        },
                                        "768": {
                                            "items":3
                                        },
                                        "992": {
                                            "items":4
                                        },
                                        "1200": {
                                            "items":4,
                                            "nav": true,
                                            "dots": false
                                        }
                                    }
                                }'>
                                <div class="product product-7 text-center">
                                    <figure class="product-media">
                                        <a href="product.html">
                                            <img src="assets/images/demos/demo-6/products/product-1-1.jpg" alt="Product image" class="product-image" />
                                            <img src="assets/images/demos/demo-6/products/product-1-2.jpg" alt="Product image" class="product-image-hover" />
                                        </a>

                                        <div class="product-action-vertical">
                                            <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                        </div>

                                        <div class="product-action">
                                            <a href="#" class="btn-product btn-cart"><span>add to cart</span></a>
                                        </div>
                                    </figure>

                                    <div class="product-body">
                                        <div class="product-cat">
                                            <a href="#">Clothing</a>
                                        </div>   
                                        <h3 class="product-title"><a href="product.html">Denim jacket</a></h3>   
                                        <div class="product-price">
                                            $19.99
                                        </div>   

                                        <div class="product-nav product-nav-thumbs">
                                            <a href="#" class="active">
                                                <img src="assets/images/demos/demo-6/products/product-1-thumb.jpg" alt="product desc" />
                                            </a>
                                            <a href="#">
                                                <img src="assets/images/demos/demo-6/products/product-1-2-thumb.jpg" alt="product desc" />
                                            </a>
                                            <a href="#">
                                                <img src="assets/images/demos/demo-6/products/product-1-3-thumb.jpg" alt="product desc" />
                                            </a>
                                        </div>   
                                    </div>   
                                </div>   

                                <div class="product product-7 text-center">
                                    <figure class="product-media">
                                        <a href="product.html">
                                            <img src="assets/images/demos/demo-6/products/product-2-1.jpg" alt="Product image" class="product-image" />
                                            <img src="assets/images/demos/demo-6/products/product-2-2.jpg" alt="Product image" class="product-image-hover" />
                                        </a>

                                        <div class="product-action-vertical">
                                            <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                        </div>

                                        <div class="product-action">
                                            <a href="#" class="btn-product btn-cart"><span>add to cart</span></a>
                                        </div>
                                    </figure>

                                    <div class="product-body">
                                        <div class="product-cat">
                                            <a href="#">Shoes</a>
                                        </div>   
                                        <h3 class="product-title"><a href="product.html">Sandals</a></h3>   
                                        <div class="product-price">
                                            $24.99
                                        </div>   
                                    </div>   
                                </div>   

                                <div class="product product-7 text-center">
                                    <figure class="product-media">
                                        <span class="product-label label-sale">sale</span>
                                        <a href="product.html">
                                            <img src="assets/images/demos/demo-6/products/product-3-1.jpg" alt="Product image" class="product-image" />
                                            <img src="assets/images/demos/demo-6/products/product-3-2.jpg" alt="Product image" class="product-image-hover" />
                                        </a>

                                        <div class="product-action-vertical">
                                            <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                        </div>

                                        <div class="product-action">
                                            <a href="#" class="btn-product btn-cart"><span>add to cart</span></a>
                                        </div>
                                    </figure>

                                    <div class="product-body">
                                        <div class="product-cat">
                                            <a href="#">Clothing</a>
                                        </div>   
                                        <h3 class="product-title"><a href="product.html">Printed sweatshirt</a></h3>   
                                        <div class="product-price">
                                            <span class="new-price">Now $7.99</span>
                                            <span class="old-price">Was $12.99</span>
                                        </div>   
                                    </div>   
                                </div>   

                                <div class="product product-7 text-center">
                                    <figure class="product-media">
                                        <a href="product.html">
                                            <img src="assets/images/demos/demo-6/products/product-4-1.jpg" alt="Product image" class="product-image" />
                                            <img src="assets/images/demos/demo-6/products/product-4-2.jpg" alt="Product image" class="product-image-hover" />
                                        </a>

                                        <div class="product-action-vertical">
                                            <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                        </div>

                                        <div class="product-action">
                                            <a href="#" class="btn-product btn-cart"><span>add to cart</span></a>
                                        </div>
                                    </figure>

                                    <div class="product-body">
                                        <div class="product-cat">
                                            <a href="#">Clothing</a>
                                        </div>   
                                        <h3 class="product-title"><a href="product.html">Linen-blend paper bag trousers</a></h3>   
                                        <div class="product-price">
                                            $17.99
                                        </div>   

                                        <div class="product-nav product-nav-thumbs">
                                            <a href="#" class="active">
                                                <img src="assets/images/demos/demo-6/products/product-4-thumb.jpg" alt="product desc" />
                                            </a>
                                            <a href="#">
                                                <img src="assets/images/demos/demo-6/products/product-4-2-thumb.jpg" alt="product desc" />
                                            </a>
                                        </div>   
                                    </div>   
                                </div>   

                                <div class="product product-7 text-center">
                                    <figure class="product-media">
                                        <a href="product.html">
                                            <img src="assets/images/demos/demo-6/products/product-1-1.jpg" alt="Product image" class="product-image" />
                                            <img src="assets/images/demos/demo-6/products/product-1-2.jpg" alt="Product image" class="product-image-hover" />
                                        </a>

                                        <div class="product-action-vertical">
                                            <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                        </div>

                                        <div class="product-action">
                                            <a href="#" class="btn-product btn-cart"><span>add to cart</span></a>
                                        </div>
                                    </figure>

                                    <div class="product-body">
                                        <div class="product-cat">
                                            <a href="#">Clothing</a>
                                        </div>   
                                        <h3 class="product-title"><a href="product.html">Denim jacket</a></h3>   
                                        <div class="product-price">
                                            $19.99
                                        </div>   

                                        <div class="product-nav product-nav-thumbs">
                                            <a href="#" class="active">
                                                <img src="assets/images/demos/demo-6/products/product-1-thumb.jpg" alt="product desc" />
                                            </a>
                                            <a href="#">
                                                <img src="assets/images/demos/demo-6/products/product-1-2-thumb.jpg" alt="product desc" />
                                            </a>
                                            <a href="#">
                                                <img src="assets/images/demos/demo-6/products/product-1-3-thumb.jpg" alt="product desc" />
                                            </a>
                                        </div>   
                                    </div>   
                                </div>   
                                
                            </div>
                        </div>
                        <div class="tab-pane p-0 fade" id="trending-women-tab" role="tabpanel" aria-labelledby="trending-women-link">
                            <div class="owl-carousel owl-simple carousel-equal-height carousel-with-shadow" data-toggle="owl" 
                                data-owl-options='{
                                    "nav": false, 
                                    "dots": true,
                                    "margin": 20,
                                    "loop": false,
                                    "responsive": {
                                        "0": {
                                            "items":0
                                        },
                                        "480": {
                                            "items":2
                                        },
                                        "768": {
                                            "items":3
                                        },
                                        "992": {
                                            "items":4
                                        },
                                        "1200": {
                                            "items":4,
                                            "nav": true,
                                            "dots": false
                                        }
                                    }
                                }'>
                                <div class="product product-7 text-center">
                                    <figure class="product-media">
                                        <span class="product-label label-sale">sale</span>
                                        <a href="product.html">
                                            <img src="assets/images/demos/demo-6/products/product-3-1.jpg" alt="Product image" class="product-image" />
                                            <img src="assets/images/demos/demo-6/products/product-3-2.jpg" alt="Product image" class="product-image-hover" />
                                        </a>

                                        <div class="product-action-vertical">
                                            <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                        </div>

                                        <div class="product-action">
                                            <a href="#" class="btn-product btn-cart"><span>add to cart</span></a>
                                        </div>
                                    </figure>

                                    <div class="product-body">
                                        <div class="product-cat">
                                            <a href="#">Clothing</a>
                                        </div>   
                                        <h3 class="product-title"><a href="product.html">Printed sweatshirt</a></h3>   
                                        <div class="product-price">
                                            <span class="new-price">Now $7.99</span>
                                            <span class="old-price">Was $12.99</span>
                                        </div>   
                                    </div>   
                                </div>   

                                <div class="product product-7 text-center">
                                    <figure class="product-media">
                                        <a href="product.html">
                                            <img src="assets/images/demos/demo-6/products/product-4-1.jpg" alt="Product image" class="product-image" />
                                            <img src="assets/images/demos/demo-6/products/product-4-2.jpg" alt="Product image" class="product-image-hover" />
                                        </a>

                                        <div class="product-action-vertical">
                                            <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                        </div>

                                        <div class="product-action">
                                            <a href="#" class="btn-product btn-cart"><span>add to cart</span></a>
                                        </div>
                                    </figure>

                                    <div class="product-body">
                                        <div class="product-cat">
                                            <a href="#">Clothing</a>
                                        </div>   
                                        <h3 class="product-title"><a href="product.html">Linen-blend paper bag trousers</a></h3>   
                                        <div class="product-price">
                                            $17.99
                                        </div>   

                                        <div class="product-nav product-nav-thumbs">
                                            <a href="#" class="active">
                                                <img src="assets/images/demos/demo-6/products/product-4-thumb.jpg" alt="product desc" />
                                            </a>
                                            <a href="#">
                                                <img src="assets/images/demos/demo-6/products/product-4-2-thumb.jpg" alt="product desc" />
                                            </a>
                                        </div>   
                                    </div>   
                                </div>   

                                <div class="product product-7 text-center">
                                    <figure class="product-media">
                                        <a href="product.html">
                                            <img src="assets/images/demos/demo-6/products/product-1-1.jpg" alt="Product image" class="product-image" />
                                            <img src="assets/images/demos/demo-6/products/product-1-2.jpg" alt="Product image" class="product-image-hover" />
                                        </a>

                                        <div class="product-action-vertical">
                                            <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                        </div>

                                        <div class="product-action">
                                            <a href="#" class="btn-product btn-cart"><span>add to cart</span></a>
                                        </div>
                                    </figure>

                                    <div class="product-body">
                                        <div class="product-cat">
                                            <a href="#">Clothing</a>
                                        </div>   
                                        <h3 class="product-title"><a href="product.html">Denim jacket</a></h3>   
                                        <div class="product-price">
                                            $19.99
                                        </div>   

                                        <div class="product-nav product-nav-thumbs">
                                            <a href="#" class="active">
                                                <img src="assets/images/demos/demo-6/products/product-1-thumb.jpg" alt="product desc" />
                                            </a>
                                            <a href="#">
                                                <img src="assets/images/demos/demo-6/products/product-1-2-thumb.jpg" alt="product desc" />
                                            </a>
                                            <a href="#">
                                                <img src="assets/images/demos/demo-6/products/product-1-3-thumb.jpg" alt="product desc" />
                                            </a>
                                        </div>   
                                    </div>   
                                </div>   
                            </div>
                        </div>

                        <div class="tab-pane p-0 fade" id="trending-men-tab" role="tabpanel" aria-labelledby="trending-men-link">
                            <div class="owl-carousel owl-simple carousel-equal-height carousel-with-shadow" data-toggle="owl" 
                                data-owl-options='{
                                    "nav": false, 
                                    "dots": true,
                                    "margin": 20,
                                    "loop": false,
                                    "responsive": {
                                        "0": {
                                            "items":0
                                        },
                                        "480": {
                                            "items":2
                                        },
                                        "768": {
                                            "items":3
                                        },
                                        "992": {
                                            "items":4
                                        },
                                        "1200": {
                                            "items":4,
                                            "nav": true,
                                            "dots": false
                                        }
                                    }
                                }'>
                                <div class="product product-7 text-center">
                                    <figure class="product-media">
                                        <span class="product-label label-sale">sale</span>
                                        <a href="product.html">
                                            <img src="assets/images/demos/demo-6/products/product-3-1.jpg" alt="Product image" class="product-image" />
                                            <img src="assets/images/demos/demo-6/products/product-3-2.jpg" alt="Product image" class="product-image-hover" />
                                        </a>

                                        <div class="product-action-vertical">
                                            <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                        </div>

                                        <div class="product-action">
                                            <a href="#" class="btn-product btn-cart"><span>add to cart</span></a>
                                        </div>
                                    </figure>

                                    <div class="product-body">
                                        <div class="product-cat">
                                            <a href="#">Clothing</a>
                                        </div>   
                                        <h3 class="product-title"><a href="product.html">Printed sweatshirt</a></h3>   
                                        <div class="product-price">
                                            <span class="new-price">Now $7.99</span>
                                            <span class="old-price">Was $12.99</span>
                                        </div>   
                                    </div>   
                                </div>   
                            </div>
                        </div>
                    </div>
                </div>   

                <div class="mb-5"></div>   

                <div class="deal bg-image pt-8 pb-8" style={{ backgroundImage : 'url("assets/images/demos/demo-6/deal/bg-1.jpg")' }}>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-sm-12 col-md-8 col-lg-6">
                                <div class="deal-content text-center">
                                    <h4>Limited quantities. </h4>
                                    <h2>Deal of the Day</h2>
                                    <div class="deal-countdown" data-until="+10h"></div>
                                </div>
                                <div class="row deal-products">
                                    <div class="col-6 deal-product text-center">
                                        <figure class="product-media">
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-6/deal/product-1.jpg" alt="Product image" class="product-image" />
                                            </a>

                                        </figure>

                                        <div class="product-body">
                                            <h3 class="product-title"><a href="product.html">Elasticated cotton shorts</a></h3>   
                                            <div class="product-price">
                                                <span class="new-price">Now $24.99</span>
                                                <span class="old-price">Was $30.99</span>
                                            </div>   
                                        </div>   
                                        <a href="category.html" class="action">shop now</a>
                                    </div>
                                    <div class="col-6 deal-product text-center">
                                        <figure class="product-media">
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-6/deal/product-2.jpg" alt="Product image" class="product-image" />
                                            </a>

                                        </figure>

                                        <div class="product-body">
                                            <h3 class="product-title"><a href="product.html">Fine-knit jumper</a></h3>   
                                            <div class="product-price">
                                                <span class="new-price">Now $8.99</span>
                                                <span class="old-price">Was $17.99</span>
                                            </div>   
                                        </div>   
                                        <a href="category.html" class="action">shop now</a>
                                    </div>
                                </div>
                            </div>
                        </div>   
                    </div>   
                </div>

                <div class="pt-4 pb-3" style={{ backgroundColor: '#222' }}>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-3 col-sm-6">
                                <div class="icon-box text-center">
                                    <span class="icon-box-icon">
                                        <i class="icon-truck"></i>
                                    </span>
                                    <div class="icon-box-content">
                                        <h3 class="icon-box-title">Payment & Delivery</h3>
                                        <p>Free shipping for orders over $50</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-3 col-sm-6">
                                <div class="icon-box text-center">
                                    <span class="icon-box-icon">
                                        <i class="icon-rotate-left"></i>
                                    </span>
                                    <div class="icon-box-content">
                                        <h3 class="icon-box-title">Return & Refund</h3>
                                        <p>Free 100% money back guarantee</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-3 col-sm-6">
                                <div class="icon-box text-center">
                                    <span class="icon-box-icon">
                                        <i class="icon-unlock"></i>
                                    </span>
                                    <div class="icon-box-content">
                                        <h3 class="icon-box-title">Secure Payment</h3>
                                        <p>100% secure payment</p>
                                    </div>   
                                </div>   
                            </div>   

                            <div class="col-lg-3 col-sm-6">
                                <div class="icon-box text-center">
                                    <span class="icon-box-icon">
                                        <i class="icon-headphones"></i>
                                    </span>
                                    <div class="icon-box-content">
                                        <h3 class="icon-box-title">Quality Support</h3>   
                                        <p>Alway online feedback 24/7</p>
                                    </div>   
                                </div>   
                            </div>   
                        </div>   
                    </div>   
                </div>   

                <div class="mb-6"></div>   

                <div class="container">
                    <h2 class="title text-center mb-4">New Arrivals</h2>   

                    <div class="products">
                        <div class="row justify-content-center">
                            <div class="col-6 col-md-4 col-lg-3">
                                <div class="product product-7 text-center">
                                    <figure class="product-media">
                                        <span class="product-label label-sale">Sale</span>
                                        <a href="product.html">
                                            <img src="assets/images/demos/demo-6/products/product-5-1.jpg" alt="Product image" class="product-image" />
                                            <img src="assets/images/demos/demo-6/products/product-5-2.jpg" alt="Product image" class="product-image-hover" />
                                        </a>

                                        <div class="product-action-vertical">
                                            <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                        </div>   

                                        <div class="product-action">
                                            <a href="#" class="btn-product btn-cart"><span>add to cart</span></a>
                                        </div>   
                                    </figure>   

                                    <div class="product-body">
                                        <div class="product-cat">
                                            <a href="#">Clothing</a>
                                        </div>   
                                        <h3 class="product-title"><a href="product.html">Tie-detail top</a></h3>   
                                        <div class="product-price">
                                            <span class="new-price">Now $3.99</span>
                                            <span class="old-price">Was $6.99</span>
                                        </div>   
                                    </div>   
                                </div>   
                            </div>   

                            <div class="col-6 col-md-4 col-lg-3">
                                <div class="product product-7 text-center">
                                    <figure class="product-media">
                                        <a href="product.html">
                                            <img src="assets/images/demos/demo-6/products/product-6-1.jpg" alt="Product image" class="product-image" />
                                            <img src="assets/images/demos/demo-6/products/product-6-2.jpg" alt="Product image" class="product-image-hover" />
                                        </a>

                                        <div class="product-action-vertical">
                                            <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                        </div>   

                                        <div class="product-action">
                                            <a href="#" class="btn-product btn-cart"><span>add to cart</span></a>
                                        </div>   
                                    </figure>   

                                    <div class="product-body">
                                        <div class="product-cat">
                                            <a href="#">Shoes</a>
                                        </div>   
                                        <h3 class="product-title"><a href="product.html">Sandals</a></h3>   
                                        <div class="product-price">
                                            $12.99
                                        </div>   
                                    </div>   
                                </div>   
                            </div>   

                            <div class="col-6 col-md-4 col-lg-3">
                                <div class="product product-7 text-center">
                                    <figure class="product-media">
                                        <a href="product.html">
                                            <img src="assets/images/demos/demo-6/products/product-7-1.jpg" alt="Product image" class="product-image" />
                                            <img src="assets/images/demos/demo-6/products/product-7-2.jpg" alt="Product image" class="product-image-hover" />
                                        </a>

                                        <div class="product-action-vertical">
                                            <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                        </div>   

                                        <div class="product-action">
                                            <a href="#" class="btn-product btn-cart"><span>add to cart</span></a>
                                        </div>   
                                    </figure>   

                                    <div class="product-body">
                                        <div class="product-cat">
                                            <a href="#">Bags</a>
                                        </div>   
                                        <h3 class="product-title"><a href="product.html">Small bucket bag</a></h3>   
                                        <div class="product-price">
                                            $14.99
                                        </div>   

                                        <div class="product-nav product-nav-thumbs">
                                            <a href="#" class="active">
                                                <img src="assets/images/demos/demo-6/products/product-7-thumb.jpg" alt="product desc" />
                                            </a>
                                            <a href="#">
                                                <img src="assets/images/demos/demo-6/products/product-7-2-thumb.jpg" alt="product desc" />
                                            </a>
                                        </div>   
                                    </div>   
                                </div>   
                            </div>   

                            <div class="col-6 col-md-4 col-lg-3">
                                <div class="product product-7 text-center">
                                    <figure class="product-media">
                                        <a href="product.html">
                                            <img src="assets/images/demos/demo-6/products/product-8-1.jpg" alt="Product image" class="product-image" />
                                            <img src="assets/images/demos/demo-6/products/product-8-2.jpg" alt="Product image" class="product-image-hover" />
                                        </a>

                                        <div class="product-action-vertical">
                                            <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                        </div>   

                                        <div class="product-action">
                                            <a href="#" class="btn-product btn-cart"><span>add to cart</span></a>
                                        </div>   
                                    </figure>   

                                    <div class="product-body">
                                        <div class="product-cat">
                                            <a href="#">Clothing</a>
                                        </div>   
                                        <h3 class="product-title"><a href="product.html">Denim jacket</a></h3>   
                                        <div class="product-price">
                                            $34.99
                                        </div>   
                                    </div>   
                                </div>   
                            </div>   

                            <div class="col-6 col-md-4 col-lg-3">
                                <div class="product product-7 text-center">
                                    <figure class="product-media">
                                        <a href="product.html">
                                            <img src="assets/images/demos/demo-6/products/product-9-1.jpg" alt="Product image" class="product-image" />
                                            <img src="assets/images/demos/demo-6/products/product-9-2.jpg" alt="Product image" class="product-image-hover" />
                                        </a>

                                        <div class="product-action-vertical">
                                            <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                        </div>   

                                        <div class="product-action">
                                            <a href="#" class="btn-product btn-cart"><span>add to cart</span></a>
                                        </div>   
                                    </figure>   

                                    <div class="product-body">
                                        <div class="product-cat">
                                            <a href="#">Clothing</a>
                                        </div>   
                                        <h3 class="product-title"><a href="product.html">BShort wrap dress</a></h3>   
                                        <div class="product-price">
                                            $17.99
                                        </div>   
                                    </div>   
                                </div>   
                            </div>   

                            <div class="col-6 col-md-4 col-lg-3">
                                <div class="product product-7 text-center">
                                    <figure class="product-media">
                                        <a href="product.html">
                                            <img src="assets/images/demos/demo-6/products/product-10-1.jpg" alt="Product image" class="product-image" />
                                            <img src="assets/images/demos/demo-6/products/product-10-2.jpg" alt="Product image" class="product-image-hover" />
                                        </a>

                                        <div class="product-action-vertical">
                                            <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                        </div>   

                                        <div class="product-action">
                                            <a href="#" class="btn-product btn-cart"><span>add to cart</span></a>
                                        </div>   
                                    </figure>   

                                    <div class="product-body">
                                        <div class="product-cat">
                                            <a href="#">Clothing</a>
                                        </div>   
                                        <h3 class="product-title"><a href="product.html">Biker jacket</a></h3>   
                                        <div class="product-price">
                                            $34.99
                                        </div>   

                                        <div class="product-nav product-nav-thumbs">
                                            <a href="#" class="active">
                                                <img src="assets/images/demos/demo-6/products/product-10-thumb.jpg" alt="product desc" />
                                            </a>
                                            <a href="#">
                                                <img src="assets/images/demos/demo-6/products/product-10-2-thumb.jpg" alt="product desc" />
                                            </a>
                                        </div>   
                                    </div>   
                                </div>   
                            </div>   

                            <div class="col-6 col-md-4 col-lg-3">
                                <div class="product product-7 text-center">
                                    <figure class="product-media">
                                        <a href="product.html">
                                            <img src="assets/images/demos/demo-6/products/product-11-1.jpg" alt="Product image" class="product-image" />
                                            <img src="assets/images/demos/demo-6/products/product-11-2.jpg" alt="Product image" class="product-image-hover" />
                                        </a>

                                        <div class="product-action-vertical">
                                            <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                        </div>   

                                        <div class="product-action">
                                            <a href="#" class="btn-product btn-cart"><span>add to cart</span></a>
                                        </div>   
                                    </figure>   

                                    <div class="product-body">
                                        <div class="product-cat">
                                            <a href="#">Shoes</a>
                                        </div>   
                                        <h3 class="product-title"><a href="product.html">Loafers</a></h3>   
                                        <div class="product-price">
                                            $9.99
                                        </div>   
                                    </div>   
                                </div>   
                            </div>   

                            <div class="col-6 col-md-4 col-lg-3">
                                <div class="product product-7 text-center">
                                    <figure class="product-media">
                                        <span class="product-label label-sale">sale</span>
                                        <a href="product.html">
                                            <img src="assets/images/demos/demo-6/products/product-12-1.jpg" alt="Product image" class="product-image" />
                                            <img src="assets/images/demos/demo-6/products/product-12-2.jpg" alt="Product image" class="product-image-hover" />
                                        </a>

                                        <div class="product-action-vertical">
                                            <a href="#" class="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                        </div>   

                                        <div class="product-action">
                                            <a href="#" class="btn-product btn-cart"><span>add to cart</span></a>
                                        </div>   
                                    </figure>   

                                    <div class="product-body">
                                        <div class="product-cat">
                                            <a href="#">Clothing</a>
                                        </div>   
                                        <h3 class="product-title"><a href="product.html">Super Skinny High Jeggings</a></h3>   
                                        <div class="product-price">
                                            <span class="new-price">Now $12.99</span>
                                            <span class="old-price">Was $17.99</span>
                                        </div>   
                                    </div>   
                                </div>   
                            </div>   
                        </div>   
                    </div>

                    <div class="more-container text-center mt-2">
                        <a href="#" class="btn btn-outline-dark-2 btn-more"><span>show more</span></a>
                    </div>
                </div>   

                <div class="pb-3">
                    <div class="container brands pt-5 pt-lg-7 ">

                        <h2 class="title text-center mb-4">shop by brands</h2>   

                        <div class="owl-carousel owl-simple" data-toggle="owl" 
                            data-owl-options={{
                                "nav": false, 
                                "dots": false,
                                "margin": 30,
                                "loop": false,
                                "responsive": {
                                    "0": {
                                        "items":2
                                    },
                                    "420": {
                                        "items":3
                                    },
                                    "600": {
                                        "items":4
                                    },
                                    "900": {
                                        "items":5
                                    },
                                    "1024": {
                                        "items":6
                                    }
                                }
                            }}>
                            <a href="#" class="brand">
                                <img src="assets/images/brands/1.png" alt="Brand Name" />
                            </a>

                            <a href="#" class="brand">
                                <img src="assets/images/brands/2.png" alt="Brand Name" />
                            </a>

                            <a href="#" class="brand">
                                <img src="assets/images/brands/3.png" alt="Brand Name" />
                            </a>

                            <a href="#" class="brand">
                                <img src="assets/images/brands/4.png" alt="Brand Name" />
                            </a>

                            <a href="#" class="brand">
                                <img src="assets/images/brands/5.png" alt="Brand Name" />
                            </a>

                            <a href="#" class="brand">
                                <img src="assets/images/brands/6.png" alt="Brand Name" />
                            </a>

                            <a href="#" class="brand">
                                <img src="assets/images/brands/7.png" alt="Brand Name" />
                            </a>
                        </div>
                    </div>   

                    <div class="mb-5 mb-lg-7"></div>   

                    <div class="container newsletter">
                        <div class="row">
                            <div class="col-lg-6 banner-overlay-div">
                                <div class="banner banner-overlay">
                                    <a href="#">
                                        <img src="assets/images/demos/demo-6/banners/banner-3.jpg" alt="Banner" />
                                    </a>

                                    <div class="banner-content banner-content-center">
                                        <h4 class="banner-subtitle text-white"><a href="#">Limited time only.</a></h4>   
                                        <h3 class="banner-title text-white"><a href="#">End of Season<br />save 50% off</a></h3>  
                                        <a href="#" class="btn btn-outline-white banner-link underline">Shop Now</a>
                                    </div>  
                                </div>  
                            </div>   

                            <div class="col-lg-6 d-flex align-items-stretch subscribe-div">
                                <div class="cta cta-box">
                                    <div class="cta-content">
                                        <h3 class="cta-title">Subscribe To Our Newsletter</h3>   
                                        <p>Sign up now for <span class="primary-color">10% discount</span> on first order. Customise my news:</p>

                                        <form action="#">
                                            <input type="email" class="form-control" placeholder="Enter your Email Address" aria-label="Email Adress" required />
                                            <div class="text-center">
                                                <button class="btn btn-outline-dark-2" type="submit"><span>subscribe</span></button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>   
                        </div>   
                    </div>   
                </div>   

                <div class="mb-2"></div>   
                
                <div class="container">
                </div>   
                
                <div class="blog-posts mb-5">
                    <div class="container">
                        <h2 class="title text-center mb-4">From Our Blog</h2>   

                        <div class="owl-carousel owl-simple mb-3" data-toggle="owl" 
                            data-owl-options={{
                                "nav": false, 
                                "dots": true,
                                "items": 3,
                                "margin": 20,
                                "loop": false,
                                "responsive": {
                                    "0": {
                                        "items":1
                                    },
                                    "600": {
                                        "items":2
                                    },
                                    "992": {
                                        "items":3
                                    }
                                }
                            }}>
                            <article class="entry">
                                <figure class="entry-media">
                                    <a href="single.html">
                                        <img src="assets/images/demos/demo-6/blog/post-1.jpg" alt="image desc" />
                                    </a>
                                </figure>

                                <div class="entry-body text-center">
                                    <div class="entry-meta">
                                        <a href="#">Nov 22, 2018</a>, 1 Comments
                                    </div>

                                    <h3 class="entry-title">
                                        <a href="single.html">Sed adipiscing ornare.</a>
                                    </h3>

                                    <div class="entry-content">
                                        <a href="single.html" class="read-more">Read More</a>
                                    </div>
                                </div>
                            </article>

                            <article class="entry">
                                <figure class="entry-media">
                                    <a href="single.html">
                                        <img src="assets/images/demos/demo-6/blog/post-2.jpg" alt="image desc" />
                                    </a>
                                </figure>

                                <div class="entry-body text-center">
                                    <div class="entry-meta">
                                        <a href="#">Dec 12, 2018</a>, 0 Comments
                                    </div>

                                    <h3 class="entry-title">
                                        <a href="single.html">Fusce lacinia arcuet nulla.</a>
                                    </h3>

                                    <div class="entry-content">
                                        <a href="single.html" class="read-more">Read More</a>
                                    </div>
                                </div>
                            </article>

                            <article class="entry">
                                <figure class="entry-media">
                                    <a href="single.html">
                                        <img src="assets/images/demos/demo-6/blog/post-3.jpg" alt="image desc" />
                                    </a>
                                </figure>

                                <div class="entry-body text-center">
                                    <div class="entry-meta">
                                        <a href="#">Dec 19, 2018</a>, 2 Comments
                                    </div>

                                    <h3 class="entry-title">
                                        <a href="single.html">Quisque volutpat mattis eros.</a>
                                    </h3>

                                    <div class="entry-content">
                                        <a href="single.html" class="read-more">Read More</a>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>   
                </div>
            </main>
        </div>
     
    );
}

export default Home;