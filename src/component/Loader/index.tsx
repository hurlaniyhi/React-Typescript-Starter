import { images } from 'src/provider/config/constant'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { TailSpin } from  'react-loader-spinner'
import './style.scss'

export const Loader: React.FC = () => {
    return (
        <div className="loader-container">
            <div className='loader-wrapper'>
                <img className="loader-logo" src='https://uploads-ssl.webflow.com/61a252e6f32925a3af57a40f/6203ed64c0e3733b91dc2504_crendly%20logo-colored.svg' />
                <TailSpin 
                    color="#05001b" 
                    height={80} 
                    width={80} 
                />
            </div>
        </div>
    )
}