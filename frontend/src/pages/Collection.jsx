import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import ProductItem from '../components/ProductItem';
import { Range } from 'react-range'; // Importando o componente Range da biblioteca react-range

const Collection = () => {

  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 300]); // Estado para o intervalo de preço
  const [sortType, setSortType] = useState('relavent');

  // Função para alternar categoria
  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value));
    } else {
      setCategory(prev => [...prev, e.target.value]);
    }
  };

  // Função para alternar subcategoria
  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value));
    } else {
      setSubCategory(prev => [...prev, e.target.value]);
    }
  };

  // Função para aplicar o filtro
  const applyFilter = () => {
    let productsCopy = products.slice();  // Faz uma cópia dos produtos

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
    }

    // Filtro de preço
    productsCopy = productsCopy.filter(item => item.price >= priceRange[0] && item.price <= priceRange[1]);

    // Aplicar ordenação (de acordo com o `sortType` após aplicar os filtros)
    switch (sortType) {
      case 'low-high':
        productsCopy = productsCopy.sort((a, b) => a.price - b.price);
        break;
      
      case 'high-low':
        productsCopy = productsCopy.sort((a, b) => b.price - a.price);
        break;
      
      default:
        break;  // Se for "relavent" ou qualquer outro valor, não aplicamos ordenação.
    }

    setFilterProducts(productsCopy);  // Atualiza a lista de produtos filtrados e ordenados
  };

  // Chama a função de filtro sempre que algum filtro mudar
  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch, priceRange, sortType]);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-20 border-t px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      {/* Filter Options */}
      <div className='min-w-60'>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-2xl font-bold flex items-center cursor-pointer gap-2'>
          Filters
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
        </p>

        {/* Category Filter */}
        <div className={`border rounded-3xl border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-bold'>Categories</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Men'} onChange={toggleCategory} /> Men
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Women'} onChange={toggleCategory} /> Women
            </p>
          </div>
        </div>

        {/* SubCategory Filter */}
        <div className={`border rounded-3xl border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-bold'>Type</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Topwear'} onChange={toggleSubCategory} /> Topwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Bottomwear'} onChange={toggleSubCategory} /> Bottomwear
            </p>
          </div>
        </div>

        {/* Price Range Filter */}
        <div className={`border rounded-3xl border-gray-300 pl-5 pr-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-bold'>Price</p>
          <div className='flex flex-col gap-2'>
            <Range
              step={1}
              min={0}
              max={300}
              values={priceRange}
              onChange={setPriceRange}
              renderTrack={({ props, children }) => (
                <div {...props} style={{ ...props.style, height: '6px', background: '#ddd' }}>
                  {children}
                </div>
              )}
              renderThumb={({ props }) => (
                <div {...props} style={{ ...props.style, height: '20px', width: '20px', borderRadius: '50%', backgroundColor: '#000000' }} />
              )}
            />
            <div className="flex justify-between text-xs">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>
        </div>

      </div>

      {/* Right Side */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <p className='font-bold text-3xl'>All collections</p>

          {/* Product Sort */}
          <select onChange={(e) => setSortType(e.target.value)} className='border-2 rounded-3xl border-gray-300 text-sm px-2'>
            <option value="relavent">Sort by: Relavent</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Map Products */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 gap-y-6'>
          {filterProducts.map((item, index) => (
            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
