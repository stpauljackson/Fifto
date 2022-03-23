import './cat.css'
import CatCard from './CatCard'
import Logo from '../logo.svg'

const x = [{cat:"Topwear"},{cat:"Bottomwear"},{cat:"Footwear"},{cat:"Accessories"}]
const Catlist = x.map((y)=>(<CatCard  title={y.cat} img={Logo}/>))    

const Cat = () => {
    return(
        <div className="cat" >
        {Catlist}
        </div>
    )
}

export default Cat;