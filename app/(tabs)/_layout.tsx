import AntDesign from '@expo/vector-icons/AntDesign';
import { Tabs } from 'expo-router';
const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="Index"
        options={{
          title: 'Home',
          tabBarIcon: ({ size, color }) => <AntDesign name="home" size={size} color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="discover"
        options={{
          title: 'Discover',
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="appstore-o" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: 'Cart',
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="shoppingcart" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ size, color }) => <AntDesign name="user" size={size} color={color} />,
        }}
      />
    </Tabs>
  );
};

export default _layout;
