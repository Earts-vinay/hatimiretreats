import React from 'react'
import SearchBar from "./HomeContent/SearchBar";
import { Carousel, Button } from "react-bootstrap";

const Bookings = () => {
  const products = [
    {
      id: 1,
      name: 'Room Name/type',
      location: 'Maimoon villa',
      description:
        'Lorem Ipsum to po prostu fikcyjny tekst branży drukarskiej i składu. Lorem Ipsum to po prostu fikcyjny tekst branży drukarskiej i składu. ',
      categories: ['Jackets', 'Men', 'Shirts', 'T-shirt'],
      tags: ['mens', 'womens'],
      priceOld: 544,
      priceNew: 300.0,
      image: 'https://www.bootdey.com/image/550x380/FFB6C1/000000',
     
    },

    {
      id: 2,
      name: 'Room Name/type',
      location: 'Maimoon villa',
      description:
        'Lorem Ipsum to po prostu fikcyjny tekst branży drukarskiej i składu. Lorem Ipsum to po prostu fikcyjny tekst branży drukarskiej i składu. ',
      categories: ['Jackets', 'Men', 'Shirts', 'T-shirt'],
      tags: ['mens', 'womens'],
      priceOld: 544,
      priceNew: 300.0,
      image: 'https://www.bootdey.com/image/550x380/FFB6C1/000000',
     
    },
    // Add more products here if needed
  ];
  return (
    <>
    <div>
      <SearchBar check="bookings" className="bookings"/>
      </div>
      <div>
      <div className="container bootdey ">
      {products.map((product) => (
        <div className="col-md-12 " key={product.id}>
          <section className="panel my-5">
            <div className="panel-body row">
              <div className="col-md-6">
                <div className="pro-img-details">
                  <img src={product.image} alt="" />
                </div>
               
              </div>
              <div className="col-md-6">
                <h4 className="pro-d-title text-gold">
                    {product.name} 
                </h4>
                <p className="text-white">{product.location}</p>
                <p className="text-gold">{product.description}</p>
                <div className="product_meta">
                  <span className="posted_in">
                    <strong>Categories:</strong>{' '}
                    {product.categories.map((category, index) => (
                      <span key={index}>
                        <a rel="tag" href="#/">
                          {category}
                        </a>
                        {index !== product.categories.length - 1 && ', '}
                      </span>
                    ))}
                  </span>
                  <span className="tagged_as">
                    <strong>Tags:</strong>{' '}
                    {product.tags.map((tag, index) => (
                      <span key={index}>
                        <a rel="tag" href="#/">
                          {tag}
                        </a>
                        {index !== product.tags.length - 1 && ', '}
                      </span>
                    ))}
                  </span>
                </div>
                <div className="m-bot15">
                  <strong>Price : </strong>{' '}
                  <span className="amount-old">${product.priceOld}</span>{' '}
                  <span className="pro-price">${product.priceNew}</span>
                </div>
                <div className="form-group">
                  <label>Quantity</label>
                  <input
                    type="quantity"
                    placeholder="1"
                    className="form-control quantity"
                  />
                </div>
                <p>
                  <button className="btn btn-round btn-danger" type="button">
                    <i className="fa fa-shopping-cart"></i> Add to Cart
                  </button>
                </p>
              </div>
            </div>
          </section>
        </div>
      ))}
    </div>
    </div>


    </>
  )
}

export default Bookings