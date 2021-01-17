import Cookie from "js-cookie";

const token = Cookie.get("token");
// const API_SERVER = 'https://pg.jazaa.id:5005';
const API_SERVER = "http://localhost:5001";

export { token, API_SERVER };
