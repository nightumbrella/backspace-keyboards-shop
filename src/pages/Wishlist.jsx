import React from 'react'
import { UseWishList } from '../redux/WishListSlice'

const Wishlist = () => {
    const {wishListKeyboards,wishListSwitches} =UseWishList()
    console.log(
        wishListKeyboards,
        wishListSwitches
    )
  return (
    <div className='grid grid-cols-6 gap-3'>
        {
            wishListKeyboards.map(keyboard => (
                <div className='border relative h-[310px]'>
                    <img src={keyboard.thumbnail} alt="images" className='h-[200px] w-full object-cover' />
                    {/* this data is fetch from the API */}
                    <div>
                        <select name="" id="" className='w-full border-y mb-1 py-1'>
                            <option value="">{keyboard.color}</option>
                        </select>
                        <select name="" id="" className='w-full'>
                            <option value="">{keyboard.switch_type}</option>
                        </select>
                    </div>
                    {/* this data is fetch from the API */}
                    <button  className='w-full absolute bottom-0 bg-[#333] rounded-sm text-white py-1'>Add to Cart</button>
                </div>
            ))
        }
        {
            wishListSwitches.map(switches => (
                <div className='border relative'>
                    <img src={switches.thumbnail} alt="images" className='h-[200px] w-full object-cover' />
                        <button className='w-full absolute bottom-0 bg-[#333] rounded-sm text-white py-1'>Add to Cart</button>
                </div>
            ))
        }
    </div>
  )
}

export default Wishlist