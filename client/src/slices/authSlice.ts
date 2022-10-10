import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../services/AuthService";
import {IRegisterData, IAuthData, IAuthUser} from '../models/authModels';

let storedUser:any = localStorage.getItem("currentUser");
const user = (typeof storedUser === 'string') ? JSON.parse(storedUser) : null;

export const register = createAsyncThunk(
    "auth/register",
    async (userData:IRegisterData, thunkAPI) => {
        try {
            const response = await AuthService.register(userData.email, userData.password);
            return response.data;
        } catch (error:any) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);
export const login = createAsyncThunk(
    "auth/login",
    async (userData:IAuthData, thunkAPI) => {
        try {
            const data = await AuthService.login(userData.email, userData.password);
            return { user: data };
        } catch (error:any) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);
export const logout = createAsyncThunk("auth/logout", async () => {
    await AuthService.logout();
});

interface IAuthState {
    isLoggedIn:boolean,
    currentUser:IAuthUser|null
}
const initialState:IAuthState = user ? { isLoggedIn: true, currentUser:user }: { isLoggedIn: false, currentUser: null };

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: { },
    extraReducers(builder) {
        builder
            .addCase(register.pending, (state, action) => {
                state.isLoggedIn = false;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoggedIn = false;
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoggedIn = false;
            })
            .addCase(login.pending, (state, action) => {
                state.isLoggedIn = false;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoggedIn = true;
                state.currentUser = action.payload.user;
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoggedIn = false;
                state.currentUser = null;
            })
            .addCase(logout.fulfilled, (state, action) => {
                state.isLoggedIn = false;
                state.currentUser = null;
            })        
    },
});
const { reducer } = authSlice;
export default reducer;