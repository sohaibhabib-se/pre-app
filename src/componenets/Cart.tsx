import { useEffect, useState } from "react"
import MenuItem from "./MenuItem"


const Cart = () => {
  useEffect(() => {
    setTimeout(() => {
      setFirstItem(item => {
        return {
          ...item,
          quantity: 10
        }
      })
    }, 6000)
  })
  const [firstItem, setFirstItem] = useState({
    name : "Milk",
    quantity: 2
  });
  return (
   <section className="max-w-sm mx-auto">
   <h1>CarT Items</h1>
   <ul>
    <MenuItem item={firstItem} />

   <MenuItem item={{
    name: "Soap",
    quantity: 5
   }} />

   <MenuItem item={{
    name: "Tooth Brush",
    quantity: 3
   }} />
   </ul>
   </section>
  )
}

export default Cart