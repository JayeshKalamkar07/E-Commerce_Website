import bcrypt from 'bcryptjs';

const data = {
    users: [{

            name: 'jayesh',
            email: 'admin@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
            isSeller: true,
            seller: {
                name: 'Bajaj',
                logo: '/images/logo3.png',
                description: 'best seller',
                rating: 4.5,
                numReviews: 120,
            },
        },
        {
            name: 'John',
            email: 'user@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        },
    ],
    products: [{
            name: 'Front Fork',
            category: 'Forks',
            image: '/images/FrontFork.png',
            price: 3000,
            countInStock: 10,
            brand: 'TVS',
            rating: 4.2,
            numReviews: 10,
            description: 'This fork connects a front wheel and axle to its frame, typically via a yoke.',
        },
        {
            name: 'Shock Absorbers',
            category: 'Shock Absorbers',
            image: '/images/Shock_Absorbers.png',
            price: 2000,
            countInStock: 20,
            brand: 'Bajaj',
            rating: 4.8,
            numReviews: 10,
            description: 'this shock absobers are offfered by ENDURANCE brand. Endurance is the name that spells strength and the will to perform.',
        },
        {
            name: 'Motorcycle Chain Sprocket',
            category: 'Sprockets',
            image: '/images/Motorcycle-Chain-Sprocket.png',
            price: 300,
            countInStock: 5,
            brand: 'Bajaj',
            rating: 4.8,
            numReviews: 17,
            description: 'high quality product',
        },
        {
            name: 'TVS Engine',
            category: 'Engine',
            image: '/images/TVS_Engine.png',
            price: 45000,
            countInStock: 15,
            brand: 'TVS',
            rating: 4.5,
            numReviews: 14,
            description: 'high quality product',
        }
    ],
};
export default data;