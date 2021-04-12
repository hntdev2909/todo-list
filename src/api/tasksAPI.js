import axios from 'axios';
//https://server-intern-idra.herokuapp.com
// http://localhost:5000
const baseUrl = 'https://server-intern-idra.herokuapp.com/todolist';

export const API = {
	async callListTask() {
		return await axios.get(baseUrl);
	},

	async createNewTask(value) {
		return await axios.post(baseUrl + '/create', {
			content: value,
			isCompleted: false,
		});
	},

	async editLisTask(id, value) {
		return await axios.put(baseUrl + `/${id}`, value);
	},

	async deleteTask(id) {
		return await axios.delete(baseUrl + `/${id}`);
	},

	async deleteAll() {
		return await axios.delete(baseUrl + `/delete`);
	},

	async editTypeAll(type) {
		return await axios.put(baseUrl + `/change`, type);
	},

	async filtersType(type) {
		return await axios.get(baseUrl + `/filters/${type}`);
	},
};
