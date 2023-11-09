import axios from 'axios'

const baseURl = "https://api.themoviedb.org/3";
const tmdbToken = import.meta.env.VITE_APP_TMDB_TOKEN;

const headers = {
    Authorization: "bearer " +tmdbToken,

};

export const fetchDataFromApi = async(url,params) =>{
    try{
        const {data} = await axios.get(baseURl + url,{
            headers,
            params
        })
        return data
    }catch(err){
        console.log(err)
        return err
    }
}