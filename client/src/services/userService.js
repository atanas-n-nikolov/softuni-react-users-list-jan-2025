const baseUlt = 'http://localhost:3030/jsonstore/users';

export default {
    async getAll() {
        const response = await fetch(baseUlt);
        const result = await response.json();
        const users = Object.values(result)
        
        return users;
    }
}