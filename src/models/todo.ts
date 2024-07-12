
class Todo{
    id:string;
    text:string;

    constructor(Todotext:string)
    {
        this.text = Todotext;
        this.id = new Date().toISOString();
    }
}

export default Todo;