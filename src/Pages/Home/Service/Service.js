import React, { useEffect, useState } from "react";
import Card from "../Card/Card";



const Service = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("./products.JSON")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <>
    
      <div className="container ">
        <div className="row ">
         
          {services.map((service) => (
            <Card key={services.id} service={service} setServices={setServices}>
              card:{services.length}
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Service;
