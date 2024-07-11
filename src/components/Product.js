import one from"../assets/images/one.jpg"
import two from"../assets/images/two.jpg"
import three from"../assets/images/three.jpg"
//products component
function Product()
{
  return(
    <div class="products">
        <div class="box">
            <img src={one} alt="one"></img>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Dolore labore ut dolores inventore sint repellendus magnam 
               tenetur ducimus molestias soluta!</p>
        </div>
        <div class="box">
            <img src={two} alt="two"></img>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Dolore labore ut dolores inventore sint repellendus magnam 
               tenetur ducimus molestias soluta!</p>
        </div>
        <div class="box">
            <img src={three} alt="three"></img>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Dolore labore ut dolores inventore sint repellendus magnam tenetur
                ducimus molestias soluta!</p>
        </div>

    </div>

  )
}

export default Product