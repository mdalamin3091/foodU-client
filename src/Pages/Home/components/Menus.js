import React from 'react'
import { Link } from 'react-router-dom'

const Menus = () => {
    const categorys = ["Burger", "Kids Menus", "Burger", "Box Meals", "Chiken", "Sauces", "Drinks", "Pizza"]
    return (
        <div className="font-JosefinSans bg-white py-20">
            <div className="container relative">
                <div className='flex items-center justify-center'>
                    <Link className='btn-primary transition-all duration-100 z-20  absolute -top-[110px] right-auto' to="/menu">Menus</Link>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3'>
                    {
                        categorys.map((category, index) => (
                            <Link to="/shop" key={index} className='flex items-center justify-center flex-col cursor-pointer hover:text-primary transition-all duration-150 group'>
                                <div className='mx-auto'>
                                    <img className='group-hover:scale-125 transition-all duration-300 ease-in-out' src={require("../../../assets/images/category-img.png")} alt="category-img" />
                                </div>
                                <h2 className='uppercase text-sm font-bold text-center'>{category}</h2>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Menus