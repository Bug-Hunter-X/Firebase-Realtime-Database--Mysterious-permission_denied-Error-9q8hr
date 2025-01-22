//bugSolution.js
//Instead of using a deeply nested structure in the database, which can make it harder to manage permissions,
//use a flattened structure that's more easily controlled by security rules

//Example of a flat structure
const db = firebase.database();
const userId = 'user123';
const data = {
  user: {
    [userId]: {
      profile: {
        name: "John Doe",
        email: "john.doe@example.com",
      },
      settings: {
        notificationsEnabled: true,
      }
    }
  }
};

db.ref('/user/' + userId).set(data)
  .then(() => {
    console.log('Data saved successfully!');
  })
  .catch((error) => {
    console.error('Error saving data:', error);
  });

//Updated security rules (rules.json) for the flat structure
// ... your rules ... 

//These rules would now explicitly define read and write access based on userId and other relevant criteria

//Remember to adapt these rules to your specific security needs.