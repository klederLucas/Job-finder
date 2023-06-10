import React, {useReducer, useContext} from "react";
import reducer from './reducer';
import {CLEAR_ALERT, DISPLAY_ALERT} from "./actions";

const initialState = {
	loading: false,
	showAlert: false,
	alertText: '',
	alertType: '',
}

const AppContext = React.createContext();

const AppProvider = ({children}) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const clearAlert = () => {
		setTimeout(() => {
			dispatch({
				type: CLEAR_ALERT,
			})
		}, 3000)
	}

	const displayAlert = () => {
		dispatch({ type: DISPLAY_ALERT })
		clearAlert();
	}

	return <AppContext.Provider value={{ ...state, displayAlert }}>
		{children}
	</AppContext.Provider>
}

const useAppContext = () => {
	return useContext(AppContext);
}

export {AppProvider, initialState, useAppContext}