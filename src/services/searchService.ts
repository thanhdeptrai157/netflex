import axios from '@/config/axios';

// search api
export const searchMovies = async (keyword: string, limit: number = 10) => {
    try{
        const response = await axios.get('v1/api/tim-kiem',{
            params: { keyword, limit }
        })
        return response.data;
    }
    catch(error){
        console.log(error);
        throw error;
    }
}