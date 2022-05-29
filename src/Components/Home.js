import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SingleShop from './SingleShop';

const Home = () => {
    const shops = useSelector((state) => state.shops?.value); 
    console.log(shops)
    
    
  return (
    <div className="mx-8">
    <section className="">
      <div className="flex w-full items-center justify-between mt-8 mb-2">
        <div className="dropdown dropdown-right md:hidden">
          <label tabIndex="0" className="btn text-[#79DAE8] bg-[#2155CD] text-sm px-4 py-2 rounded-md md:text-xl font-semibold">
            Filter
          </label>
          <ul
            tabIndex="0"
            className="dropdown-content menu p-4 shadow text-[#2155CD] bg- rounded-box bg-white "
          >
            <select className="select border border-[#79DAE8]  w-48 h-6 mb-2 text-[#2155CD]  bg-white">
            <option disabled selected>
              By Location
            </option>
            <option>Dhaka</option>
            <option>Delhi</option>
            <option>Mumbai</option>
            <option>Noida</option>
          </select>
          <select className="select  border border-[#79DAE8] w-48 h-6  text-[#2155CD]  bg-white">
            <option disabled selected>
              By Type
            </option>
            <option>Gorcary</option>
            <option>Mall </option>
            <option>Baker</option>
            <option>Bucher</option>
            </select>
            <button className="btn text-[#79DAE8] bg-[#2155CD] text-sm px-4 py-2 mt-2 rounded-md md:text-xl font-semibold">Apply Filters</button>
          </ul>
        </div>
        <form action="" className="justify-start items-end hidden md:flex">
          <h3 className="block text-[#2155CD] text-5xl font-medium mr-2">
            Filter:
          </h3>
          <select className="select  border border-[#79DAE8] w-48 h-6  text-[#2155CD]  bg-white mr-4">
            <option disabled selected>
              By Location
            </option>
            <option>Dhaka</option>
            <option>Delhi</option>
            <option>Mumbai</option>
            <option>Noida</option>
          </select>
          <select className="select  border border-[#79DAE8] w-48 h-6 font-medium mr-4  text-[#2155CD]  bg-white">
            <option disabled selected>
              By Type
            </option>
            <option>Gorcary</option>
            <option>Mall </option>
            <option>Baker</option>
            <option>Bucher</option>
          </select>
          <button className="btn text-[#79DAE8] bg-[#2155CD] text-sm px-4 py-2  rounded-md md:text-xl font-semibold">Apply Filters</button>
        </form>
        <Link to="/shops/add" className="btn text-[#79DAE8] bg-[#2155CD] text-sm px-4 py-2 rounded-md md:text-xl font-semibold">
          Add A new shop
        </Link>
      </div>
      <hr className="w-full border-2 border-[#2155CD]" />
      </section>
          <section className='mt-8 container mx-auto'>
          {
        shops.map(shop => <SingleShop shop={shop} key={ shop.id}/>)
      }
      </section>
    </div>
  )
}

export default Home