import './style.scss'
import utility from 'src/utils/utility'
import { useNavigate } from 'react-router-dom';


const Home: React.FC = () => {
    const navigate = useNavigate()

    return (
        <>
            <p>Dashboard Home screen</p>
            <p onClick={() => navigate('/dashboard/screen-2')}>Next Screen</p>
        </>
    );
}

export default utility.routeData('home', 'Dashboard Home', <Home/>)