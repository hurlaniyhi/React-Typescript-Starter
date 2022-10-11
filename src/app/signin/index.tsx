import utility from 'src/utils/utility'
import { useNavigate } from 'react-router-dom'


const SignIn: React.FC = () => {
    const navigate = useNavigate()
    return (
        <p onClick={() => navigate('/dashboard/home')}>Signin</p>
    )
}

export default utility.routeData('/', 'SignIn', <SignIn/>)