// rnfe
import AntDesign from '@expo/vector-icons/AntDesign';
import { ImageBackground, Text, View } from 'react-native';
import colors from 'tailwindcss/colors';

type Props = {
  product: {
    id: string;
    name: string;
    rating: number;
    price: string;
    image: string;
  };
};

const ProductCard = ({ product: { id, name, rating, price, image } }: Props) => {
  return (
    <View className="gap-4">
      {/* Image Container */}
      <View>
        <ImageBackground
          source={{ uri: image }}
          className="h-64 w-full items-end rounded-xl p-4"
          resizeMode="center">
          <View className="items-center justify-center rounded-full bg-white p-2">
            <AntDesign name="heart" size={18} color={colors.teal[800]} />
          </View>
        </ImageBackground>
      </View>
      {/* Name and rating */}
      <View className="flex-row justify-between">
        <Text className="text-xl">{name}</Text>
        {/* Star */}
        <View className="flex-row gap-4">
          <AntDesign name="star" size={24} color={colors.orange[400]} />
          <Text className="text-xl">{rating}</Text>
        </View>
      </View>
      {/* Price */}
      <Text className="text-xl">{price}</Text>
    </View>
  );
};

export default ProductCard;
