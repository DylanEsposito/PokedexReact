// DEEM Will try this and see if it workss
// From Leo on 
// https://stackoverflow.com/questions/37195590/how-can-i-persist-redux-state-tree-on-refresh

class StateLoader {

    loadState() {
        try {
            let serializedState = localStorage.getItem("http://contoso.com:state");

            if (serializedState === null) {
                return this.initializeState();
            }

            return JSON.parse(serializedState);
        }
        catch (err) {
            return this.initializeState();
        }
    }

    saveState(state) {
        try {
            let serializedState = JSON.stringify(state);
            localStorage.setItem("http://contoso.com:state", serializedState);

        }
        catch (err) {
        }
    }

    initializeState() {
        return {
            //state object
        }
    };
    
}