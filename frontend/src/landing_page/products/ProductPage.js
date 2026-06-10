import React from 'react';
import Hero from './Hero';
import Leftimage from './Leftimage';
import Rightimage from './Rightimage';
import Navbar from '../Navbar';
import OpenAccount from '../OpenAccount';
import Footer from '../Footer';
import Universe from "./Universe";

function Productpage() {
    return ( 
        <>
       
        <Hero/>
        <hr />
        < Leftimage imageURL="media/kite.png" productName="Kite"   productDescription={
    <>
      Our ultra-fast flagship trading platform with
      <br />
      streaming market data, advanced charts, an <br /> elegant UI, and more.
      Enjoy the Kite  <br /> experience seamlessly on your Android and <br /> iOS devices.
    </>
  }
  tryDemo="#"
  tryDemoText="Try demo" learnMore="#" googlePlay="#" appStore="#"/>
 <Rightimage
  imageURL="media/console.png"
  productName="Console"
  productDescription={
    <>
      The central dashboard for your Zerodha
      <br />
      account. Gain insights into your trades and
      <br />
      investments with in-depth reports and
      <br />
      visualisations.
    </>
  }
  linkText="Learn more"
  linkURL="#"
/>
  
  < Leftimage imageURL="media/coin.png" productName="Coin"   productDescription={
    <>
      Buy direct mutual funds online, commission <br/>-free, delivered directly to your Demat<br/> account. Enjoy the investment experience<br/> on your Android and iOS devices.


    </>
  }
  tryDemo="#"
  tryDemoText="Coin"  learnMore="" googlePlay="#" appStore="#"/>
  <Rightimage
  imageURL="media/kiteconnect.png"
  productName="Kite Connect API"
  productDescription={
    <>
      Build powerful trading platforms and
      <br />
      experiences with our super simple
      <br />
      HTTP/JSON APIs. If you are a startup, build
      <br />
      your investment app and showcase it to our
      <br />
      clientbase.
    </>
  }
  linkText="Kite Connect"
  linkURL="#"
/>
   < Leftimage imageURL="media/varsity-products.svg" productName="Varsity mobile"   productDescription={
    <>
      An easy to grasp, collection of stock market
      <br />
      lessons with in-depth coverage and <br /> illustrations. Content is broken down into  <br /> bite-size cards to help you learn on the go.
      
    </>
  }
  imageStyle={{ marginLeft: "120px" }}
  tryDemo="#"
  tryDemoText="Try demo" learnMore="#" googlePlay="#" appStore="#"
 />
 <p className='text-center fs-4 mt-5 text-muted'style={{ marginBottom: "120px" }}>
  Want to know more about our technology stack? Check out the <a href='Zerodha.tech'>Zerodha.tech</a> blog.
 </p>

 
      
        <Universe/>
        
        

        </>
     );
}
export default Productpage;