import apiClient from "./conectApi";

export async function getUser(nat: string | null, gender: string | null): Promise<any> {
    try {
        let url = '?results=50';

        if (nat) {
            url += `&nat=${nat}`;
        }

        if (gender) {
            url += `&gender=${gender}`;
        }

        const response = await apiClient.get(url);
        return response.data;
    } catch (error) {
        console.error('Error fetching types:', error);
    }
}
