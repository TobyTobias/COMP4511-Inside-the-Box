import { useState, useEffect } from "react";

// use nanoid instead of deprecated shortid
import 'react-native-get-random-values'
import { nanoid  } from "nanoid";

import AsyncStorage from "@react-native-community/async-storage";

export const useFriends = () => {
  const [friends, setFriends] = useState([{id: 0, firstName: ""}]);
  const loadFriends = async () => {
    const friendData = await AsyncStorage.getItem(
      "@FriendListStore:Friends"
    );
    if (friendData) {
      const friends = JSON.parse(friendData);
      console.log("friends: " + JSON.stringify(friends));
      setFriends(friends);
    }
  };

  useEffect(() => {
    if (friends.length) return;
    loadFriends();
  }, []);

  useEffect(() => {
    console.log("friends: " + JSON.stringify(friends));
    AsyncStorage.setItem(
      "@FriendListStore:Friends",
      JSON.stringify(friends)
    );
  }, [friends]);

  const addFriend = (firstName) => {
    const newFriend = { id: nanoid(), firstName: firstName };
    setFriends([newFriend, ...friends]);
  };
  
  const removeFriend = (friend) => {
    setFriends(friends.filter(_friend => _friend != friend));
  };

  return { friends, addFriend, removeFriend };
};