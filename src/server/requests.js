import axios from "axios";

export const getRecipes = async () => {
    try {
         return await axios.get('http://localhost:8080/api/v1/recipe')
    } catch (error) {
        throw error;
    }

}
export const getNews = async () => {
    try {
         return await axios.get('http://localhost:8080/api/v1/news')
    } catch (error) {
        throw error;
    }

}
export const getBlogs = async () => {
    try {
         return await axios.get('http://localhost:8080/api/v1/blog')
    } catch (error) {
        throw error;
    }

}

export const getRecipesRandom = async (random) => {
    try {
         return await axios.get(`http://localhost:8080/api/v1/recipe/${random}`)
    } catch (error) {
        throw error;
    }

}
export const getNewsRandom = async (random) => {
    try {
         return await axios.get(`http://localhost:8080/api/v1/news/${random}`)
    } catch (error) {
        throw error;
    }

}
export const getBlogRandom = async (random) => {
    try {
         return await axios.get(`http://localhost:8080/api/v1/blog/${random}`)
    } catch (error) {
        throw error;
    }

}

export const getWeeklySpecial = async () => {
    try {
         return await axios.get(`http://localhost:8080/api/v1/recipe/special`)
    } catch (error) {
        throw error;
    }

}

// TODO: complete all the functionlity under here
export const saveCustomer = async (customer) => {
    try {
        return await axios.post(`${import.meta.env.API_BASE_URL}/api/v1/customer/register`, customer)
    } catch (error) {
        throw error;
    }
}

export const deleteCustomer = async (email) => {
    try {
        return await axios.delete(`${import.meta.env.API_BASE_URL}/api/v1/customer/delete/${email}`)
    } catch (error) {
        throw error;
    }
}

export const updateCustomer = async (email,customer) => {
    try {
        return await axios.put(`${import.meta.env.API_BASE_URL}/api/v1/customer/update/${email}`,customer)
    } catch (error) {
        throw error;
    }
}