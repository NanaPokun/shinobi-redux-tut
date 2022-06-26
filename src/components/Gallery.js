import pics from '../Naruto.jpg';
import pic from '../Kakashi.jpg';
import naruto from '../naru.jpg';
import madara from '../Madara.jpg';


const Gallery = () => {
    return (
        <div className="container">
            <h4 className="center">Gallery</h4>
            <div className="divider"></div>
            <div className="section">
               <img className='center-align' src= { pics } alt="Naruto" />
            </div>
            <div className="divider"></div>
            <div className="section">
               <img className='right' src= { pic } alt="kakashi" />
            </div>
            <div className="divider"></div>
            <div className="section">
                <img className='' src= { naruto } alt="Sage" />
            </div>
            <div className="divider"></div>
            <div className="section">
               <img className='right' src= { madara } alt="Uchiha" />
            </div>
        </div>
    );
}
 
export default Gallery;