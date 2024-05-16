import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    user:null,
    token:null,
    posts:[],
    news:[],
}

export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        setLogin:(state,action)=>{
            const {user,accessToken}=action.payload
            state.user=user;
            state.token=accessToken;
        },
        setLogout:(state)=>{
            state.user=null;
            state.token=null;
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

export const {setLogin,setLogout,setPosts,setNews,setPost}=authSlice.actions;
export default authSlice.reducer;

export const slectCurrentUser=(state)=>state.auth.user;
export const selectCurrentToken=(state)=>state.auth.token;