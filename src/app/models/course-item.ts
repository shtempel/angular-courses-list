export interface ICourseItem {
    description: string;
    releaseDate: string;
    topRated: boolean;
    authors: [];
    duration: number;
    title: string;
    id: number;
}

export interface IAuthor {
    firstName: string;
    id: number;
    lastName: string;
}
