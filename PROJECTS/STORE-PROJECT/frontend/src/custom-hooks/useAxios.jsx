import axios from "axios"

const useAxios = () => {
    const axiosPublic = axios.create({
        baseURL: import.meta.env.VITE_BASE_URL
        
      });

  return { axiosPublic }
}

export default useAxios