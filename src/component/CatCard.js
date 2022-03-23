import './CatCard.css'

const CatCard = (props) => (
    <div className='card'>
        <div className='card_img_container'>
            <img className='card_img' src={props.img}/>
        </div>
        <p>{props.title}</p>
    </div>
);

export default CatCard;