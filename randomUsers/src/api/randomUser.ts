import apiClient from "./conectApi";

export async function getUser(): Promise<any> {
    try {
        const response = await apiClient.get('');
        return response.data;
    } catch (error) {
        console.error('Error fetching types:', error);
    }
}