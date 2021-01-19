import axios from "axios";

export default {getContact: function() {
    return axios.get("/api/contact");
}, storeContact: function(data) {
    return axios.post("/api/contact", data)
}};