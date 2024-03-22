import { Link } from "@mui/material";
import diamond from "../../assets/diamond.png";

export default function Result() {
    return (
      <div style={{ textAlign: 'center', padding: 50}}>
        <img src={diamond} alt="diamond" width={35}/>
        <h1>You gained +3000 XP!</h1>

        <Link href="/dashboard">Back to dashboard</Link>
      </div>
    );
}