export class TODOItem {

    constructor(title: string, description: string, dueDate: string = null) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
    }

    title: string;
    description: string;
    dueDate: string;
}
