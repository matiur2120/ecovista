import Link from 'next/link'
import Card from './Card'

const NoLocationFound = ({location}) => {
  return (
    <Card>
        <p className="text-xl font-semibold text-center">
            No location found for {location}
        </p>
        <div className='w-full flex pt-4 justify-center'>
            <Link  href="/" >Back To Home</Link>
        </div>
      
    </Card>
  )
}

export default NoLocationFound