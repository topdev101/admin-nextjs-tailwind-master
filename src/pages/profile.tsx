import {
  mdiAccount,
} from '@mdi/js'
import type { ReactElement } from 'react'
import CardBox from '../components/CardBox'
import FormField from '../components/FormField'
import LayoutAuthenticated from '../layouts/Authenticated'
import SectionMain from '../components/SectionMain'
import SectionTitleLineWithButton from '../components/SectionTitleLineWithButton'
import UserCard from '../components/UserCard'

const ProfilePage = () => {

  return (
    <>
      <SectionMain>
        <SectionTitleLineWithButton icon={mdiAccount} title="Profile" main>
        </SectionTitleLineWithButton>

        <UserCard className="mb-6" />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="flex flex-col">
            <CardBox className="mb-6">
              <FormField>
                <></>
              </FormField>
            </CardBox>
          </div>

          <CardBox hasComponentLayout>
            <></>
          </CardBox>
        </div>
      </SectionMain>
    </>
  )
}

ProfilePage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default ProfilePage
