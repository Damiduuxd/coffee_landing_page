import React from 'react'
import Separator from './Separator';
import MenuItems from './MenuItems';

const menuItems = [
    {
        imgSrc: "/assets/menu/coffee-1.png",
        name: "Espresso",
        description: "Rich and bold shot of coffee",
        price: "Rs.650",
    },
    {
        imgSrc: "/assets/menu/coffee-2.png",
        name: "Cappuccino",
        description: "Espresso with steamed milk and foam",
        price: "Rs.780",
    },
    {
        imgSrc: "/assets/menu/coffee-3.png",
        name: "Latte",
        description: "Espresso with steamed milk",
        price: "Rs.750",
    },
    {
        imgSrc: "/assets/menu/coffee-4.png",
        name: "Americano",
        description: "Espresso with hot water",
        price: "Rs.450",
    },
    {
        imgSrc: "/assets/menu/coffee-5.png",
        name: "Mocha",
        description: "Espresso with chocolate and steamed milk",
        price: "Rs.800",
    },
    {
        imgSrc: "/assets/menu/coffee-1.png",
        name: "Macchiantto",
        description: "Espresso with a dollop of foam",
        price: "Rs.550",
    },
    {
        imgSrc: "/assets/menu/coffee-2.png",
        name: "Flat White",
        description: "Espresso with microfoam milk",
        price: "Rs.880",
    },
    {
        imgSrc: "/assets/menu/coffee-3.png",
        name: "Iced Coffee",
        description: "Chilled coffee over ice",
        price: "Rs.490",
    },
    {
        imgSrc: "/assets/menu/coffee-4.png",
        name: "Affogato",
        description: "Espresso shot over vanilla ice cream",
        price: "Rs.1100",
    },
    {
        imgSrc: "/assets/menu/coffee-5.png",
        name: "Irish Coffee",
        description: "Coffee with Irish whiskey and cream",
        price: "Rs.980",
    },
];

const Menu = () => {
    return <section className='pt-12 pb-16 xl:pt-16 xl:pb-36'>
        <div className='container mx-auto'>
            <div className='flex flex-col gap-4 mb-12 xl:mb-24'>
                <h2 className='h2 text-center'>Our Menu</h2>
                <div className='mb-4'>
                    <Separator bg='accent' />
                </div>
                <p className='text-center max-w-[620px] mx-auto'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure in corrupti fugiat nobis eveniet, nulla veritatis delectus repellendus vel impedit accusamus deserunt perferendis illo labore laboriosam consequuntur sapiente non minus.
                </p>
            </div>
            {/*menu & btn */}
            <div className='flex flex-col items-center gap-12 xl:gap-24'>
                {/*menu grid*/}

                <div className='w-full grid grid-cols-1 xl:grid-cols-2 gap-y-8 gap-x-16 place-content-center'>
                    {menuItems.map((item, index) => {
                        const {name , description , price , imgSrc} = item;
                        return<MenuItems name={name}
                        description={description}
                        price={price}
                        imgSrc={imgSrc}
                        key={index}
                        />;
                    })}
                </div>

                <button className='btn'>View full menu</button>

            </div>
        </div>
    </section>;

};

export default Menu
