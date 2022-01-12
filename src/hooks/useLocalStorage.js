import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
	const [localStorageValue, setLocalStorageValue] = useState(() => getLocalStorageValue(key, initialValue));

	const setValue = (value) => {
		// check if 'value' is a function
		const valueToStore = value instanceof Function ? value(localStorageValue) : value;

		// set to state
		setLocalStorageValue(value);

		// set to localstorage
		localStorage.setItem(key, JSON.stringify(valueToStore));
	};

	return [localStorageValue, setValue];
};

function getLocalStorageValue(key, initialValue) {
	const itemFromStorage = localStorage.getItem(key);
	return itemFromStorage ? JSON.parse(itemFromStorage) : initialValue;
}

export default useLocalStorage;
