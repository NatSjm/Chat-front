const messages = async (body, action = () => {}) => {
	action((state) => {
		return {
			...state,
			data: Array.isArray(body)
				? body
				: [
					body,
					...state.data,

				],
		};
	});
};

export default messages;
