import axios from "axios";

export const getRecipes = async () => {
    try {
         return await axios.get(`${import.meta.env.API_BASE_URLapi/v1/recipe}`)
    } catch (error) {
        throw error;
    }

}
export const getNews = async () => {
    try {
         return await axios.get(`${import.meta.env.API_BASE_URL}/api/v1/news`)
    } catch (error) {
        throw error;
    }

}
export const getBlogs = async () => {
    try {
         return await axios.get(`${import.meta.env.API_BASE_URL}/api/v1/blog`)
    } catch (error) {
        throw error;
    }

}

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