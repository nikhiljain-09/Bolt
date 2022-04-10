const productList = [
  {
    id: 1,
    type: 'Featured',
    title: 'Woman T-Shirt',
    manufacturer: 'Lotto.LTD',
    price: 55.0,
    image: require('../../assets/WomanT-Shirt.png'),
  },
  {
    id: 2,
    type: 'Featured',
    title: 'Man T-Shirt',
    manufacturer: 'Lotto.LTD',
    price: 34.0,
    image: require('../../assets/ManT-Shirt.png'),
  },
  {
    id: 3,
    title: 'Kids',
    type: 'Featured',
    manufacturer: 'Bata',
    price: 34.0,
    image: require('../../assets/kidsClothing.png'),
  },
  {
    id: 4,
    type: 'BestSell',
    title: 'Woman T-Shirt',
    manufacturer: 'Lotto.LTD',
    price: 55.0,
    image: require('../../assets/womantshirt.png'),
  },
  {
    id: 5,
    title: 'Man T-Shirt',
    manufacturer: 'Bata',
    type: 'BestSell',
    price: 34.0,
    image: require('../../assets/mantshirt.png'),
  },
  {
    id: 6,
    title: 'Others',
    type: 'BestSell',
    manufacturer: 'Bata',
    price: 34.0,
    image: require('../../assets/common.png'),
  },
];

const categories = [
  {
    title: 'Woman',
    image: require('../../assets/woman.png'),
  },
  {
    title: 'Man',
    image: require('../../assets/man.png'),
  },
  {
    title: 'Kids',
    image: require('../../assets/kids.png'),
  },
];

export {productList, categories};
