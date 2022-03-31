import React from "react";
import "./testimonials.css";
import AVT1 from "../../assets/avatar1.jpg";
import AVT2 from "../../assets/avatar2.jpg";
import AVT3 from "../../assets/avatar3.jpg";
import AVT4 from "../../assets/avatar4.jpg";
import {  Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container" 
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
      
     



        <SwiperSlide className="testimonials">
          <div className="client__avatar">
            <img src={AVT1} alt="Avatar One" />
          </div>
          <h5 className="client__name">Renato Plakaxhiu</h5>
            <small className="client__review">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
              libero repellat animi molestias, vero autem velit, odit cumque
              dignissimos harum commodi officia, saepe illo? Nisi ipsum nemo
              sequi voluptatibus amet.
            </small>
        </SwiperSlide>

        <SwiperSlide className="testimonials">
          <div className="client__avatar">
            <img src={AVT2} alt="Avatar One" />
          </div>
          <h5 className="client__name">Renato Plakaxhiu</h5>
            <small className="client__review">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
              libero repellat animi molestias, vero autem velit, odit cumque
              dignissimos harum commodi officia, saepe illo? Nisi ipsum nemo
              sequi voluptatibus amet.
            </small>
        </SwiperSlide>

        <SwiperSlide className="testimonials">
          <div className="client__avatar">
            <img src={AVT3} alt="Avatar One" />
          </div>
          <h5 className="client__name">Renato Plakaxhiu</h5>
            <small className="client__review">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
              libero repellat animi molestias, vero autem velit, odit cumque
              dignissimos harum commodi officia, saepe illo? Nisi ipsum nemo
              sequi voluptatibus amet.
            </small>
        </SwiperSlide>

        <SwiperSlide className="testimonials">
          <div className="client__avatar">
            <img src={AVT4} alt="Avatar One" />
          </div>
          <h5 className="client__name">Artur Korra</h5>
            <small className="client__review">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
              libero repellat animi molestias, vero autem velit, odit cumque
              dignissimos harum commodi officia, saepe illo? Nisi ipsum nemo
              sequi voluptatibus amet.
            </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
