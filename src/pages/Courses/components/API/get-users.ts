import axios from "axios";

async function getUsers() {
    try{
        const response = await axios.get(
            "https://6603cdb22393662c31cfb8f4.mockapi.io/studentFeedback"
        );
        return response.data;
    } catch (error) {
        console.log(error);
        
    }
    
}

export default getUsers