import React, { useState } from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import image_1 from '../style/images2/8686f14a-51ad-4011-a2f8-0493fb8387f4.JPG';
import image_2 from '../style/images2/212c2968-7559-4060-a443-bd740e9f80c0.JPG';
import image_3 from '../style/images2/744cad67-3a2f-41a4-8f1c-6ff9d1260aab.JPG';
import image_4 from '../style/images2/d42c81fa-0949-4882-a80e-be8ada8197ba.JPG';
import image_5 from '../style/images2/02d7226a-e483-4091-bdda-e980a662d28d.JPG';
import image_6 from '../style/images2/6014f80f-7b13-47ce-9a42-404ed7166d1f.JPG';
import image_7 from '../style/images2/f2427a96-f6e9-404b-a7df-271af86bdc52.JPG';
import image_8 from '../style/images2/8d1929ab-bb95-4323-9526-5d9499968f34.JPG';
import image_9 from '../style/images2/9dabd6bf-73cc-4613-9298-684415cc89eb.JPG';
import image_10 from '../style/images2/2979f21e-2e36-4105-8124-27627ed40122.JPG';
import image_11 from '../style/images2/39b6bc43-584d-4ae0-b2c0-faebf333ed7f.JPG';
import image_12 from '../style/images2/45f082fc-028f-4e7e-8842-eb88475c7728.JPG';
import image_13 from '../style/images2/6755ceb0-d97d-4fb9-b31f-288de599575e.JPG';
import image_14 from '../style/images2/ba1329cc-567c-4d20-902d-ff33694b3e4f.JPG';
import image_15 from '../style/images2/752d9b16-41b5-4840-8d99-bcf8d078f6ba.JPG';
import image_16 from '../style/images2/a0f3e05d-ce24-4b11-b016-e7359c7f10c5.JPG';
import image_17 from '../style/images2/cdc59e80-17d4-4ff9-a11b-84c1211526a7.JPG';
import image_18 from '../style/images2/b09ff76b-0e17-4606-ab03-0204d2c87a4f.JPG';
import image_19 from '../style/images2/e8f98972-e241-4724-aff3-752bf6df1030.JPG';
import image_20 from '../style/images2/c209063c-0d2d-4eb2-8769-680d70b34926.JPG';
import image_21 from '../style/images2/9f769784-bb88-4f1f-ae10-c426c368ab43.JPG';
import image_22 from '../style/images2/a011b5e6-23cd-4c9f-884f-d40bbe726922.JPG';
import image_23 from '../style/images2/7ecdb19c-d2f6-464a-8274-aa9b93d14751.JPG';
import image_24 from '../style/images2/186e8b69-1870-45a2-9551-8ca8c976e251.JPG';
import image_25 from '../style/images2/cf472a53-f54c-433a-a2af-8d47f35d188e.JPG';
import image_26 from '../style/images2/1807f99b-d83a-42ce-9634-465a63c9a72e.JPG';
import image_27 from '../style/images2/b8ef3053-b9f4-4c40-8384-58199db2b769.JPG';
import image_28 from '../style/images2/805d5c64-1f15-412e-abd2-7d59a945abb0.JPG';
import image_29 from '../style/images2/39d8eedf-6a93-41f1-92c5-3a9e605f00c3.JPG';
import image_30 from '../style/images2/af48a528-50d8-4a0d-aa20-e92a91c1adce.JPG';
import image_31 from '../style/images2/750f4cd4-ca9f-4102-8eee-63177aab07b7.JPG';
import image_32 from '../style/images2/08557c87-1faf-4b5c-af12-352573b247fa.JPG';
import image_33 from '../style/images2/745aa33d-c541-4409-8db7-b30bfd908df8.JPG';
import image_34 from '../style/images2/0355a281-94d8-4144-893e-9b7e41d0984a.JPG';
import image_35 from '../style/images2/28825b29-3d91-45c3-b528-99c1238d8352.JPG';
import image_36 from '../style/images2/IMG_7996.jpeg';
import image_37 from '../style/images2/IMG_7789.jpeg';
import image_38 from '../style/images2/IMG_7786.jpeg';
import image_39 from '../style/images2/IMG_7772.jpeg';
import Footer from '../Footer';

const images = [
image_1 ,
image_2 ,
image_3 ,
image_4 ,
image_5 ,
image_6 ,
image_7 ,
image_8 ,
image_9 ,
image_10,
image_11,
image_12,
image_13,
image_14,
image_15,
image_16,
image_17,
image_18,
image_19,
image_20,
image_21,
image_22,
image_23,
image_24,
image_25,
image_26,
image_27,
image_28,
image_29,
image_30,
image_31,
image_32,
image_33,
image_34,
image_35,
image_36,
image_37,
image_38,
image_39,
]


const Service = () => {
  const [data, setData] = useState({img: '', i: 0})
  const viewImage = (img, i) => {
    setData({img,i})
  }
  const imgAction = (action) => {
    let i= data.i;
    if(!action){
      setData({img: '', i:0})
    }
  }
  return (
    <>
    {
      data.img &&
      <div style={{
        width: '100%',
        height: '100vh',
        background: 'black',
        position: 'fixed',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
      }}>
        <button onClick = {()=> imgAction()}style={{position: 'absolute', top: '10px', right: '10px'}}>X</button>
        <img src={data.img} style={{width: 'auto', maxWidth: '90', maxHeight: '90'}}/>
      </div>
    }
    <div style={{padding: '3px'}}>
    <ResponsiveMasonry
        columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
        >
          <Masonry gutter= '6px'>
            {images.map((image, i) => (
                <img
                  key = {i}
                  src = {image}
                  style = {{width : "100%", display: "block", cursor: 'pointer'}}
                  alt=''
                  onClick={()=> viewImage(image, i)}
                />
            ))}
          </Masonry>
        </ResponsiveMasonry>
        <Footer />
        </div>
        </>
  );
};

export default Service;