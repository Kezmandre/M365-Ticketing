import { writeBatch, doc, collection } from "@firebase/firestore";
import { db } from "./firebaseConfig";
import users from "./data";


const uploadUsers = async () => {

    const batch = writeBatch(db)

    const userCollection = collection(db,"users")

    users.forEach((user, index)=>{
        console.log("users", user)
        const userRef = doc(userCollection, `user${index + 1}`)
        batch.set(userRef, user)
    })

    try {
        await batch.commit()
        console.log("user uploaded successfully")
    } catch (error) {
        console.error("Error uploading users:", error)
    }
};

export default uploadUsers
