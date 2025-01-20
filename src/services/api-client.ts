import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:"a83a4394f85a49b9b61e0e26eed19632"
    }
})