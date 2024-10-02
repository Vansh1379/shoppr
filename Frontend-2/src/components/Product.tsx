import { useState } from "react";
import nivia from "../assets/nvivia.png";

export const Product = () => {
    const [detail] = useState([
        {
            name: "NIVEA Vit E Body Milk Lotion - 5 In 1 Complete...",
            imgLink: nivia,
            quantity: "100ml", // Fixed typo here
            price: "391",
            originalPrice: "699", // Fixed typo here
            discounted: "44",
        },
        {
            name: "NIVEA Vit E Body Milk Lotion - 5 In 1 Complete...",
            imgLink: nivia,
            quantity: "100ml",
            price: "391",
            originalPrice: "699",
            discounted: "44",
        },
        {
            name: "NIVEA Vit E Body Milk Lotion - 5 In 1 Complete...",
            imgLink: nivia,
            quantity: "100ml",
            price: "391",
            originalPrice: "699",
            discounted: "44",
        },
        {
            name: "NIVEA Vit E Body Milk Lotion - 5 In 1 Complete...",
            imgLink: nivia,
            quantity: "100ml",
            price: "391",
            originalPrice: "699",
            discounted: "44",
        },
        {
            name: "NIVEA Vit E Body Milk Lotion - 5 In 1 Complete...",
            imgLink: nivia,
            quantity: "100ml",
            price: "391",
            originalPrice: "699",
            discounted: "44",
        },
    ]);

    return (
        <div className="flex">
            {detail.map((item, index) => (
                <div key={index} className="">
                    <div className="mr-10">
                        <img src={item.imgLink} alt="" className="h-60" />
                    </div>
                    <div className="mt-2">
                        <div className="w-48">{item.name}</div>
                        <div className="text-base font-normal text-gray-500 flex justify-start mt-1">
                            {item.quantity}
                        </div>
                        <div className="flex items-center mt-4 mr-4 ">
                            <div className="text-base font-medium pr-2">₹{item.price}</div>
                            <div className="text-sm font-normal text-gray-400 line-through pr-2">
                                ₹{item.originalPrice}
                            </div>
                            <div className="text-green-600">{item.discounted}%</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
