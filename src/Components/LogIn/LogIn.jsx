import React from 'react'
import logInImage from '../../assets/Image.png'

export default function LogIn() {
    return (<>


        <div className="container mx-auto w-[90%] my-8">

            <div className="login flex">
                <div className="loginform w-3/4 pt-[88px] pe-[90px] pb-[127px] ps-[88px] ">
                    <div className="loginDetailes">
                        <div className="loginText mb-8">
                            <h2 className='text-[32px] font-medium p-0 '>Welcome to Design Community</h2>
                            <p>Already have an ccount? <span className='underline '>Log in</span>  </p>
                        </div>
                        <form className=" mx-auto">
                            <div className="mb-8">
                                <label htmlFor="email" className="block mb-2 font-normal text-[16px] text-[#666666] dark:text-white">Email</label>
                                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>
                            <div className="mb-8">
                                <label htmlFor="Name" className="block mb-2 font-normal text-[16px] text-[#666666] dark:text-white">Username</label>
                                <input type="text" id="Name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>
                            <div className="mb-8">
                                <div className="passwordLabel flex justify-between">
                                    <label htmlFor="password" className="block mb-2 font-normal text-[16px] text-[#666666] dark:text-white">Password</label>
                                    <div className="lableIcon flex items-center cursor-pointer text-[#666666]">
                                        <i className="fa-solid fa-eye-slash"></i>
                                        <p className='ms-2'>Hide</p>
                                    </div>

                                </div>
                                <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

                                <ul className='flex list-disc flex-wrap ms-5'>
                                    <li className='me-[18px] text-[#666666] p-2 w-[30%]'>Use 8 or more characters</li>
                                    <li className='me-[18px] text-[#666666] p-2 w-[30%]'>One Uppercase character</li>
                                    <li className='me-[18px] text-[#666666] p-2 w-[30%]'>One lowercase character</li>
                                    <li className='me-[18px] text-[#666666] p-2 w-[30%]'>One special character</li>
                                    <li className='me-[18px] text-[#666666] p-2 w-[30%]'>One number</li>


                                </ul>


                            </div>
                        </form>

                        <div className="flex items-center mb-8">
                            <input defaultChecked id="checked-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-black focus:shadow-none focus:ring-transparent  rounded    " />
                            <label htmlFor="checked-checkbox" className="ms-2 text-sm font-medium text-[#333333] dark:text-gray-300">I want to receive emails about the product, feature updates, events, and marketing promotions.</label>
                        </div>

                    </div>
                    <p className='mb-8'>By creating an account, you agree to the <span className='underline '>Terms of use</span> and <span className='underline '>Privacy Policy.</span> </p>

                    <button type="button" class="text-white bg-slate-500 hover:bg-slate-500 focus:ring-4 focus:ring-bg-slate-500 font-medium text-sm px-5 py-2.5 me-2 mb-2 dark:bg-slate-500 dark:hover:bg-slate-500 rounded-2xl focus:outline-none dark:focus:ring-bg-slate-500">Create an ccount</button>
                    <p>Already have an ccount? <span className='underline '>Log in</span>  </p>
                </div>
                <div className="loginImage  w-[597px] ">
                    <img className='w-full ' src={logInImage} alt="login" />
                </div>

            </div>
        </div>

    </>

    )
}
