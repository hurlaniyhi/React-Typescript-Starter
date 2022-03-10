import './style.scss'
import utility from 'src/utils/utility'


const Users: React.FC = () => {

    return (
        <p>User screen</p>
    );
}

export default utility.routeData('users', 'Users', <Users/>)