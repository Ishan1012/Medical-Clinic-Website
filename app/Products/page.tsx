import React from "react";
export class CreateProducts {
    title: string;
    price: string;
    color: string;
    img: string;
}

export default function Products() {
    let products = [
        {
            "id": 0,
            "title": "T-Shirt",
            "price": "$100",
            "color": "white",
            "img": "img2.jpg"
        },
        {
            "id": 1,
            "title": "T-Shirt",
            "price": "$100",
            "color": "white",
            "img": "img2.jpg"
        },
        {
            "id": 2,
            "title": "T-Shirt",
            "price": "$100",
            "color": "white",
            "img": "img2.jpg"
        },
        {
            "id": 3,
            "title": "T-Shirt",
            "price": "$100",
            "color": "white",
            "img": "img2.jpg"
        },
        {
            "id": 4,
            "title": "T-Shirt",
            "price": "$100",
            "color": "white",
            "img": "img2.jpg"
        },
        {
            "id": 5,
            "title": "T-Shirt",
            "price": "$100",
            "color": "white",
            "img": "img2.jpg"
        },
        {
            "id": 6,
            "title": "T-Shirt",
            "price": "$100",
            "color": "white",
            "img": "img2.jpg"
        },
        {
            "id": 7,
            "title": "T-Shirt",
            "price": "$100",
            "color": "white",
            "img": "img2.jpg"
        },
        {
            "id": 8,
            "title": "T-Shirt",
            "price": "$100",
            "color": "white",
            "img": "img2.jpg"
        },
        {
            "id": 9,
            "title": "T-Shirt",
            "price": "$100",
            "color": "white",
            "img": "img2.jpg"
        },
        {
            "id": 10,
            "title": "T-Shirt",
            "price": "$100",
            "color": "white",
            "img": "img2.jpg"
        },
        {
            "id": 11,
            "title": "T-Shirt",
            "price": "$100",
            "color": "white",
            "img": "img2.jpg"
        },
        {
            "id": 12,
            "title": "T-Shirt",
            "price": "$100",
            "color": "white",
            "img": "img2.jpg"
        },
        {
            "id": 13,
            "title": "T-Shirt",
            "price": "$100",
            "color": "white",
            "img": "img2.jpg"
        },
        {
            "id": 14,
            "title": "T-Shirt",
            "price": "$100",
            "color": "white",
            "img": "img2.jpg"
        },
    ];
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-[3rem] text-center font-bold tracking-tight text-gray-900 pb-10">Products</h2>
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {
                        products.map((items) => (

                            <div key={items.id} className="group relative">
                                <img src="img2.jpg" alt="Front of men&#039;s Basic Tee in black." className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"></img>
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-sm text-gray-700">
                                            <a href="#">
                                                <span aria-hidden="true" className="absolute inset-0"></span>
                                                {items.title}
                                            </a>
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">{items.color}</p>
                                    </div>
                                    <p className="text-sm font-medium text-gray-900">{items.price}</p>
                                </div>
                                {/* <!-- More products... --> */}
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>

    );
}