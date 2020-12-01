import { useState, useEffect } from "react";

// use nanoid instead of deprecated shortid
import 'react-native-get-random-values'
import { nanoid  } from "nanoid";

import AsyncStorage from "@react-native-community/async-storage";

export interface IFriend {
  id: string,
  first_name: string,
  last_name: string,
  email: string
};

export const useFriends = () => {
  // https://www.carlrippon.com/typed-usestate-with-typescript/
  // https://stackoverflow.com/questions/56918950/displaying-an-array-received-from-usestate-hook-with-typescript
  const [friends, setFriends] = useState(<IFriend[] | []>([]));
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

  const addFriend = (first_name) => {
    const newFriend = <IFriend>{ id: nanoid(), first_name: first_name };
    setFriends([newFriend, ...friends]);
  };
  
  const removeFriend = (friend) => {
    setFriends(friends.filter(_friend => _friend != friend));
  };

  return { friends, addFriend, removeFriend };
};
