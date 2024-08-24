import Lottie from 'lottie-react';
import animationData from '../assets/loader.json';

function MyAnimation() {
    return (
        <Lottie 
          animationData={animationData} 
          loop={true} 
          autoplay={true} 
          style={{ height: 100, width: 100 }} 
        />
      );}

export default MyAnimation;
