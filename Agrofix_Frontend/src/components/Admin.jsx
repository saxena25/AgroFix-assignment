import { useEffect, useState } from "react";
import axios from "axios";
import "./Admin.css";

function Admin() {
    const [data, setData] = useState([])

    const fetchData = async () =>{
        try {
            const res = await axios.get("http://localhost:1122/admin/orders");
            console.log(res.data);
            setData(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchData()
    },[])
  return (
    <div className="admin-wrapper">
      <div className="admin-cards">
        {
            data.map((item, index)=>(
                <div className="card" key={index}>
                    <p>BuyerName: {item.buyerName}</p>
                    <p>Contact No: {item.contact}</p>
                    <p>Address: {item.address}</p>
                    <p>Order Status: {item.status}</p>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Admin
