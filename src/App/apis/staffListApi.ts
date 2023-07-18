import instance from "./index";

const getAllUser = (limit=10) => {
   console.log(limit)
   return instance.get(`/users`)
}

export { getAllUser}