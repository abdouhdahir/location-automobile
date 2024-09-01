import React, {useState,useEffect} from 'react'
import { Tabs, Button, Select } from 'antd';
import { TbCarSuv } from "react-icons/tb";
import { FaCarSide } from "react-icons/fa6";
import { LiaCarSideSolid } from "react-icons/lia";
import { FaCar } from "react-icons/fa";
import { MdElectricCar } from "react-icons/md";

const Hero = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
   <div>
    {
      windowWidth < 500 ? (
        <div className="flex flex-col gap-10 justify-center items-center text-white">
       <div className='flex flex-col gap-5 px-4 justify-center items-center'>
       <p className='text-2xl'>Trouvez des voitures à vendre et à louer près de chez vous</p>
        <h1 className='font-black text-7xl'>Trouvez la voiture parfaite</h1>
       </div>
        <div className='hero'>
        <Tabs className="px-4 py-2 rounded-lg w-full max-w-4xl flex justify-center items-center ">
          <Tabs.TabPane tab="Louer" key="1" className="bg-white rounded-lg">
            <SearchBarResponsive />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Acheter" key="2" className="bg-white rounded-lg">
            <SearchBarResponsive />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Vendre" key="3" className="bg-white rounded-lg">
            <SearchBarResponsive />
          </Tabs.TabPane>
        </Tabs>
        </div>
        <p>Ou explorez les modèles en vedette</p>
        <div className='flex flex-col gap-3 '>
          <div className='flex gap-1 items-center bg-white bg-opacity-5 p-2 rounded-lg'>
          <TbCarSuv />
          <p>SUV</p>
          </div>
          <div className='flex gap-1 items-center bg-white bg-opacity-5 p-2 rounded-lg'>
          <FaCarSide />
          <p>Berline</p>
          </div>
          <div className='flex gap-1 items-center bg-white bg-opacity-5 p-2 rounded-lg'>
          <LiaCarSideSolid />
          <p>Hatchback</p>
          </div>
          <div className='flex gap-1 items-center bg-white bg-opacity-5 p-2 rounded-lg'>
          <FaCar />
          <p>Coupé</p>
          </div>
          <div className='flex gap-1 items-center bg-white bg-opacity-5 p-2 rounded-lg'>
          <MdElectricCar />
          <p>Hybride</p>
          </div>
        </div>
      </div>
      ):
      ( 
      <div className="flex flex-col gap-10 items-center text-white">
      <p className='text-2xl'>Trouvez des voitures à vendre et à louer près de chez vous</p>
      <h1 className='font-black text-7xl'>Trouvez la voiture parfaite</h1>
      <div className='hero'>
      <Tabs className="px-4 py-2 rounded-lg w-full max-w-4xl flex justify-center items-center ">
        <Tabs.TabPane tab="Louer" key="1" className="bg-white rounded-lg">
          <SearchBar />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Acheter" key="2" className="bg-white rounded-lg">
          <SearchBar />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Vendre" key="3" className="bg-white rounded-lg">
          <SearchBar />
        </Tabs.TabPane>
      </Tabs>
      </div>
      <p>Ou explorez les modèles en vedette</p>
      <div className='flex gap-3 '>
        <div className='flex gap-1 items-center bg-white bg-opacity-5 p-2 rounded-lg'>
        <TbCarSuv />
        <p>SUV</p>
        </div>
        <div className='flex gap-1 items-center bg-white bg-opacity-5 p-2 rounded-lg'>
        <FaCarSide />
        <p>Berline</p>
        </div>
        <div className='flex gap-1 items-center bg-white bg-opacity-5 p-2 rounded-lg'>
        <LiaCarSideSolid />
        <p>Hatchback</p>
        </div>
        <div className='flex gap-1 items-center bg-white bg-opacity-5 p-2 rounded-lg'>
        <FaCar />
        <p>Coupé</p>
        </div>
        <div className='flex gap-1 items-center bg-white bg-opacity-5 p-2 rounded-lg'>
        <MdElectricCar />
        <p>Hybride</p>
        </div>
      </div>
    </div>)
    }
   </div>
  );
};



export default Hero;

const { Option } = Select;
const SearchBar = () => (
    <div className="bg-white flex justify-between gap-7 p-3 rounded-lg items-center w-full max-w-4xl">
      <div>
        <Select
          placeholder="Toutes marques"
          className="text-black placeholder:!text-black placeholder:font-black !border-none outline-none focus:!border-none focus:!outline-none pl-0"
        >
          <Option value="brand1">Marque 1</Option>
          <Option value="brand2">Marque 2</Option>
          <Option value="brand3">Marque 3</Option>
        </Select>
      </div>
      <div className="w-[2px] bg-gray-400 my-2"></div>
      <div>
        <Select
          placeholder="Choisissez vos modèles"
          className="text-black placeholder:text-black placeholder:font-bold border-none focus:!border-none focus:!outline-none pl-0"
        >
          <Option value="model1">Modèle 1</Option>
          <Option value="model2">Modèle 2</Option>
          <Option value="model3">Modèle 3</Option>
        </Select>
      </div>
      <div className="w-[2px] bg-gray-400 my-2"></div>
      <div>
        <Select
          placeholder="Choisissez vos prix"
          className="text-black placeholder:text-black placeholder:font-bold border-none focus:!border-none focus:!outline-none pl-0"
        >
          <Option value="price1">Prix 1</Option>
          <Option value="price2">Prix 2</Option>
          <Option value="price3">Prix 3</Option>
        </Select>
      </div>
      <div>
        <Button type="primary" className="h-11 font-bold">
          Rechercher des voitures
        </Button>
      </div>
    </div>
  );
  const SearchBarResponsive = () => (
    <div className="bg-white flex flex-col gap-7 p-3 rounded-lg items-center w-full max-w-4xl">
      <div className='w-full'>
        <Select
          placeholder="Choisissez vos marques"
          className="text-black placeholder:!text-black placeholder:font-black !border-none outline-none focus:!border-none focus:!outline-none pl-0"
        >
          <Option value="brand1">Marque 1</Option>
          <Option value="brand2">Marque 2</Option>
          <Option value="brand3">Marque 3</Option>
        </Select>
      </div>
      <div className="w-[2px] bg-gray-400 my-2"></div>
      <div className='w-full'>
        <Select
          placeholder="Choisissez vos modèles"
          className="text-black placeholder:text-black placeholder:font-bold border-none focus:!border-none focus:!outline-none pl-0"
        >
          <Option value="model1">Modèle 1</Option>
          <Option value="model2">Modèle 2</Option>
          <Option value="model3">Modèle 3</Option>
        </Select>
      </div>
      <div className="w-[2px] bg-gray-400 my-2"></div>
      <div className='w-full'>
        <Select
          placeholder="Choisissez vos prix"
          className="text-black placeholder:text-black placeholder:font-bold border-none focus:!border-none focus:!outline-none pl-0"
        >
          <Option value="price1">Prix 1</Option>
          <Option value="price2">Prix 2</Option>
          <Option value="price3">Prix 3</Option>
        </Select>
      </div>
      <div>
        <Button type="primary" className="h-11 font-bold">
          Rechercher des voitures
        </Button>
      </div>
    </div>
  );