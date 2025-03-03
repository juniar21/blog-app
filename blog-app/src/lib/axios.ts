import axios from "axios";

const BASE_URL = "https://prizedgirl-us.backendless.app/api";

export default axios.create({
    baseURL: BASE_URL
})