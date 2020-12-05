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
          "create table if not exists boxes (id integer primary key not null, name text, description text, image_name text, price text);"
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

const setupBoxesAsync = async () => {
  return new Promise((resolve, _reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql('insert into boxes (id, name, description, image_name, price) values ' +
          '(1, \'Mini Succulent Set\', \'Mini succulent starter kit of 6 cuttings, perfect for succulent beginners or collectors. All cuttings are made fresh from healthy, well established outdoor plants.\', \'diysuccgarden.jpg\', 31),' + 
          '(2, \'Cosmo Kit\', \'Create the cosmopolitans of your dreams at home. Includes a mixer, dried orange slices, shaker and measuring cup. Just add your favourite alcohol for a big night in.\', \'cocktailmixer.jpg\', 80),' + 
          '(3, \'Spanish Paella Kit\', \'Packed with all the essentials. Entertain family and friends with ease as you learn to cook sumptuous Spanish paella using this complete kit, packed to perfection!\', \'paella.jpg\', 91),' + 
          '(4, \'Sushi at Home\', \'Create sushi magic at home in your own kitchen. The kit is packed with all the equipment and ingredients you need for a delectable sushi feast including a recipe booklet and cheat sheet, chopsticks, rolling mats, nori sheets, sauces, wasabi and ginger. Just add fresh fillings from salmon and tuna to avocado and cucumber.\', \'sushi1.jpg\', 50),' + 
          '(5, \'Whittling Kit\', \'Chip off the old block with this whittling kit. Whittling kit with essential wood carving tools, gloves, case and leather apron\', \'whittling.png\', 38),' + 
          '(6, \'Beginners Sewing and Knitting Kit\', \'Want the perfect scarf for your cosy winter wardrobe? Get all wrapped up with this super snuggly beginner knitting kit.\', \'KnitBeginners.jpg\', 25),' + 
          '(7, \'Advanced Yoga Kit\', \'This one simple kit can jump-start any yoga practice. Includes mat, block, essential reading and DVD.\', \'yoga2.jpg\', 54),' + 
          '(8, \'Soccer Tricks Kit\', \'Soccer tricks to impress your friends! This kit lets you get fancy with soccer tricks. Every soccer star starts somewhere!\', \'soccer2.jpg\', 35),' + 
          '(9, \'Rock Painting Kit\', \'Rock painting kit to create a unique memento! Combine nature and artistry with this super cute rock painting kit for a group of four. Includes paintbrushes, paint set, lacquer and stencils.\', \'rockpainting.jpg\', 28),' + 
          '(10, \'Beach Badminton\', \'Beach badminton shuttlecock net racquets and visors kit. What are you waiting for? Grab your friends and get out on the sand. Includes net, four racquets, 3 shuttlecocks and 4 cool hats.\', \'Badminton.jpg\', 66),' + 
          '(11, \'Kimchi Kit\', \'Kimchi kit! Make your own delicious spicy fermented food with this complete kimchi preparation kit. Arrives with fresh ingredients in a coolbag.\', \'KimchiKit.jpg\', 25),' + 
          '(12, \'Mexico Style Desert Terrarium\', \'Grow your own living Mexico style desert terrarium with these rare varieties. All cuttings are made fresh from healthy, well established outdoor plants.\', \'SucculentTerrarium.jpg\', 28),' + 
          '(13, \'Veggie Knit Kit\', \'Veggie knit kit‚ create a posse of soft and snuggly mini companions. Yarn, needles, googly eyes and complete instructions for 5 veggie friends.\', \'KnitVeggie.jpg\', 14),' + 
          '(14, \'Wooden Birdhouse Succulent Planter\', \'Construct a cosy wooden birdhouse succulent planter. Living succulent birdhouse planter kit. Construct a cosy home to welcome winged friends. Complete plant care instructions included. 20cm x 27cm x 22cm.\', \'SucculentBirdhouse.jpg\', 41),' + 
          '(15, \'Biology Frog Knitting Kit\', \'Biology frog knitting kit. True to anatomy! Display on a cork board for an authentic look. Includes diagrams.\', \'KnitFrogBiology.jpg\', 19),' + 
          '(16, \'Animal Succulent Pots\', \'Decorate resin succulent pots as cute animals. Perfect kit to enjoy with a friend or younger family member.\', \'SucculentAnimals.jpg\', 39),' + 
          '(17, \'Biggest Blanket Ever\', \'Up for a challenge? Knit yourself the biggest blanket ever in super thick yarn. This is not for the faint hearted!\', \'KnitLarge.jpg\', 45)');
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
  setupBoxesAsync,
  dropDatabaseTablesAsync,
};
