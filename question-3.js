// เริ่มเขียนโค้ดตรงนี้
async function getUsers() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        
        const filterNameData = data
            .filter((arr) => {
                return arr.name.length > 17
            })
            .map((arr) => {
                return arr.name
            })

        console.log(filterNameData);
    } 
    catch (error) {
        console.log("Something went wrong: ", error.message)
    }
};

getUsers();
/* Output:
[
  'Mrs. Dennis Schulist',
  'Nicholas Runolfsdottir V',
  'Clementina DuBuque'
]
*/