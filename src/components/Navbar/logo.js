import { Link } from "react-router-dom";
import * as ROUTES from '../../constants/routes'

export default function Logo(){
    return (
        <Link to={ROUTES.Dashboard} className="h-full inline-flex justify-center items-center">
            <img src="/images/pie.png" className="h-5/6" alt="pie logo" />
            <p className="ml-1 font-header text-white text-3xl capitalize">the pie</p>
        </Link>
    )
}