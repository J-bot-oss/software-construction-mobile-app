import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [cart, setCart] = useState([]);
  const [selectedJuice, setSelectedJuice] = useState(null);

  const juices = [
    {
      id: 1,
      name: 'Orange Juice',
      price: 4.99,
      description: 'Freshly squeezed orange juice',
      emoji: '🍊',
      color: '#FFA500',
    },
    {
      id: 2,
      name: 'Apple Juice',
      price: 4.49,
      description: 'Crisp and refreshing apple juice',
      emoji: '🍎',
      color: '#DC143C',
    },
    {
      id: 3,
      name: 'Mango Juice',
      price: 5.49,
      description: 'Tropical mango juice',
      emoji: '🥭',
      color: '#FFB347',
    },
    {
      id: 4,
      name: 'Watermelon Juice',
      price: 4.99,
      description: 'Sweet watermelon juice',
      emoji: '🍉',
      color: '#FF6B6B',
    },
    {
      id: 5,
      name: 'Pineapple Juice',
      price: 5.29,
      description: 'Tangy pineapple juice',
      emoji: '🍍',
      color: '#FFD700',
    },
    {
      id: 6,
      name: 'Grape Juice',
      price: 4.79,
      description: 'Rich grape juice',
      emoji: '🍇',
      color: '#9370DB',
    },
  ];

  const addToCart = (juice) => {
    setCart([...cart, juice]);
    setSelectedJuice(juice);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  const clearCart = () => {
    setCart([]);
    setSelectedJuice(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>🍹 Fresh Juice Bar</Text>
        <Text style={styles.headerSubtitle}>Healthy & Delicious</Text>
      </View>

      {/* Juice Menu */}
      <ScrollView style={styles.menuContainer}>
        <Text style={styles.sectionTitle}>Our Fresh Juices</Text>
        {juices.map((juice) => (
          <TouchableOpacity
            key={juice.id}
            style={[styles.juiceCard, { borderLeftColor: juice.color }]}
            onPress={() => addToCart(juice)}
          >
            <View style={styles.juiceInfo}>
              <Text style={styles.juiceEmoji}>{juice.emoji}</Text>
              <View style={styles.juiceDetails}>
                <Text style={styles.juiceName}>{juice.name}</Text>
                <Text style={styles.juiceDescription}>{juice.description}</Text>
              </View>
            </View>
            <View style={styles.juicePrice}>
              <Text style={styles.priceText}>${juice.price}</Text>
              <TouchableOpacity 
                style={styles.addButton}
                onPress={() => addToCart(juice)}
              >
                <Text style={styles.addButtonText}>+</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Cart Summary */}
      {cart.length > 0 && (
        <View style={styles.cartContainer}>
          <View style={styles.cartHeader}>
            <Text style={styles.cartTitle}>
              🛒 Cart ({cart.length} {cart.length === 1 ? 'item' : 'items'})
            </Text>
            <TouchableOpacity onPress={clearCart}>
              <Text style={styles.clearButton}>Clear</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.cartItems}>
            {cart.map((item, index) => (
              <Text key={index} style={styles.cartItem}>
                {item.emoji} {item.name} - ${item.price}
              </Text>
            ))}
          </View>
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Total: ${getTotalPrice()}</Text>
            <TouchableOpacity style={styles.checkoutButton}>
              <Text style={styles.checkoutButtonText}>Checkout</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#FF6B6B',
    padding: 20,
    paddingTop: 10,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFF',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#FFF',
    opacity: 0.9,
    marginTop: 5,
  },
  menuContainer: {
    flex: 1,
    padding: 15,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  juiceCard: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 15,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderLeftWidth: 4,
  },
  juiceInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  juiceEmoji: {
    fontSize: 40,
    marginRight: 15,
  },
  juiceDetails: {
    flex: 1,
  },
  juiceName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  juiceDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  juicePrice: {
    alignItems: 'center',
    marginLeft: 10,
  },
  priceText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF6B6B',
    marginBottom: 8,
  },
  addButton: {
    backgroundColor: '#4CAF50',
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  cartContainer: {
    backgroundColor: '#FFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  cartHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  cartTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  clearButton: {
    color: '#FF6B6B',
    fontSize: 16,
    fontWeight: '600',
  },
  cartItems: {
    maxHeight: 120,
    marginBottom: 15,
  },
  cartItem: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    paddingTop: 15,
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  checkoutButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  checkoutButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
