import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    user:null,
    token:null,
    history:[],
    favourites:[],
    posts:[],
    news:[],
    isLoggedIn:false,
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        setLogin:(state,action)=>{
            const {user,history,accessToken}=action.payload
            state.user=user;
            state.history=history;
            state.token=accessToken;
            state.isLoggedIn=true;
        },
        
        setUpdateUser: (state, action) => {
            state.user = action.payload.user;
        },
        setLogout:(state)=>{
            state.user=null;
            state.history=[];
            state.token=null;
            state.isLoggedIn=false;
        },
        setHistory:(state,action)=>{
            state.history=action.payload;
        },
        setPosts:(state,action)=>{
            state.posts=action.payload;
        },
        setNews:(state,action)=>{
            state.news=action.payload;
        },
        setPost:(state,action)=>{
            const updatedPosts=state.posts.map((post)=>{
                if(post.id===action.payload.id){
                    return action.payload;
                }
                return post;
            })
            state.posts=updatedPosts;
        }
    }
})

export const {setLogin,setLogout,setPosts,setNews,setPost,setUpdateUser,setHistory}=authSlice.actions;
 export default authSlice.reducer;

export const selectCurrentUser=(state)=>state.auth.user;
export const selectCurrentToken=(state)=>state.auth.token;
export const selectHistory=(state)=>state.auth.history;
export const selectFavourites=(state)=>state.auth.favourites;