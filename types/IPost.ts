export interface IPost{
    id: string,
    author: string,
    comments?: IComment[],
    title: string,
    text: string
}

interface IComment {
    id: string;
    text: string;
}