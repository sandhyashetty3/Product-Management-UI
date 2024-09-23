// src/data/categories.js
export const categories = [
    {
      id: 1,
      name: 'Electronics',
      products: [],
      subcategories: [
        {
          id: 2,
          name: 'Mobile Phones',
          products: [],
          subcategories: [
            {
              id: 3,
              name: 'Smart Phones',
              products: [
                { id: 101, name: 'iPhone 13' },
                { id: 102, name: 'Samsung Galaxy S21' }
              ],
              subcategories: []
            }
          ],
        },
        {
          id: 3,
          name: 'Laptops',
          products: [
            { id: 103, name: 'MacBook Pro' },
            { id: 104, name: 'Dell XPS 13' }
          ],
          subcategories: [],
        },
      ],
    },
    {
      id: 4,
      name: 'Home Appliances',
      products: [],
      subcategories: [
        {
          id: 5,
          name: 'Refrigerators',
          products: [
            { id: 105, name: 'LG Smart Fridge' },
            { id: 106, name: 'Samsung Family Hub' }
          ],
          subcategories: [],
        },
      ],
    },
  ];
  