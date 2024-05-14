// src/data/menuData.ts

interface MenuItem {
    id: number;
    name: string;
    description: string;
    price: number;
}

const menuData: MenuItem[] = [
    {
        id: 1,
        name: 'Hamburguesa sencilla',
        description: 'Incluye hamburguesa sencilla, papas y gaseosa',
        price: 10.99
    },
    {
        id: 2,
        name: 'Hamburguesa doble',
        description: 'Incluye hamburguesa doble y gaseosa',
        price: 12.99
    },
    // Agrega más elementos según sea necesario
];

export default menuData;
