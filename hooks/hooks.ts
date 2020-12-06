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

export interface IUser {
  id: string,
  first_name: string,
  last_name: string,
  email: string,
  password: string
};

export const useFriends = () => {
  // https://www.carlrippon.com/typed-usestate-with-typescript/
  // https://stackoverflow.com/questions/56918950/displaying-an-array-received-from-usestate-hook-with-typescript
  const [friends, setFriends] = useState(<IFriend[] | []>([]));
  const loadFriends = async () => {
    const friendData = await AsyncStorage.getItem(
      "@InsideTheBoxStore:Friends"
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
      "@InsideTheBoxStore:Friends",
      JSON.stringify(friends)
    );
  }, [friends]);

  const addFriend = (first_name = "") => {
    const newFriend = <IFriend>{ id: nanoid(), first_name: first_name };
    setFriends([newFriend, ...friends]);
  };
  
  const removeFriend = (friend = <IFriend>({})) => {
    setFriends(friends.filter(_friend => _friend != friend));
  };

  return { friends, addFriend, removeFriend };
};

export const useUser = () => {
  const [registeredUsers, setUsers] = useState(<IUser[] | []>([]));

  const loadUsers = async () => {
    const userData = await AsyncStorage.getItem(
      "@InsideTheBoxStore:RegisteredUsers"
    );
    if (userData) {
      const registeredUsers = JSON.parse(userData);
      console.log("loadUsers registeredUsers: " + JSON.stringify(registeredUsers));
      setUsers(registeredUsers);
    }
  };

  useEffect(() => {
    if (registeredUsers.length) return;
    loadUsers();
  }, []);

  useEffect(() => {
    console.log("AsyncStorage.setItem registeredUsers: " + JSON.stringify(registeredUsers));
    AsyncStorage.setItem(
      "@InsideTheBoxStore:RegisteredUsers",
      JSON.stringify(registeredUsers)
    );
  }, [registeredUsers]);
  
  const registerUser = (first_name = "", last_name = "", email = "", password = "") => {
    const newUser = <IUser>{ id: nanoid(), first_name: first_name, last_name: last_name, email: email, password: password };
    // overwrite with new user
    setUsers([newUser]);
  };
  
  // const logoutUser = (registeredUser) => {
  //   // can do other stuff here if needed?
  //   setUser(<IUser>({}));
  // };

  return { registeredUsers, registerUser };
}
