import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>User Profile</Text>
      </View>
      <View style={styles.profileInfo}>
        <Image
          source={{ uri: "/path/to/profile-pic.jpg" }}
          style={styles.profilePic}
        />
        <View style={styles.details}>
          <Text style={styles.username}>Username</Text>
          <Text>Email: user@example.com</Text>
          <Text>Joined: January 1, 2020</Text>
        </View>
      </View>
      <View style={styles.jokesSection}>
        <Text style={styles.sectionTitle}>My Jokes</Text>
        {/* List of jokes will go here */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    fontFamily: "Arial",
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  profileInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  profilePic: {
    borderRadius: 50,
    width: 100,
    height: 100,
    marginRight: 20,
  },
  details: {
    flex: 1,
  },
  username: {
    fontSize: 20,
    fontWeight: "bold",
  },
  jokesSection: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Profile;
