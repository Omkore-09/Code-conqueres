import { db } from '@/service/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'sonner';
import InfoSection from '../components/InfoSection';
import Hotels from '../components/Hotels';
import PlacesToVisit from '../components/PlacesToVisit';
import Restaurants from '../components/Restaurants';

const ViewTrip = () => {

    const {tripId}=useParams();
    const [trip, setTrip] = React.useState([]);

    useEffect(()=>{
       tripId&&GetTripData();

    },[tripId])



    const GetTripData=async()=>{
        const docRef=doc(db,"Trips",tripId)
        const docSnap=await getDoc(docRef);

        if(docSnap.exists()){
            console.log("Doacument : ",docSnap.data());
            setTrip(docSnap.data());
        }else{
            console.log("No such document!");
            toast('No trip Found !')
        }

    }

  return (
    <div className='p-10 md:px-20 lg:px-44 xl:px-56'>
      {/* Infromation sec  */}
      <InfoSection trip={trip} />

      {/* Recomended hotels */}
      <Hotels trip={trip} />

      {/* ittreanary */}
      <PlacesToVisit trip={trip} />

      {/* restaurants  */}
      <Restaurants trip={trip} />
    </div>
  )
}

export default ViewTrip
