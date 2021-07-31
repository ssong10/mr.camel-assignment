const BASE_URL = '/asset';

export const fetchProduct = async () => {
  try{
    const respose = await fetch(`${BASE_URL}/product.json`);
    const products = await respose.json();
  
    return products.map((product,index)=> ({id:index+1, ...product}) );
  }
  catch (err) {
    console.error(err)
  }
}