import { getRatings } from "@/utils/async-storage";
import { FontAwesome } from "@expo/vector-icons";
import { useFocusEffect } from "expo-router";
import React, { useCallback, useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const History = () => {
  const [ratingsList, setRatingsList] = useState<number[]>([]);
  const [totalRatings, setTotalRatings] = useState<number>(0);

  const fetchRatings = async () => {
    const ratings = await getRatings("ratings");

    let totalStars = 0;

    if (ratings) {
      setRatingsList(ratings);
      totalStars = ratings.reduce((acc, rating) => acc + rating, 0);
      setTotalRatings(totalStars);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchRatings();
    }, []) // Dependencies should be empty to fetch whenever the screen gains focus
  );

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.ratingText}>Ratings </Text>

        <Text>
          Total: {totalRatings}/{ratingsList.length * 5}
        </Text>
      </View>
      {ratingsList.map((rating, index) => (
        <View key={index} style={styles.ratingContainer}>
          <View style={{ flexDirection: "row" }}>
            {[1, 2, 3, 4, 5].map((star) => (
              <TouchableOpacity key={star}>
                <FontAwesome
                  name={star <= rating ? "star" : "star-o"}
                  size={32}
                  color="#fe7d55"
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  ratingContainer: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  ratingText: {
    fontWeight: "bold",
    fontSize: 24,
    color: "#333",
    marginBottom: 10,
  },
});
export default History;
