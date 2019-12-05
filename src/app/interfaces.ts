export interface Complaint {
    id: number;
    title: string;
    date: string;
    complainer: string;
    priority: "Alta" | "Media" | "Baja";
    cyber: boolean;
    declaration: string;
}