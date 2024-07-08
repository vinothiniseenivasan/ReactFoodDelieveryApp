import { useEffect, useState } from "react";

import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    

    window.addEventListener("offline", () => {
    
        setOnlineStatus(false);
      });
      window.addEventListener("online", () => {
    
        setOnlineStatus(true);
      });
   
  }, []);


  // Return whether the network is available or not => it's a boolean value
  return onlineStatus;
};

export default useOnlineStatus;
