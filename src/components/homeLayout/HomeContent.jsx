import Form from "./Form"
import Product from "./Product"

const HomeContent = () => {
  return (
    <main className="py-16">
    <div className="productWrapper">
      {/* <!-- products container --> */}
       <Product/>
      {/* <!-- products container ends --> */}
      <div>
        {/* <!-- Product Input Form --> */}
         <Form/>
        {/* <!-- Product Input Form Ends --> */}
      </div>
    </div>
  </main>
  )
}

export default HomeContent