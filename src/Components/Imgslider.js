import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Api from "./Api";



let test = (val) =>{

  return(
  <Wrap>
  <a>
    <img src= {val.img} alt="" />
  </a>
</Wrap>
  )
}

let Imgslider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };



  return (
   



      <Carousel {...settings}>


        {Api.map(test)}
       
      </Carousel>
    
  );

};

const Carousel = styled(Slider)`
  padding-top: 80px;
  width:87%;
  min-width:500px;
  
  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 10;
    
    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;

    }
  }
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(189, 183, 183);
      
    }
      
      
  }
  li.slick-active button:before {
    color: white;
    
  }
  .slick-list {
    overflow: initial;
  }

  .slick-dots{
    bottom:0px;
    color:white;
    position:relative;
  }
  .slick-prev {
    left: -120px;
    top:50%;
    
  }

  .slick-next:before{
    font-size:40px;
  }

  .slick-prev:before{
    font-size:40px;
  }
   
    
  .slick-next {
    right: -120px;
    top:50%;
    
  }
`;

const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  a {
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
                rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;
    img {
      width: 100%;
      height: 100%;
    }
    &:hover {
      padding: 0;
      border: 4px solid rgba(249, 249, 249, 0.8);
      transition-duration: 300ms;
    }
  }
`;

export default Imgslider;
