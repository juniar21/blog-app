import { createSlice,PayloadAction } from "@reduxjs/toolkit";

interface UserState {
    objectId: string;
    login: string;
    password: string
}
const userSlice = createSlice({
    name: "user",
    initialState: {objectId:"",login:"",password:""},
    reducers: {
        login:(state, action: PayloadAction<UserState>) => {
            state.objectId = action.payload.objectId;
            state.login = action.payload.login;
            state.password = action.payload.password;
        },
        logout: (state) => {
            state.objectId = "";
            state.login = "";
            state.password = "";
        }
    }
})


export const {login, logout} = userSlice.actions;
export default userSlice.reducer;