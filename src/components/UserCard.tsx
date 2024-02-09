import { useAppSelector } from '../stores/hooks'
import CardBox from './CardBox'
import UserAvatarCurrentUser from './UserAvatarCurrentUser'

type Props = {
  className?: string
}

const UserCard = ({ className }: Props) => {
  const userName = useAppSelector((state) => state.main.userName)

  return (
    <CardBox className={className}>
      <div className="flex flex-col items-center justify-around lg:flex-row lg:justify-center">
        <UserAvatarCurrentUser className="mb-6 lg:mb-0 lg:mx-12" />
      </div>
    </CardBox>
  )
}

export default UserCard