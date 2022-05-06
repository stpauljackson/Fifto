import './cat.css'
import CatCard from './CatCard'
import Logo from '../logo.svg'
import Topwear from '../topwear.svg'
import Footwear from '../footwear.svg'
import Bottomwear from '../bottomwear.svg'
import Accessories from '../accessories.svg'

const x = [{cat:"Topwear"},{cat:"Bottomwear"},{cat:"Footwear"},{cat:"Accessories"}]
const Catlist = x.map((y)=>(<CatCard  title={y.cat} img={Topwear}/>))    

const Cat = () => {
    return(
        <div className="cat" >
        {/* {Catlist} */}
        <CatCard  title="Topwear" img={Topwear} />
        <CatCard  title="Bottomwear" img={Bottomwear} />
        <CatCard  title="Footwear" img={Footwear} />
        <CatCard  title="Accessories" img={Accessories} />
        </div>
    )
}

export default Cat;