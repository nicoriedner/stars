
interface IProduct {
    id:number,
    category : string,
    title:string,
    subtitle:string,
    details:string,
    image?:string,
    likes: number
}

export default IProduct;