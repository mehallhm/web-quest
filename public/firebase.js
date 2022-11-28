import { initializeApp } from "firebase/app";
import firebaseConfig from "./creds.js";

const app = initializeApp(firebaseConfig);

export default { app };
// export default { sendData, getData };
