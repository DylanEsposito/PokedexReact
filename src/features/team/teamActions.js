export const add_entry = 'add';
export const addEntry = (entry) => ({ type: add_entry, payload: entry });

export const remove_entry = 'remove';
export const removeEntry = (id) => ({ type: remove_entry, payload: id });
