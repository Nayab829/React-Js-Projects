const localtodo = "localTodos";
export const getLocalTodos = ()=>{
    const rawTodo = localStorage.getItem(localtodo);
    if(!rawTodo) return[];
    return JSON.parse(rawTodo);
}
export const setLocalTodos = (todos) => {
    localStorage.setItem(localtodo, JSON.stringify(todos));

}