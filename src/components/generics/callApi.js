import axios from "axios";
const callApi = async(urlInput,_limit)=>{
    let url= `${urlInput}`;
    const rpta = await axios.get(url);
    return rpta;
}

export default callApi;