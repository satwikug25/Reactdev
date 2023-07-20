import { createContext } from "react";

const userContext = createContext({
    name: "DUMMY",
    email: "dummy@dmmy.com"
});

export default userContext;