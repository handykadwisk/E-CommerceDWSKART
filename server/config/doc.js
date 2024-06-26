/*
npx sequelize-cli model:generate --name User --attributes username:string,email:string,password:string
npx sequelize-cli model:generate --name Product --attributes name:string,description:string,imgUrl:string,price:number,status:string
npx sequelize-cli model:generate --name Wishlist --attributes userId:number,productId:number,status:string
npx sequelize-cli model:generate --name Transaction --attributes wishlistId:number,amount:number,status:string

*/