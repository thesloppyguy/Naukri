import axios from "axios";

const IsAuth = async () => {
  try {
    const response = await axios.get("http://localhost:5000/api", {
      withCredentials: true,
    });
    if (response.data) {
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
};

export default IsAuth;
