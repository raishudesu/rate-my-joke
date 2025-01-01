import { Pressable, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { getRatings, setRating } from "@/utils/async-storage";

export default function Index() {
  const [ratingValue, setRatingValue] = useState(0);

  const handleSubmitRating = async () => {
    const ratings = await getRatings("ratings");

    if (ratings) {
      const newRatings = [...ratings, ratingValue];
      await setRating("ratings", newRatings);
    } else {
      const newRatings = [ratingValue];

      await setRating("ratings", newRatings);
    }

    alert(`You rated: ${ratingValue}/5`);
  };

  const handleReset = () => {
    setRatingValue(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Rate my joke! 😂</Text>

      <View style={{ flexDirection: "row" }}>
        {[1, 2, 3, 4, 5].map((star) => (
          <TouchableOpacity key={star} onPress={() => setRatingValue(star)}>
            <FontAwesome
              name={star <= ratingValue ? "star" : "star-o"}
              size={32}
              color="gold"
            />
          </TouchableOpacity>
        ))}
      </View>
      <View>
        <Text>{ratingValue}/5</Text>
      </View>

      <Pressable style={styles.submitButton} onPress={handleSubmitRating}>
        <Text style={styles.submitButtonText}>Submit Rating</Text>
      </Pressable>

      <Pressable style={styles.resetButton} onPress={handleReset}>
        <Text style={styles.resetButtonText}>Reset</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  submitButton: {
    backgroundColor: "#fe7d55",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  resetButton: {
    backgroundColor: "#d5d5d5",
    padding: 10,
    borderRadius: 5,
  },
  submitButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  resetButtonText: {
    color: "d5d5d5",
    fontSize: 18,
    fontWeight: "bold",
  },
});
