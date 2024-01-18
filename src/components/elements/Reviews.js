import { useState, useEffect, React } from 'react';

const Reviews = ({item}) => {
    const [ totalStars, setTotalStars ] = useState('');
    const { name, image, stars, description } = item;
    useEffect(() => {
        switch(stars){
            case 1:
                setTotalStars(<>
                    <i className="fa-solid fa-star terra"></i>
                    <i className="fa-solid fa-star white"></i>
                    <i className="fa-solid fa-star white"></i>
                    <i className="fa-solid fa-star white"></i>
                    <i className="fa-solid fa-star white"></i>
                </>)
        break;
            case 2:
                setTotalStars(<>
                                <i className="fa-solid fa-star terra"></i>
                                <i className="fa-solid fa-star terra"></i>
                                <i className="fa-solid fa-star white"></i>
                                <i className="fa-solid fa-star white"></i>
                                <i className="fa-solid fa-star white"></i>
                            </>)
                    break;
                case 3:
                    setTotalStars(<>
                                    <i className="fa-solid fa-star terra"></i>
                                    <i className="fa-solid fa-star terra"></i>
                                    <i className="fa-solid fa-star terra"></i>
                                    <i className="fa-solid fa-star white"></i>
                                    <i className="fa-solid fa-star white"></i>
                                    </>)
                    break;        
                    case 4:
                        setTotalStars(`<i className="fa-solid fa-star terra"></i>
                                        <i className="fa-solid fa-star terra"></i>
                                        <i className="fa-solid fa-star terra"></i>
                                        <i className="fa-solid fa-star terra"></i>
                                        <i className="fa-solid fa-star white"></i>')`)
                        break;
                        case 5:
                            setTotalStars(<>
                                <i className="fa-solid fa-star terra"></i>
                                <i className="fa-solid fa-star terra"></i>
                                <i className="fa-solid fa-star terra"></i>
                                <i className="fa-solid fa-star terra"></i>
                                <i className="fa-solid fa-star terra"></i>
                            </>)
                    break;                            
                    default:
                            setTotalStars(<>
                                            <i className="fa-solid fa-star white"></i>
                                            <i className="fa-solid fa-star white"></i>
                                            <i className="fa-solid fa-star white"></i>
                                            <i className="fa-solid fa-star white"></i>
                                            <i className="fa-solid fa-star white"></i>
                                            </>)
                            break;
                        }
        }, [])

        return(
        <>
            <img className="review-image" src={image} alt={name} />
                <h3>{name}</h3>
                {totalStars}
            <p>{description}</p>
        </>
    )
}

export default Reviews;