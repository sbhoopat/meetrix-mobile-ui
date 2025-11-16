import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';

export default function TransportDetailScreen({ route, navigation }) {
  const { transport } = route.params;

  const handleBookPress = () => {
    navigation.navigate('TransportBooking', { transport });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="car" size={48} color={colors.primary} />
        <Text style={styles.title}>{transport.name || transport.title}</Text>
        <Text style={styles.type}>{transport.type || 'Transport Service'}</Text>
      </View>

      <View style={styles.content}>
        {transport.description && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Description</Text>
            <Text style={styles.description}>{transport.description}</Text>
          </View>
        )}

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Details</Text>
          <View style={styles.detailRow}>
            <Ionicons name="people" size={20} color={colors.primary} />
            <Text style={styles.detailText}>
              Capacity: {transport.capacity || 'N/A'}
            </Text>
          </View>
          {transport.price && (
            <View style={styles.detailRow}>
              <Ionicons name="cash" size={20} color={colors.primary} />
              <Text style={styles.detailText}>
                Price: ${transport.price}
                {transport.priceUnit && ` / ${transport.priceUnit}`}
              </Text>
            </View>
          )}
          {transport.duration && (
            <View style={styles.detailRow}>
              <Ionicons name="time" size={20} color={colors.primary} />
              <Text style={styles.detailText}>
                Duration: {transport.duration}
              </Text>
            </View>
          )}
        </View>

        {transport.features && transport.features.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Features</Text>
            {transport.features.map((feature, index) => (
              <View key={index} style={styles.featureRow}>
                <Ionicons name="checkmark-circle" size={20} color={colors.success} />
                <Text style={styles.featureText}>{feature}</Text>
              </View>
            ))}
          </View>
        )}
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.bookButton}
          onPress={handleBookPress}
          activeOpacity={0.8}
        >
          <Text style={styles.bookButtonText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    alignItems: 'center',
    padding: 24,
    backgroundColor: colors.surface,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
    marginTop: 16,
    textAlign: 'center',
  },
  type: {
    fontSize: 16,
    color: colors.textSecondary,
    marginTop: 8,
  },
  content: {
    padding: 16,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: colors.textSecondary,
    lineHeight: 24,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  detailText: {
    fontSize: 16,
    color: colors.text,
    marginLeft: 12,
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  featureText: {
    fontSize: 16,
    color: colors.text,
    marginLeft: 12,
  },
  footer: {
    padding: 16,
    paddingBottom: 32,
  },
  bookButton: {
    backgroundColor: colors.primary,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

