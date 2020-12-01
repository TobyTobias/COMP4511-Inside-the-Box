// https://www.jsparling.com/using-hooks-and-context-with-sqlite-for-expo-in-react-native/
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("db.db");

const getBoxes = (setBoxFunc) => {
  console.log('getBoxes');
  db.transaction(
    (tx) => {
      tx.executeSql("select * from boxes", [], (_, { rows: { _array } }) => {
        setBoxFunc(_array);
      });
    },
    (t, error) => {
      console.log("db error load users");
      console.log(error);
    },
    (_t, _success) => {
      console.log("loaded boxes: " + _success);
    }
  );
};

const dropDatabaseTablesAsync = async () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "drop table if exists boxes",
        [],
        (_, result) => {
          resolve(result);
        },
        (_, error) => {
          console.log("error dropping boxes table");
          reject(error);
        }
      );
    });
  });
};

const setupDatabaseAsync = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          "create table if not exists boxes (id integer primary key not null, name text, description text, image_path text, price text);"
        );
      },
      (_, error) => {
        console.log("db error creating tables");
        console.log(error);
        reject(error);
      },
      (_, success) => {
        resolve(success);
      }
    );
  });
};

const setupUsersAsync = async () => {
  return new Promise((resolve, _reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql('insert into boxes (id, name, description, image_path, price) values (1, \'Succulent for beginners\', \'Succulent bulk starter kit of 6 cuttings, perfect for succulent beginners or collectors. All cuttings are made fresh from healthy, well established outdoor plants.\', \'/assets/images/succulent1.png\', 32),' + 
          '(2, \'Knitting for beginners\', \'Stitching a scarf for your cosy winter wardrobe? Get all wrapped up with this super snuggly beginner knitting kit.\', \'/assets/images/knitting1.png\', 47),' +
          '(3, \'Advaned Yoga\', \'This one simple kit can jump-start any yoga practice\', \'/assets/images/yoga1.png\', 14),' +
          '(4, \'Soccer Tricks\', \'This kit lets you get fancy with soccer tricks\', \'/assets/images/soccer1.png\', 35),' +
          '(5, \'Rock Painting\', \'Get starts with artist rock painting\', \'/assets/images/rockpainting1.png\', 18)');
      },
      (t, error) => {
        console.log("db error insertBoxes");
        console.log(error);
        resolve();
      },
      (t, success) => {
        console.log("db insertBoxes success");
        resolve(success);
      }
    );
  });
};

export const database = {
  getBoxes,
  setupDatabaseAsync,
  setupUsersAsync,
  dropDatabaseTablesAsync,
};
