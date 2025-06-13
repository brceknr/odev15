// rnfe
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { db } from './src/services/FirebaseConfig';
import ProductCard from './src/components/ProductCard';

export type Product = {
  id: string;
  name: string;
  rating: number;
  price: string;
  image: string;
};

const Index = () => {
  // usss
  const [productList, setProductList] = useState<Product[]>([]);

  // uffs
  useEffect(() => {
    getDocs(collection(db, 'products')).then((snapshot) => {
      const list: Product[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        name: doc.data().name,
        rating: doc.data().rating,
        price: doc.data().price,
        image: doc.data().image,
      }));
      console.log(list);
      setProductList(list);
    });
  }, []);

  return (
    <FlatList
      data={productList}
      keyExtractor={(item) => item.id}
      numColumns={2}
      renderItem={({ item }) => <ProductCard product={item} />}
    />
  );
};

export default Index;
