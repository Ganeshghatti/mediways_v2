import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import Services from '../../features/services'

function ServicesPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Services"}))
      }, [])


    return(
        <Services />
    )
}

export default ServicesPage