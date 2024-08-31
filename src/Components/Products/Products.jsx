import React, { useState } from 'react'
import products from '../ProductData/ProductData'
import watch from '../../assets/work-3.jpg'


export default function Product() {


    const [newData, setNewData] = useState(products);


    function addData() {
        setNewData([...newData,
        {
            id: 6,
            img: watch,
            name: " watch",
            price: 19060,
            description: "The state of mind is lorem There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable",
            category: "Watches",
        },

        ])
    }


    return (<>
        <div className='text-center text-3xl'>Product</div>
        <div className='container mx-auto flex flex-wrap my-8 '>
            {newData.map((product) =>
                <div key={product.id} className='card p-3  w-1/3'>
                    <div className="imgCard w-full ">
                        <img src={product.img} className='w-full' alt={product.name} />
                    </div>
                    <h3 className='text-center font-bold '>{product.name}</h3>
                    <h2>{product.category}</h2>
                    <h2>{product.price}</h2>
                    <p>{product.description.split(' ').slice(0, 10).join(' ')}</p>

                </div>)


            }


        </div>
        <button onClick={() => addData()} className='bg-slate-500 text-white'>add product</button>


    </>

    )
}
